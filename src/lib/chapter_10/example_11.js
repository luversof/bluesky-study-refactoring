// 10.6 어서션 추가하기
class Customer {
	applyDiscount(aNumber) {
		return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
	}
}
