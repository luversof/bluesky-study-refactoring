// 12.10 서브클래스를 위임으로 바꾸기
class Booking {
	constructor(show, date) {
		this._show = show;
		this._date = date;
	}

	get hasTalkback() {
		return this._show.hasOwnProperty('talkback') && !this.isPeakDay;
	}

	get basePrice() {
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

	get hasTalkback() {
		return this._premiumDelegate.hasTalkback;
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
