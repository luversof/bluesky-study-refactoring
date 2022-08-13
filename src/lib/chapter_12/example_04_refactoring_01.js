// 12.6 타입 코드를 서브클래스로 바꾸기
class Employee {
	constructor(name, type) {
		this.validateType(type);
		this._name = name;
		this._type = type;
	}

	get type() {
		return this._type;
	}

	validateType(arg) {
		if (!['engineer', 'manager', 'salesperson'].includes(arg))
			throw new Error(`${arg}라는 직원 유형은 없습니다.`);
	}

	toString() {
		return `${this._name} (${this.type})`;
	}
}
