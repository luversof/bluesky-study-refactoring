// 10.5 특이 케이스 추가하기
// 예시: 객체 리터럴 이용하기
class Site {
	get customer() {
		return this._customer === '미확인 고객' ? createUnknownCustomer() : this._customer;
	}
}

class Customer {
	// 고객 이름
	get name() {}

	// 요금제
	get billingPlan() {}

	set billingPlan(arg) {}

	// 납부 이력
	get paymentHistory() {}

	get isUser() {
		return false;
	}
}

function createUnknownCustomer() {
	return {
		isUnknown: true,
		name: '거주자',
		billingPlan: registry.billingPlans.basic
	};
}

function isUnknown(arg) {
	return arg.isUnknown;
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCUstomer)
	? 0
	: aCustomer.paymentHistory.weeksDelinquentInLastYear;
