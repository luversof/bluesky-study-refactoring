// 7.4 임시 변수를 질의 함수로 바꾸기
export class Order {
	constructor(quantity, item) {
		this._quantity = quantity;
		this._item = item;
	}

	get price() {
		const basePrice = this._quantity * this._item.price; // var -> Const 여기서 컴파일 에러 난다는데 안남. 재대입 하는 코드가 책에 보이지 않음...
		var discountFactor = 0.98;

		if (basePrice > 1000) {
			discountFactor = -0.03;
		}

		return basePrice * discountFactor;
	}
}
