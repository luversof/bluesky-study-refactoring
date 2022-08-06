import { Person } from '../src/lib/chapter_07/example_06_refactoring_03.js';
import { expect, test } from '@playwright/test';

test.describe('chapter 07', async () => {
	test('7.5 클래스 추출하기', async () => {
		var person = new Person();
		console.log('person : ', person);
		//expect(order.price).toEqual(-180);
	});
});
