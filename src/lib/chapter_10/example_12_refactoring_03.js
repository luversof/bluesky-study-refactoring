// 10.7 제어 플래그를 탈출문으로 바꾸기

// 생략(중요하지 않은 코드)
checkForMiscreants(people);
// 생략
function checkForMiscreants(people) {
	for (const p of people) {
		if (p === '조커') {
			sendAlert();
			return;
		}
		if (p === '사루만') {
			sendAlert();
			return;
		}
	}
}
