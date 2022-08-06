// 7.5 클래스 추출하기
export class Person {
	constructor() {
		this._telephoneNumber = new TelephoneNumber();
	}

	get name() {
		return this._name;
	}
	set name(arg) {
		this._name = arg;
	}

	get officeAreaCode() {
		return this._telephoneNumber._officeAreaCode;
	}

	set officeAreaCode(arg) {
		this._telephoneNumber._officeAreaCode = arg;
	}

	get officeNumber() {
		return this._telephoneNumber._officeNumber;
	}

	set officeNumber(arg) {
		this._telephoneNumber._officeNumber = arg;
	}

	get telephoneNumber() {
		return this._telephoneNumber.toString();
	}
}

class TelephoneNumber {
	get areaCode() {
		return this._officeAreaCode;
	}

	set areaCode(arg) {
		this._officeAreaCode = arg;
	}

	get number() {
		return this._officeNumber;
	}

	set number(arg) {
		this._officeNumber = arg;
	}

	get number() {
		return `${this.areaCode} ${this.number}`;
	}

	toString() {
		return `${this.areaCode} ${this.number}`;
	}
}
