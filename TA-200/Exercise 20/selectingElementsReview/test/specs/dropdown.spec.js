const dropdownPage = require('../pageobjects/dropdown.page');

describe ('dropdown tests', async function()
{
    before( async function()
    {
        await dropdownPage.open(); 
    })
    it('should check to ensure the dropdown list exists', async function()
    {
        expect(dropdownPage.dropdown).toExist;
    })
    it('should select a selection from the dropdown list', async function()
    {
        await dropdownPage.selection1.click();
        await browser.pause(2000);
        await expect(dropdownPage.dropdown).toHaveValue('1');

        await dropdownPage.selection2.click();
        await browser.pause(2000);
        await expect(dropdownPage.dropdown).toHaveValue('2');
    })
})