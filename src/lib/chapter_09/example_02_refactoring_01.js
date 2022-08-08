// 9.1 변수 쪼개기
// 예시: 입력 매개변수의 값을 수정할 때
function discount(originalInputValue, quantity) {
	let inputValue = originalInputValue;
	if (inputValue > 50) inputValue = inputValue - 2;
	if (quantity > 100) inputValue = inputValue - 1;
	return inputValue;
}
