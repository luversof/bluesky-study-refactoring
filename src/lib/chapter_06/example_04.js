// 6.3 변수 추출하기
// 여기서 부터는 첫번째 예제(축약본)는 일부분만 보여주기 때문에 두번째 예제부터 작성
function price(order) {
	// 가격 = 기본가격 - 수량할인 + 배송비
	return (
		order.quantity * order.itemPrice -
		Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
		Math.min(order.quantity * order.itemPrice * 0.1, 100)
	);
}
