// 6.10 여러 함수를 변환 함수로 묶기
reading = { customier: 'ivan', quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

// 클라이언트 2
const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const texableCharge = Math.max(0, base - taxThreshold(aReading.year));

// 클라이언트 3
const aReading = acquireReading();
const baseChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
	return baseRate(aReading.month, aReading.year) * aReading.quantity;
}
