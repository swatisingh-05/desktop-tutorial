import { test, expect } from '@playwright/test';
import loginData from '../test-data/data.json';

test('Read data from JSON file', async () => {
	expect(loginData).toHaveLength(4);

	for (const user of loginData) {
		console.log(`Email: ${user.email}, Expected result: ${user.expectedResult}`);
		expect(user).toEqual(
			expect.objectContaining({
				email: expect.any(String),
				password: expect.any(String),
				expectedResult: expect.any(String),
			}),
		);
	}
});
