// 6.9 여러 함수를 클래스로 묶기
// record 캡슐화 및 calculateBaseCharge() 이동
reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트 2
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const texableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

// 클라이언트 3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseChargeAmount = aReading.baseCharge;

// 공통으로 사용할 Reading class
class Reading {
	constructor(data) {
		this._customer = data.customer;
		this._quantity = data.quantity;
		this._month = data.month;
		this._year = data.year;
	}

	get customer() {
		return this._customer;
	}

	get quantity() {
		return this._quantity;
	}

	get month() {
		return this._month;
	}

	get year() {
		return this._year;
	}

	get baseCharge() {
		return baseRate(this.month, this.year) * this.quantity;
	}
}
