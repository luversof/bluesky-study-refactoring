// 6.10 여러 함수를 변환 함수로 묶기
import _ from 'lodash';

reading = { customier: 'ivan', quantity: 10, month: 5, year: 2017 };

// 클라이언트 1
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

// 클라이언트 2
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const texableCharge = aReading.texableCharge;

// 클라이언트 3
const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseChargeAmount = aReading.baseCharge;

function calculateBaseCharge(aReading) {
	return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function enrichReading(original) {
	const result = _.cloneDeep(original);
	result.baseCharge = calculateBaseCharge(result);
	result.texableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
	return result;
}

// test.js에서 검증할 항목 (예시로 이곳에 표기함)
test('shortfall', async () => {
	const baseReading = { customer: 'ivan', quantity: 15, month: 5, year: 2017 };
	const oracle = _.cloneDeep(baseReading);
	enrichReading(baseReading);
	expect(baseReading).toEqual(oracle);
});
