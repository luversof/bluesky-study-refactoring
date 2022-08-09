// 10.3 중첩 조건문을 보호 구문으로 바꾸기
// 예시: 조건 반대로 만들기
function adjustedCapital(anInstrument) {
	let result = 0;
	if (anInstrument.capital > 0) {
		if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
			result = (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
		}
	}
	return result;
}
