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
}

class Manager extends Employee {
	constructor(name, grade) {
		super(name);
		this._grade = grade;
		if (this.isPrivileged) this.assignCar(); // 모든 서브 클래스가 수행한다.
	}

	get isPrivileged() {
		return this._grade > 4;
	}
}
