// 8.2 필드 옮기기
export class Customer {
	constructor(name, discountRate) {
		this._name = name;
		this._discountRate = discountRate;
		this._contract = new CustomerContract(this.dateToday());
	}

	get discountRate() {
		return this.__discountRate;
	}

	_setDiscountRate(aNumber) {
		this._discountRate = aNumber;
	}

	becomePreferred() {
		this._setDiscountRate(this.discountRate + 0.03);
		// 다른 멋진 일들
	}

	applyDiscount(amount) {
		return amount.subtract(amount.multiply(this.discountRate));
	}
}

class CustomerContract {
	constructor(startDate) {
		this._startDate = startDate;
	}
}
