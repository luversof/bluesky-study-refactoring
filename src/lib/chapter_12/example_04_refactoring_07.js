// 12.6 타입 코드를 서브클래스로 바꾸기
class Employee {
	constructor(name, type) {
		this._name = name;
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

class Salesperson extends Employee {
	get type() {
		return 'salesperson';
	}
}

class Manager extends Employee {
	get type() {
		return 'manager';
	}
}

function createEmployee(name, type) {
	switch (type) {
		case 'engineer':
			return new Engineer(name, type);
		case 'salesperson':
			return new Salesperson(name, type);
		case 'manager':
			return new Manager(name, type);
		default:
			throw new Error(`${type}라는 직원 유형은 없습니다.`);
	}
}
