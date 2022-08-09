// 10.1 조건문 분해하기
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
	charge = quantity * plan.summerRate;
} else {
	charge = quantity * plan.regularRate + plan.regularServiceCharge;
}
