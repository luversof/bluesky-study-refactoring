// 11.10 명령을 함수로 바꾸기
function charge(customer, usage, provider) {
	const baseCharge = customer.baseRate * usage;
	return baseCharge + provider.connectionCharge;
}

const monthCharge = charge(customer, usage, provider);
