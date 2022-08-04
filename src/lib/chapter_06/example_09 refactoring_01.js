// 6.6 변수 캡슐화하기
let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
	return defaultOwner;
}

export function setDefaultOwner(arg) {
	defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();
setDefaultOwner({ firstName: '레베카', lastName: '파슨스' });

class Person {
	constructor(data) {
		this._lastName = data.lastName;
		this._firstName = data.firstName;
	}

	get lastName() {
		return this._lastName;
	}
	get firstName() {
		return this._firstName;
	}
}
