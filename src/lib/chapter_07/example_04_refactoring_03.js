// 7.3 기본형을 객체로 바꾸기
// 더 가다듬기
class Order {
	constructor(data) {
		this._priority = data.priority;
	}

	get priority() {
		return this._priority;
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
	(o) => 'high' === o.priority.toString() || 'rush' === o.priority.toString()
).length;
