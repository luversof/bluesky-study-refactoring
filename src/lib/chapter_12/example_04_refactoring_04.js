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

class Engineer extends Employee {
	get type() {
		return 'engineer';
	}
}

function createEmployee(name, type) {
	switch (type) {
		case 'engineer':
			return new Engineer(name, type);
	}
	return new Employee(name, type);
}