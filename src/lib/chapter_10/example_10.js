// 10.5 특이 케이스 추가하기
// 예시: 변환 함수 이용하기

// 클라이언트 1
const site = acquireSiteData();
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (aCUstomer === '미확인 고객') customerName = '거주자';
else customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer === '미확인 고객' ? registry.billingPlans.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent =
	aCustomer === '미확인 고객' ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
