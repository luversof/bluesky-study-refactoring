// 8.8 반복문을 파이프라인으로 바꾸기
function acquireData(input) {
	const lines = input.split('\n');
	const result = [];
	const loopItems = lines
		.slice(1)
		.filter((line) => line.trim() != '')
		.map((line) => line.split(','));
	for (const line of loopItems) {
		const record = line;
		if (record[1].trim() === 'India') {
			result.push({ city: record[0].trim(), phone: record[2].trim });
		}
	}
	return result;
}
