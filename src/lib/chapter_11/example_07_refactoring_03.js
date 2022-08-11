// 11.4 객체 통째로 넘기기
// 예시: 새 함수를 다른 방식으로 만들기
const tempRange = aRoom.daysTempRange;
const isWithinRange = xxNEWwithinRange(tempRange);

if (!isWithinRange) {
	alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
	withinRange(bottom, top) {
		return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
	}
}
function xxNEWwithinRange(aPlan, tempRange) {
	const low = tempRange.low;
	const high = tempRange.high;
	const isWithinRange = aPlan.withinRange(low, high);
	return isWithinRange;
}
