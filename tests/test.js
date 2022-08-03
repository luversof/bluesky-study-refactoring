import { Province, sampleProvinceData } from '../src/lib/chapter_04/index.js';
import { expect, test } from '@playwright/test';

test.describe('province', async () => {
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

	test('change production', async () => {
		asia.producers[0].production = 20;
		expect(asia.shortfall).toEqual(-6);
		expect(asia.profit).toEqual(292);
	});
});
