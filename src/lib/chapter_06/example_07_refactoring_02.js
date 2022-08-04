// 6.5 함수 선언 바꾸기
// 예시: 매개변수 추가하기
class Book {
	addReservation(customer) {
		this.zz_addReservation(customer, false);
	}

	zz_addReservation(customer, isPriority) {
		assert(isPriority === true || isPriority === false);
		this._reservation.push(customer);
	}
}
