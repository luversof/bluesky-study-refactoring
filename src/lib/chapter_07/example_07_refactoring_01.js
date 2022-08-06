// 7.6 클래스 인라인하기
class Shipment {
	get trackingInfo() {
		return `${this.shippingCompany}: ${this.trackingNumber}`;
	}

	get shippingCompany() {
		return this._shippingCompany;
	}

	set shippingCompany(arg) {
		this._shippingCompany = arg;
	}

	get trackingNumber() {
		return this._trackingNumber;
	}

	set trackingNumber(arg) {
		this._trackingNumber = arg;
	}
}

// 클라이언트
aShipment.shippingCompany = request.vendor;
