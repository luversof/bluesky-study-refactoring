// 6.5 함수 선언 바꾸기
// 예시: 매개변수를 속성으로 바꾸기
function isNewEngland(stateCode) {
	return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEnglanders = someCustomers.filter((c) => isNewEngland(c.address.state));
