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

function createPerson(aRecord) {
	let p;
	switch (aRecord.gender) {
		case 'M':
			(p) => new Male(aRecord.name);
			break;
		case 'F':
			(p) => new Female(aRecord.name);
			break;
		default:
			(p) => new Person(aRecord.name);
	}
	return p;
}

function loadFromInput(data) {
	const result = [];
	data.fromEach((aRecord) => {
		result.push(createPerson(aRecord));
	});
	return result;
}

// 클라이언트...
const numberOfMales = people.filter((p) => p instanceof Male).length;
