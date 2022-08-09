// 9.3 파생 변수를 질의 함수로 바꾸기
class ProductionPlan {
	get production() {
		return this._production;
	}

	applyAdjustment(anAdjustment) {
		this._adjustments.push(anAdjustment);
		this._production += anAdjustment.amount;
	}
}
