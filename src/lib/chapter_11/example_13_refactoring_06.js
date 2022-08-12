// 11.10 명령을 함수로 바꾸기
class ChargeCalculator {
	constructor(customer, usage, provider) {}

	charge(customer, usage, provider) {
		const baseCharge = customer.baseRate * usage;
		return baseCharge + provider.connectionCharge;
	}
}

function charge(customer, usage, provider) {
	return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
}

const monthCharge = charge(customer, usage, provider);
