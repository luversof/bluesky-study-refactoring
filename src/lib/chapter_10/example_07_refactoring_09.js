// 10.4 조건부 로직을 다형성으로 바꾸기
// 예시: 변형 동작을 다형성으로 표현하기 - 더 가다듬기
// 투자 등급
export function rating(voyage, history) {
	return createRating(voyage, history).value;
}

// 함수들을 Rating 클래스로 묶었다.
class Rating {
	constructor(voyage, history) {
		this.voyage = voyage;
		this.history = history;
	}

	get value() {
		const vpf = this.voyageProfitFactor;
		const vr = this.voyageRisk;
		const chr = this.captainHistoryRisk;
		if (vpf * 3 > vr + chr * 2) return 'A';
		else return 'B';
	}

	// 항해 경로 위험요소
	get voyageRisk() {
		let result = 1;
		if (this.voyage.length > 4) result += 2;
		if (this.voyage.length > 8) result += this.voyage.length - 8;
		if (['china', 'east-indies'].includes(this.voyage.zone)) result += 4;
		return Math.max(result, 0);
	}

	// 선장의 항해 이력 위험요소
	get captainHistoryRisk() {
		let result = 1;
		if (this.history.length < 5) result += 4;
		result += this.history.filter((v) => v.profit < 0).length;
		return Math.max(result, 0);
	}

	// 중국을 경유하는가?
	get hasChinaHistory() {
		return this.history.some((v) => '중국' === v.zone);
	}

	get voyageProfitFactor() {
		let result = 2;
		if (this.voyage.zone === '중국') result += 1;
		if (this.voyage.zone === '동인도') result += 1;
		result += this.historyLengthFactor;
		result += this.voyageLengthFactor;
		return result;
	}

	get voyageLengthFactor() {
		return this.voyage.length > 14 ? -1 : 0;
	}

	get historyLengthFactor() {
		return this.history.length > 8 ? 1 : 0;
	}
}

class ExperiencedChinaRating extends Rating {
	get captainHistoryRisk() {
		const result = super.captainHistoryRisk - 2;
		return Math.max(result, 0);
	}

	get voyageLengthFactor() {
		let result = 0;
		result += 3;
		if (this.voyage.length > 12) result += 1;
		if (this.voyage.length > 18) result -= 1;
		return result;
	}

	get historyLengthFactor() {
		return this.history.length > 10 ? 1 : 0;
	}
}

function createRating(voyage, history) {
	if (voyage.zone === '중국' && history.some((v) => '중국' === v.zone))
		return new ExperiencedChinaRating(voyage, history);
	else return new Rating(voyage, history);
}
