// 10.1 조건문 분해하기
charge = summer() ? summerCharge() : regularCharge();

function summer() {
	return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
	return quantity * plan.summerRate;
}

function regularCharge() {
	return quantity * plan.regularRate + plan.regularServiceCharge;
}
