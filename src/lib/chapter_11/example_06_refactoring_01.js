// 11.4 객체 통째로 넘기기
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
	alert.push('방 온도가 지정범위를 벗어났습니다.');
}

class HeatingPlan {
	withinRange(bottom, top) {
		return bottom >= this._temperatureRange.low && top <= this._temperatureRange.high;
	}

	xxNEWwithinRange(aNumberRange) {
		return this.withinRange(aNumberRange.low, aNumberRange.high);
	}
}
