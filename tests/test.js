import { Order } from '../src/lib/chapter_07/example_05_refactoring_04.js';
import { expect, test } from '@playwright/test';

test.describe('province', async () => {
	test('shortfall', async () => {
		var order = new Order(12, { price: 500 });
		console.log('price : ', order.price);
		expect(order.price).toEqual(-180);
	});
});
