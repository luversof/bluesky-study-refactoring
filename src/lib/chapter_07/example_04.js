// 7.3 기본형을 객체로 바꾸기
class Order {
	constructor(data) {
		this.priority = data.priority;
	}
}

highPriorityCount = order.filter((o) => 'high' === o.priority || 'rush' === o.priority).length;
