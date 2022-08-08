// 8.2 필드 옮기기
// 예시: 공유 객체로 이동하기
class Account {
	constructor(number, type) {
		this._number = number;
		this._type = type;
	}

	get interestRate() {
		return this.type._interestRate;
	}
}

class AccountType {
	constructor(nameString, interestRate) {
		this._name = nameString;
		this._interestRate = interestRate;
	}

	get interestRate() {
		return this._interestRate;
	}
}
