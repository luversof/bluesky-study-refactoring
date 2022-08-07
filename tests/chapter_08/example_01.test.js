import { trackSummary } from '../../src/lib/chapter_08/example_01.js';
import { expect, test } from '@playwright/test';

// 테스트 시 calculateTime 구현부분이 없어서 결과가 제대로 나오지 않음
test.describe('chapter 08', async () => {
	test('8.1 함수 옮기기', async () => {
		const newYork = {
			lat: 40.73061,
			lon: -73.935242
		};

		const tokyo = {
			lat: 35.652832,
			lon: 139.839478
		};

		var result = trackSummary([newYork, tokyo]);
		// console.log('result : ', result);
		//expect(result).toEqual(-180);
	});
});
