import { rating } from '../../src/lib/chapter_10/example_07.js';
import { expect, test } from '@playwright/test';

// 테스트 시 calculateTime 구현부분이 없어서 결과가 제대로 나오지 않음
test.describe('chapter 10', async () => {
	test('10.4 조건부 로직을 다형성으로 바꾸기', async () => {
		const voyage = { zone: '서인도', length: 10 };
		const history = [
			{ zone: '동인도', profit: 5 },
			{ zone: '서인도', profit: 15 },
			{ zone: '중국', profit: -2 },
			{ zone: '서아프리카', profit: 7 }
		];

		const myRating = rating(voyage, history);

		// console.log('result : ', myRating);
		expect(myRating).toEqual('B');
	});
});
