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

	test('zero demand', async () => {
		asia.demand = 0;
		expect(asia.shortfall).toEqual(-25);
		expect(asia.profit).toEqual(0);
	});

	test('negative demand', async () => {
		asia.demand = -1;
		expect(asia.shortfall).toEqual(-26);
		expect(asia.profit).toEqual(-10);
	});

	test('emptry string demand', async () => {
		asia.demand = '';
		expect(asia.shortfall).toEqual(NaN);
		expect(asia.profit).toEqual(NaN);
	});
});

test.describe('no producers', async () => {
	let noProducers;
	test.beforeEach(async () => {
		const data = {
			name: 'No producers',
			producers: [],
			demand: 30,
			price: 20
		};
		noProducers = new Province(data);
	});
	test('shortfall', async () => {
		expect(noProducers.shortfall).toEqual(30);
	});

	test('profit', async () => {
		expect(noProducers.profit).toEqual(0);
	});
});

test.describe('string for producers', async () => {
	// 테스트 비활성화 처리 시 설정, 활성화 하려면 ".skip" 부분을 삭제한다.
	test.skip('', async () => {
		const data = {
			name: 'String producers',
			producers: '',
			demand: 30,
			price: 20
		};
		const prov = new Province(data);
		assert.equal(prov.shortfall, 0);
	});
});
