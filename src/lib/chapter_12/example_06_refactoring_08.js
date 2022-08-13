// 12.7 서브클래스 제거하기
class Person {
	constructor(name, genderCode) {
		this._name = name;
		this._genderCode = genderCode || 'X';
	}

	get name() {
		return this._name;
	}

	get genderCode() {
		return this._genderCode;
	}

	isMale() {
		return 'M' === this._genderCode;
	}

	// 생략
}

function createPerson(aRecord) {
	switch (aRecord.gender) {
		case 'M':
			return new Person(aRecord.name, 'M');
		case 'F':
			return new Person(aRecord.name, 'F');
		default:
			return new Person(aRecord.name);
	}
}

function loadFromInput(data) {
	return data.map((aRecord) => createPerson(aRecord));
}

// 클라이언트..
const numberOfMales = people.filter((p) => p.isMale).length;
