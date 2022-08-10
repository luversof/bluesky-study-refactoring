// 10.4 조건부 로직을 다형성으로 바꾸기
function plumages(bird) {
	return new Bird(bird).plumage;
}

function speed(bird) {
	return new Bird(bird).airSpeedVelocity;
}

function createBird(bird) {
	switch (bird.type) {
		case '유럽 제비':
			return new EuropeanSwallow(bird);
		case '아프리카 제비':
			return new AfricanSwallow(bird);
		case '노르웨이 파랑 앵무':
			return new NorwegianBlueSwallow(bird);
		default:
			return new Bird(bird);
	}
}

class Bird {
	constructor(birdObject) {
		Object.assign(this, birdObject);
	}

	get plumage() {
		switch (this.type) {
			case '유럽 제비':
				return '보통이다';
			case '아프리카 제비':
				return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
			case '노르웨이 파랑 앵무':
				return this.voltage > 100 ? '그을렸다' : '예쁘다';
			default:
				return '알 수 없다';
		}
	}

	get airSpeedVelocity() {
		switch (this.type) {
			case '유럽 제비':
				return 35;
			case '아프리카 제비':
				return 40 - 2 * this.numberOfCoconuts;
			case '노르웨이 파랑 앵무':
				return this.isNailed ? 0 : 10 + this.voltage / 10;
			default:
				return null;
		}
	}
}

class EuropeanSwallow extends Bird {}

class AfricanSwallow extends Bird {}

class NorwegianBlueSwallow extends Bird {}
