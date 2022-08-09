// 10.3 중첩 조건문을 보호 구문으로 바꾸기
function payAmount(employee) {
	let result;
	// 퇴사한 직원인가?
	if (employee.isSeparated) return { amount: 0, reasonCode: 'SEP' };

	//은퇴한 직원인가?
	if (employee.isRetired) {
		result = { amount: 0, reasonCode: 'RET' };
	} else {
		// 급여 계산 로직
		lorem.ipsum(dolor.sitAmet);
		consectetur(adipiscing).elit();
		sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
		ut.enum.ad(minim.veniam);
		result = someFinalCompoutation();
	}

	return result;
}
