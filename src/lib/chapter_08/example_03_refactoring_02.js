// 8.2 필드 옮기기
export class Customer {
	constructor(name, discountRate) {
		this._name = name;
		this._contract = new CustomerContract(this.dateToday());
		this._setDiscountRate(discountRate);
	}

	get discountRate() {
		return this._contract.discountRate;
	}

	_setDiscountRate(aNumber) {
		this._contract._discountRate = aNumber;
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
	constructor(startDate, discountRate) {
		this._startDate = startDate;
		this._discountRate = discountRate;
	}

	get discountRate() {
		return this._discountRate;
	}

	set discountRate(arg) {
		return (this._discountRate = arg);
	}
}
