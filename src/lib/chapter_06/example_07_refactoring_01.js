// 6.5 함수 선언 바꾸기
// 예시: 매개변수 추가하기
class Book {
	addReservation(customer) {
		this.zz_addReservation(customer);
	}

	zz_addReservation(customer) {
		this._reservation.push(customer);
	}
}
