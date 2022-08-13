// 12.7 서브클래스 제거하기
class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	get genderCode() {
		return 'X';
	}

	// 생략
}

class Male extends Person {
	get genderCode() {
		return 'X';
	}
}

class Female extends Person {
	get genderCode() {
		return 'F';
	}
}

// 클라이언트...
const numberOfMales = people.filter((p) => p instanceof Male).length;
