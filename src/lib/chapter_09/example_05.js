// 9.3 파생 변수를 질의 함수로 바꾸기
// 예시: 소스가 둘 이상일 때
class ProductionPlan {
	constructor(production) {
		this._production = production;
		this._adjustments = [];
	}

	get production() {
		return this._production;
	}

	applyAdjustment(anAdjustment) {
		this._adjustments.push(anAdjustment);
		this._production += anAdjustment.amount;
	}
}
