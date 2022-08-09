// 9.3 파생 변수를 질의 함수로 바꾸기
// 예시: 소스가 둘 이상일 때
class ProductionPlan {
	constructor(production) {
		this._initialProduction = production;
		this._productionAccumulator = 0;
		this._adjustments = [];
	}

	get production() {
		return this._initialProduction + this._productionAccumulator;
	}

	applyAdjustment(anAdjustment) {
		this._adjustments.push(anAdjustment);
		this._production += anAdjustment.amount;
	}
}
