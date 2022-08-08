// 8.7 반복문 쪼개기
function fn() {
	let youngest = people[0] ? people[0].age : Infinity;
	let totalSalary = 0;
	for (const p of people) {
		totalSalary += p.salary;
	}

	for (const p of people) {
		if (p.age < youngest) youngest = p.age;
	}

	return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
}
