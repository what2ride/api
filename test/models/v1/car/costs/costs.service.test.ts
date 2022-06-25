import * as costService from '../../../../../src/models/v1/car/costs/costs.service';

test("Test template function", async () => {
	expect(await costService.templateFunction()).toBe(true);
});
