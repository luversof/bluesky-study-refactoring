// 12.8 슈퍼클래스 추출하기
class Party {
	constructor(name) {
		this._name = name;
	}
}

class Employee extends Party {
	constructor(name, id, monthlyCost) {
		super(name);
		this._id = id;
		this._monthlyCost = monthlyCost;
	}

	//월간 비용
	get monthlyCost() {
		return this._monthlyCost;
	}

	// 이름
	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	// 연간 비용
	get annualCost() {
		return this._monthlyCost * 12;
	}
}

class Department extends Party {
	constructor(name, staff) {
		super(name);
		this._staff = staff;
	}

	get staff() {
		return this._staff.slice();
	}

	// 이름
	get name() {
		return this._name;
	}

	// 총 월간 비용
	get totalMonthlyCost() {
		return this.staff.map((e) => e.monthlyCost).reduce((sum, cost) => sum + cost);
	}

	get headCount() {
		return this.staff.length;
	}

	// 총 연간 비용
	get totalAnnualCost() {
		return this.totalMonthlyCost * 12;
	}
}
