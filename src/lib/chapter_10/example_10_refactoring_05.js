// 10.5 특이 케이스 추가하기
// 예시: 변환 함수 이용하기

function enrichSite(inputSite) {
	const result = _.cloneDeep(inputSite);
	const unknownCustomer = {
		isUnknown: true,
		name: '거주자',
		billingPlan: registry.billingPlans.basic
	};

	if (isUnknown(result.customer)) result.customer = unknownCustomer;
	else result.customer.isUnknown = false;
	return result;
}

function isUnknown(aCustomer) {
	if (aCUstomer === '미확인 고객') return true;
	else return aCustomer.isUnknown;
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer)
	? 0
	: aCustomer.paymentHistory.weeksDelinquentInLastYear;
