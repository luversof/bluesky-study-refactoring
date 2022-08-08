// 8.6 문장 슬라이드하기
// 예시: 조건문이 있을 때의 슬라이드
function fn() {
	let result;
	if (availableResources.length === 0) {
		result = createResource();
	} else {
		result = availableResources.pop();
	}
	allocatedResources.push(result);
	return result;
}
