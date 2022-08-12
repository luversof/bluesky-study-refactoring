// 12.3 생성자 본문 올리기
// 예시: 공통 코드가 나중에 올 때
class Employee {
	constructor(name) {
		// ...
	}

	get isPrivileged() {
		// ...
	}

	assignCar() {
		// ...
	}

	finishConstruction() {
		if (this.isPrivileged) this.assignCar();
	}
}

class Manager extends Employee {
	constructor(name, grade) {
		super(name);
		this._grade = grade;
		this.finishConstruction();
	}

	get isPrivileged() {
		return this._grade > 4;
	}
}
