// 10.7 제어 플래그를 탈출문으로 바꾸기

// 생략(중요하지 않은 코드)
let found = false;
for (const p of people) {
	if (!found) {
		if (p === '조커') {
			sendAlert();
			found = true;
		}
		if (p === '사루만') {
			sendAlert();
			found = true;
		}
	}
}
// 생략
