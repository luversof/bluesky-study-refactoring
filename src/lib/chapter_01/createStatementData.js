export default function createStatementData(invoice, plays) {
	const statementData = {};
	statementData.customer = invoice.customer;
	statementData.performances = invoice.performances.map(enrichPerformance);
	statementData.totalAmount = totalAmount(statementData);
	statementData.totalVolumeCredits = totalVolumeCredits(statementData);
	return statementData;

	function enrichPerformance(aPerformance) {
		const caculator = createPerformanceCaculator(aPerformance, playFor(aPerformance));
		const result = Object.assign({}, aPerformance); // 얕은 복사 수행
		result.play = caculator.play;
		result.amount = caculator.amount;
		result.volumeCredits = caculator.volumeCredits;
		return result;
	}

	function playFor(aPerformance) {
		return plays[aPerformance.playID];
	}

	//여기서부터 중첩 함수 시작
	function totalAmount(data) {
		return data.performances.reduce((total, p) => total + p.amount, 0);
	}

	function totalVolumeCredits(data) {
		return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
	}
}

class PerformanceCaculator {
	constructor(aPerformance, aPlay) {
		this.performance = aPerformance;
		this.play = aPlay;
	}

	get amount() {
		throw new Error(`서브클래스에서 처리하도록 설계되었습니다.`);
	}
	get volumeCredits() {
		return Math.max(this.performance.audience - 30, 0);
	}
}

function createPerformanceCaculator(aPerformance, aPlay) {
	switch (aPlay.type) {
		case 'tragedy':
			return new TragedyCaculator(aPerformance, aPlay);
		case 'comedy':
			return new ComedyCaculator(aPerformance, aPlay);
		default:
			throw new Error(`알 수 없는 장르: ${aPlay.type}`);
	}
}

class TragedyCaculator extends PerformanceCaculator {
	get amount() {
		let result = 40000;
		if (this.performance.audience > 30) {
			result += 1000 * (this.performance.audience - 30);
		}
		return result;
	}
}

class ComedyCaculator extends PerformanceCaculator {
	get amount() {
		let result = 30000;
		if (this.performance.audience > 20) {
			result += 10000 + 500 * (this.performance.audience - 20);
		}
		result += 300 * this.performance.audience;
		return result;
	}

	get volumeCredits() {
		return super.volumeCredits + Math.floor(this.performance.audience / 5);
	}
}
