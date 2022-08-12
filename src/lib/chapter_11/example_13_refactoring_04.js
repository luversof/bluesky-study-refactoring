// 11.10 명령을 함수로 바꾸기
class ChargeCalculator {
	constructor(customer, usage, provider) {
		this._customer = customer;
		this._usage = usage;
		this._provider = provider;
	}

	charge(customer, usage, provider) {
		const baseCharge = this._customer.baseRate * this._usage;
		return baseCharge + this._provider.connectionCharge;
	}
}

function charge(customer, usage, provider) {
	return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
}

const monthCharge = charge(customer, usage, provider);
