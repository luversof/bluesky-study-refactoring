// 10.6 어서션 추가하기
class Customer {
	applyDiscount(aNumber) {
		if (!this.discountRate) return aNumber;
		else return aNumber - this.discountRate * aNumber;
	}

	set discountRate(aNumber) {
		assert(null === aNumber || aNumber >= 0);
		this._discountRate = aNumber;
	}
}
