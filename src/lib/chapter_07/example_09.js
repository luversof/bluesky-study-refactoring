// 7.8 중개자 제거하기
// 이전 7.7의 리팩터링 한 예제를 그대로 사용 (그냥 7.7의 반대 작업)
class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	get manager() {
		return this._department.manager;
	}

	set department(arg) {
		this._department = arg;
	}
}

class Department {
	get chargeCode() {
		return this._chargeCode;
	}

	set chargeCode(arg) {
		this._chargeCode = arg;
	}

	get manager() {
		return this._manager;
	}

	set manager(arg) {
		this._manager = arg;
	}
}

// 클라이언트...
manager = aPerson.manager;
