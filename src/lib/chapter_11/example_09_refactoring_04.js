// 11.6 질의 함수를 매개변수로 바꾸기
class HeatingPlan {
	// targetTemperature가 전역객체 thermostat에 의존
	get targetTemperature() {
		return this.targetTemperature(thermostat.selectedTemperature);
	}

	targetTemperature(selectedTemperature) {
		if (selectedTemperature > this._max) return this._max;
		else if (selectedTemperature < this._min) return this._min;
		else return selectedTemperature;
	}
}

if (thePlan.targetTemperature(thermostat.selectedTemperature) > thermostat.currentTemperature)
	setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature) < thermostat.currentTemperature)
	setToCool();
else setOff();
