// 12.1 메서드 올리기
class Party {}
class Employee extends Party {
	get annualCost() {
		return this.monthlyCost * 12;
	}
}

class Department extends Party {
	get annualCost() {
		return this.monthlyCost * 12;
	}
}
