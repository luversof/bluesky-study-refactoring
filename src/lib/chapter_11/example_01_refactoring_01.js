// 11.1 질의 함수와 변경 함수 분리하기
function alertForMiscreant(people) {
	for (const p of people) {
		if (p === '조커') {
			setOffAlarms();
			return;
		}
		if (p === '사루만') {
			setOffAlarms();
			return;
		}
	}
	return '';
}

function findMiscreant(people) {
	for (const p of people) {
		if (p === '조커') {
			return '조커';
		}
		if (p === '사루만') {
			return '사루만';
		}
	}
	return '';
}

const found = findMiscreant(people);
alertForMiscreant(people);
