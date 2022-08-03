import { Province, sampleProvinceData } from '../src/lib/chapter_04/index.js';
import { expect, test } from '@playwright/test';

test.describe('4.4 테스트 추가하기', async () => {
	let asia;
	test.beforeEach(async () => {
		asia = new Province(sampleProvinceData());
	});

	test('shortfall', async () => {
		expect(asia.shortfall).toEqual(5);
	});

	test('profit', async () => {
		expect(asia.profit).toEqual(230);
	});
});
