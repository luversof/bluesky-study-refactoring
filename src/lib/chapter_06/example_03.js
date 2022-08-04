// 6.2 함수 인라인하기
function getRating(driver) {
	return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
	return driver.numberOfLateDeliveries > 5;
}
