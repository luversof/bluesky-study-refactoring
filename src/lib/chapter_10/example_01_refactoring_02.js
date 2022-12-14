// 10.1 조건문 분해하기
if (summer()) charge = summerCharge();
else charge = quantity * plan.regularRate + plan.regularServiceCharge;

function summer() {
	return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd);
}

function summerCharge() {
	return quantity * plan.summerRate;
}
