// 6.1 함수 추출하기
function printOwing(invoice) {
	printBanner();
	let outstanding = calculateOutstanding();
	printDetails(outstanding);

	function printDetails(outstanding) {
		console.log(`고객명 : ${invoice.customer}`);
		console.log(`채무액 : ${outstanding}`);
	}
}
