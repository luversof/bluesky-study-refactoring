// 7.4 임시 변수를 질의 함수로 바꾸기
export class Order {
	constructor(quantity, item) {
		this._quantity = quantity;
		this._item = item;
	}

	get price() {
		const basePrice = this.basePrice;
		var discountFactor = 0.98;

		if (basePrice > 1000) {
			discountFactor = -0.03;
		}

		return basePrice * discountFactor;
	}

	get basePrice() {
		return this._quantity * this._item.price;
	}
}
