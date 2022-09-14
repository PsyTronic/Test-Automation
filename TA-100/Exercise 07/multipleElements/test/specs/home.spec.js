const homePage = require('../pageobjects/home.page');

describe('My home page', () => {

    it('should verify list items', async function() {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});