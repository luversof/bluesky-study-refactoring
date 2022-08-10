// 10.5 특이 케이스 추가하기
// 예시: 변환 함수 이용하기

function enrichSite(inputSite) {
	return _.cloneDeep(inputSite);
}

function isUnknown(aCustomer) {
	return aCUstomer === '미확인 고객';
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (isUnknown(aCustomer)) customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = isUnknown(aCustomer) ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer)
	? 0
	: aCustomer.paymentHistory.weeksDelinquentInLastYear;
