const formPage = require('../pageobjects/form.page');
const FormPage = require('../pageobjects/form.page');

describe('My Form application', () => {

   it('should enter a job title into the job title field', async function()
    {
        await FormPage.open();
        await FormPage.jobRole('QA Tester');
        await expect(FormPage.inputJob).toHaveValueContaining('QA Tester');
    })

    it('should find a h1 with the text "Form Fields" ', async () => {
        await FormPage.open();
        await expect(FormPage.header).toHaveTextContaining(
            'Form Fields');
    })

    it('should display appropriate message when submitted without meeting the minimum criteria', async () => {
        await FormPage.submit.click();

        await expect(FormPage.errorText).toHaveTextContaining(
            'Please enter a valid name'
        )
    })

    it('should select the back-end developer option from a dropdown menu', async function()
    {
        await FormPage.interest.click();
        console.log('cLog: ' + await FormPage.interest.getText() + ' Result');
        await expect(FormPage.interest).toHaveTextContaining('Back End Developer');
    })

    it('should enter a name amd email into the first two text fields', async function()
    {
        await FormPage.name('Adev Eloper');
        console.log('cLog: ' + await FormPage.inputName.getValue() + ', Result');
        await FormPage.email('email@email.Email');
        await expect(FormPage.inputName).toHaveValueContaining('Adev Eloper');
        await expect(FormPage.inputEmail).toHaveValueContaining('email@email.Email');
    })

    it('should select the size, design, and color options for the t-shirt dropdown menu', async function()
    {
        await FormPage.size.click();
        await FormPage.design.click();
        await FormPage.color.click();
        await expect(FormPage.size).toHaveTextContaining('L');
        await expect(FormPage.design).toHaveTextContaining('CCC');
        await expect(FormPage.color).toHaveTextContaining('Light Blue');
    })

    it('should select all the conference option tick boxes and mark them with a checkmark or equivalent', async function()
    {
        await FormPage.checkAllBoxes();

        //Note that this returns only the last of the checkboxes, #7, and makes sure it is checked.
        //The checkAllBoxes function runs through and checks each box in order so the test should be accurate this way.

        expect(FormPage.checkBoxSeven).toBeSelected();
    })

    it ('should select a payment type of \"credit card\"', async function()
    {
        await FormPage.paymentType.click()
        console.log('cLog: ' + await FormPage.paymentType.getText() + ' Result');
        await expect(FormPage.paymentType).toHaveTextContaining('Credit Card');

    })

    it ('should enter in test credit card info such as credit card number and expiration date.', async function()
    {
        await FormPage.creditCardInputBox.setValue('1616 1616 1616 1616');
        await FormPage.ccZipCode.setValue('55555');
        await FormPage.creditCVV.setValue('333');
        await FormPage.expirationMonth.click();
        await FormPage.expirationYear.click();

        await expect(FormPage.creditCardInputBox).toHaveValue('1616 1616 1616 1616');
        await expect(FormPage.ccZipCode).toHaveValue('55555');
        await expect(FormPage.creditCVV).toHaveValue('333');
        await expect(FormPage.expirationMonth).toHaveText('12 - December');
        await expect(FormPage.expirationYear).toHaveText('2020');
    })
});