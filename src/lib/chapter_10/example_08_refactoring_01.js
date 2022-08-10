// 10.5 특이 케이스 추가하기
class Site {
	get customer() {
		return this._customer;
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

	get isUnknown() {
		return false;
	}
}

class UnknownCustomer {
	get isUnknown() {
		return true;
	}
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (aCUstomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
if (aCustomer !== '미확인 고객') {
	aCustomer.billingPlan = newPlan;
}

// 클라이언트 4
const weeksDelinquent =
	aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;