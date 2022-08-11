// 11.4 객체 통째로 넘기기
// 예시: 새 함수를 다른 방식으로 만들기
const isWithinRange = aPlan.withinRange(aRoom.daysTempRange);

if (!isWithinRange) {
	alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
	withinRange(tempRange) {
		return (
			tempRange.low >= this._temperatureRange.low && tempRange.high <= this._temperatureRange.high
		);
	}
}
