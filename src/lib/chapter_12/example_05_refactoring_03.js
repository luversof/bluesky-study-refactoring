// 12.6 타입 코드를 서브클래스로 바꾸기
// 예시: 간접 상속할 때
class Employee {
	constructor(name, type) {
		this.validateType(type);
		this._name = name;
		this._type = type;
	}

	validateType(arg) {
		if (!['engineer', 'manager', 'salesperson'].includes(arg))
			throw new Error(`${arg}라는 직원 유형은 없습니다.`);
	}

	get typeString() {
		return this._type.toString();
	}

	get type() {
		return this._type;
	}

	set type(arg) {
		this._type = Employee.createEmployeeType(arg);
	}

	get capitalizedType() {
		return this.typeString.charAt(0).toUpperCase() + this.typeString.substr(1).toLowerCase();
	}

	toString() {
		return `${this._name} (${this.type.capitalizedName})`;
	}

	static createEmployeeType(aString) {
		switch (aString) {
			case 'engineer':
				return new Engineer();
			case 'manager':
				return new Manager();
			case 'salesperson':
				return new Salesperson();
			default:
				throw new Error(`${aString}라는 직원 유형은 없습니다.`);
		}
	}
}

class EmployeeType {
	get capitalizedName() {
		return this.toString().charAt(0).toUpperCase() + this.toString().substr(1).toLowerCase();
	}
}

class Engineer extends EmployeeType {
	toString() {
		return 'engineer';
	}
}

class Manager extends EmployeeType {
	toString() {
		return 'manager';
	}
}

class Salesperson extends EmployeeType {
	toString() {
		return 'salesperson';
	}
}
