const dropDownPage = require('../pageobjects/dropdown.page');

describe('dropdown page tests', async function()
{
    beforeEach( async function()
    {
        await dropDownPage.open();
    })

    it('should check to ensure that the dropdown element exists on the page.', async function()
    {
        await dropDownPage.selectDropDownContainer.click();
        await expect(dropDownPage.selectDropDownContainer).toExist();
        const selected = await dropDownPage.selectDropDownContainer.isSelected();
        console.log('The dropdown container is selected: ' + selected + '.')
        await expect (selected == true);
    })

    it('should check that the dropdown container has the text "Please select an option"', async function()
    {
        await expect (dropDownPage.selectDropDownContainer).toHaveText('Please select an option');
    })

    it('should check that dropdown option 1 is selected and has the text "Option 1"', async function()
    {
        await dropDownPage.selectDropDown1.click()
        await expect(dropDownPage.selectDropDown1.isSelected() === true);
        await expect(dropDownPage.selectDropDown1).toHaveText('Option 1');
    })

    it('should check that dropdown option 2 is selected and has the text "Option 2"', async function()
    {
        await dropDownPage.selectDropDown2.click()
        await expect(dropDownPage.selectDropDown2.isSelected() === true);
        await expect (dropDownPage.selectDropDown2).toHaveText('Option 2');
    })
})