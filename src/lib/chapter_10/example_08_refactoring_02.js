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

function isUnknown(arg) {
	if (!(arg instanceof Customer) || arg == '미확인 고객')
		throw new Error(`잘못된 값과 비교: <${arg}>`);
	return arg === '미확인 고객';
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (isUnknown(aCUstomer)) customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
if (!isUnknown(aCustomer)) {
	aCustomer.billingPlan = newPlan;
}

// 클라이언트 4
const weeksDelinquent = isUnknown(aCustomer)
	? 0
	: aCustomer.paymentHistory.weeksDelinquentInLastYear;
