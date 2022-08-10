// 10.6 어서션 추가하기
class Customer {
	applyDiscount(aNumber) {
		if (!this.discountRate) return aNumber;
		else {
			assert(this.discountRate >= 0);
			return aNumber - this.discountRate * aNumber;
		}
	}
}
