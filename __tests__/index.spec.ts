import { getAllAgents, getRandomAgent } from '../src/index';

describe('tests for generating agents', () => {
	test('gets a random user agent', () => {
		expect(getRandomAgent()).toBeDefined();
	});

	test('gets all the user agents', () => {
		expect(getAllAgents()).toBeDefined();
	});
});
