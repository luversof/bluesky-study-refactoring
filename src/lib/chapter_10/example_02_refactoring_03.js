// 10.2 조건식 통합하기
function disabilityAmount(anEmployee) {
	if (isNotEligibleForDisability()) return 0;
	// 장애 수당 계산
}

// 장애 수당 적용 여부 확인
function isNotEligibleForDisability() {
	return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
}
