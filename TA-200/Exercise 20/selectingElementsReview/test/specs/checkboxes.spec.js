const checkboxesPage = require('../pageobjects/checkboxes.page');

describe ('checkboxes tests', async function()
{
    it('should find that the heading "h3" exists', async function()
    {
        await checkboxesPage.open();
        // await browser.pause('10000');
        await expect(await checkboxesPage.heading.waitForExist({timeout:1000, reverse:false}));
    })
    it ('should click checkbox 2 and pause for 2 seconds', async function()
    {
        await
        await checkboxesPage.checkbox1.click();
        await checkboxesPage.checkbox2.click();
        await expect(await checkboxesPage.checkbox1).toBeChecked();
        await browser.pause(2000);
        await !(expect(await checkboxesPage.checkbox2).toHaveAttribute('checked'));
        await browser.pause(2000);
    })
})