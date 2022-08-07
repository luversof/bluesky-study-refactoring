// 8.1 함수 옮기기
// 예시: 다른 클래스로 옮기기
// 소스 컨텍스트에서 가져와야 할 데이터가 많다면?
export class Account {
	// 은행 이자 계산
	get bankCharge() {
		let result = 4.5;
		if (this._daysOverdrawn > 0) result += this.type.overdraftCharge;
		return result;
	}

	// 초과 인출 이자 계산
	get overdraftCharge() {
		return this.type.overdraftCharge(this);
	}
}

class AccountType {
	overdraftCharge(account) {
		if (this.isPrimium) {
			const baseCharge = 10;
			if (account.daysOverdrawn <= 7) return baseCharge;
			else return baseCharge + (account.daysOverdrawn - 7) * 0.85;
		} else return account.daysOverdrawn * 1.75;
	}
}
