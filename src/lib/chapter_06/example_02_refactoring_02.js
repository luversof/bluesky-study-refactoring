// 6.1 예시: 유효범위를 벗어나는 함수가 없을 때
function printOwing(invoice) {
	let outstanding = 0;

	printBanner(); // 배너 출력 로직을 함수로 추출

	// 미해결 채무(outstanding)를 계산한다.
	for (const o of invoice.orders) {
		outstanding += o.amount;
	}

	// 마감일을(dueDate)을 기록한다.
	const today = Clock.today;
	invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

	printDetails(); // 세부 사항 출력 로직을 함수로 추출

	function printBanner() {
		console.log('***********');
		console.log('**고객 채무**');
		console.log('***********');
	}

	function printDetails() {
		console.log(`고객명: ${invoice.customer}`);
		console.log(`채무액: ${outstanding}`);
		console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
	}
}
