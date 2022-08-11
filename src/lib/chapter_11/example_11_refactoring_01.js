// 11.8 생성자를 팩터리 함수로 바꾸기
class Employee {
	constructor(name, typeCode) {
		this._name = name;
		this._typeCode = typeCode;
	}

	get name() {
		return this._name;
	}

	get type() {
		return Employee.legalTypeCodes[this._typeCode];
	}

	static get legalTypeCodes() {
		return {
			E: 'Engineer',
			M: 'Manager',
			S: 'Salesperson'
		};
	}
}

function createEmployee(name, typeCode) {
	return new Employee(name, typeCode);
}

function createEngineer(name) {
	return new Employee(name, 'E');
}

const candidate = createEmployee(document.name, document.empType);
const leadEngineer = createEngineer(document.leadEngineer);
