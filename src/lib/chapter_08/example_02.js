// 8.1 함수 옮기기
// 예시: 다른 클래스로 옮기기
export class Account {
	// 은행 이자 계산
	get bankCharge() {
		let result = 4.5;
		if (this._daysOverdrawn > 0) result += this.overdraftCharge;
		return result;
	}

	// 초과 인출 이자 계산
	get overdraftCharge() {
		if (this.type.isPrimium) {
			const baseCharge = 10;
			if (this._daysOverdrawn <= 7) return baseCharge;
			else return baseCharge + (this._daysOverdrawn - 7) * 0.85;
		} else return this._daysOverdrawn * 1.75;
	}
}
