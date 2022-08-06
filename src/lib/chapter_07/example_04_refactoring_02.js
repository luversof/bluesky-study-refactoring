// 7.3 기본형을 객체로 바꾸기
class Order {
	constructor(data) {
		this._priority = data.priority;
	}

	get priorityString() {
		return this._priority.toString();
	}

	set priority(aString) {
		this._priority = new Priority(aString);
	}
}

class Priority {
	constructor(value) {
		this._value = value;
	}

	toString() {
		return this._value;
	}
}

highPriorityCount = order.filter(
	(o) => 'high' === o.priorityString || 'rush' === o.priorityString
).length;
