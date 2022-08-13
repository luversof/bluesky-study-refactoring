// 12.10 서브클래스를 위임으로 바꾸기
// 첫째. 슈퍼클래스의 계산 로직을 함수로 추출하여 가격 계산과 분배 로직을 분리하는 방법
class Booking {
	constructor(show, date) {
		this._show = show;
		this._date = date;
	}

	get hasTalkback() {
		return this._premiumDelegate
			? this._premiumDelegate.hasTalkback
			: this._show.hasOwnProperty('talkback') && !this.isPeakDay;
	}

	get basePrice() {
		return this._premiumDelegate ? this._premiumDelegate.basePrice : this._privateBasePrice;
	}

	get _privateBasePrice() {
		let result = this._show.price;
		if (this.isPeakDay) result += Math.round(result * 0.15);
		return result;
	}

	_bePremium(extras) {
		this._premiumDelegate = new PremiumBookingDelegate(this, extras);
	}
}

class PremiumBooking extends Booking {
	constructor(show, date, extras) {
		super(show, date);
		this._extras = extras;
	}

	get basePrice() {
		return Math.round(super.basePrice + this._extras.premiumFee);
	}

	get hasDinner() {
		return this._extras.hasOwnProperty('dinner') && !this.isPeakDay;
	}
}

class PremiumBookingDelegate {
	constructor(hostBooking, extras) {
		this._host = hostBooking;
		this._extras = extras;
	}

	get hasTalkback() {
		return this._host._show.hasOwnProperty('talkback');
	}

	get basePrice() {
		return Math.round(this._host._privateBasePrice + this._extras.premiumFee);
	}
}

function createBooking(show, date) {
	return new Booking(show, date);
}

function createPremiumBooking(show, date, extras) {
	const result = new PremiumBooking(show, date, extras);
	result._bePremium(extras);
	return result;
}

// 클라이언트(일반 예약)...
aBooking = createBooking(show, date);

// 클라이언트(프리미엄 예약)...
aBooking = createPremiumBooking(show, date, extras);