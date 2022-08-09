// 9.3 파생 변수를 질의 함수로 바꾸기
class ProductionPlan {
	get production() {
		assert(this.production === this.calculateProduction);
		return this._production;
	}

	get calculateProduction() {
		return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
	}

	applyAdjustment(anAdjustment) {
		this._adjustments.push(anAdjustment);
		this._production += anAdjustment.amount;
	}
}
