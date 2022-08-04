// 6.1 예시: 지역 변수의 값을 변경할 때
function printOwing(invoice) {
	printBanner(); // 배너 출력 로직을 함수로 추출

	// 미해결 채무(outstanding)를 계산한다.
	let outstanding = calculateOutstanding(invoice);

	recordDueDate(invoice); // 마감일 설정 로직을 함수로 추출

	printDetails(invoice, outstanding); // 앞의 예와 달리 지역 변수를 매개변수로 전달

	function printBanner() {
		console.log('***********');
		console.log('**고객 채무**');
		console.log('***********');
	}

	function printDetails(invoice, outstanding) {
		console.log(`고객명: ${invoice.customer}`);
		console.log(`채무액: ${outstanding}`);
		console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
	}

	function recordDueDate(invoice) {
		const today = Clock.today;
		invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
	}

	function calculateOutstanding(invoice) {
		let result = 0;
		for (const o of invoice.orders) {
			result += o.amount;
		}
		return result;
	}
}
