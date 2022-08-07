import { Account } from '../../src/lib/chapter_08/example_02.js';
import { expect, test } from '@playwright/test';

// 테스트 코드를 돌려보고 싶어도 예제가...
test.describe('chapter 08', async () => {
	test('8.1 함수 옮기기 - 예시: 다른 클래스로 옮기기', async () => {
		let account = new Account(/** 무슨 값을 넣어야 하나? */);
		console.log('account.bankCharge : ', account.bankCharge);
		//expect(account.bankCharge).toEqual(?);
	});
});
