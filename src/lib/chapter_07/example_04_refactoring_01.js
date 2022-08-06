// 7.3 기본형을 객체로 바꾸기
class Order {
	constructor(data) {
		this._priority = data.priority;
	}

	get priority() {
		return this._priority;
	}

	set priority(aString) {
		this._priority = aString;
	}
}

highPriorityCount = order.filter((o) => 'high' === o.priority || 'rush' === o.priority).length;
