// 10.5 특이 케이스 추가하기
class Site {
	get customer() {
		return this._customer === '미확인 고객' ? new UnknownCustomer() : this._customer;
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

	get name() {
		return '거주자';
	}

	get billingPlan() {
		return registry.billingPlans.basic;
	}

	set billingPlan(arg) {
		/* 무시한다. */
	}

	get paymentHistory() {
		return new NullPaymentHistory();
	}
}

class NullPaymentHistory {
	get weeksDelinquentInLastYear() {
		return 0;
	}
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
aCustomer.billingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

// 튀는 클라이언트...
const name = aCustomer.isUnknown ? '미확인 거주자' : aCustomer.name;
