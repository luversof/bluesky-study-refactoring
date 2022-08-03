import { Province, sampleProvinceData } from '../src/lib/chapter_04/index.js';
import { expect, test } from '@playwright/test';

test('4.3 첫 번째 테스트', async () => {
	const asia = new Province(sampleProvinceData());
	expect(asia.shortfall).toEqual(5);
});
