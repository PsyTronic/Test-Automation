import Page from '../pages/page';

describe ("https://the-internet.herokuapp.com/ test", function()
{
    it('should navigate to the Herokuapp.com website', async function()
    {
        await Page.open('https://the-internet.herokuapp.com/')
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/')
    })
})