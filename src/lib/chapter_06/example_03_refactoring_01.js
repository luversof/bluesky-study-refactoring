// 6.2 함수 인라인하기
// 이 다음 예제는 이와 동일한데 parameter 변수명이 조금 다른 경우임. 생략함.
// 그 다음 예제도 비슷하여 생략함. (단순 복사하기 전에 변수 정리 필요하다는걸 보여주려고 한 예제라 동일하다고 봐도 무방..)
function getRating(driver) {
	return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}
