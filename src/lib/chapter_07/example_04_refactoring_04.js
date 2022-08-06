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
		if (value instanceof Priority) return value;
		if (Priority.legalValues().inclues(value)) {
			this._value = value;
		} else throw new Error(`<${value}는 유효하지 않은 우선순위입니다.`);
	}

	toString() {
		return this._value;
	}

	get _index() {
		return Priority.legalValues().findIndex((s) => s === this.value);
	}

	static legalValues() {
		return ['low', 'normal', 'high', 'rush'];
	}

	equals(other) {
		return this._index === other._index;
	}

	higherThan(other) {
		return this._index > other._index;
	}

	lowerThan(other) {
		return this._index < other._index;
	}
}

highPriorityCount = order.filter(
	(o) => 'high' === o.priority.higherThan(new Priority('normal'))
).length;
