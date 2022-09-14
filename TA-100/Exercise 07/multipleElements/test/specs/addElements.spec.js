const addElementsPage = require('../pageobjects/addElements.page');

const elements = addElementsPage;
describe('adding elements test', () => {
    it('should find the addElement button and verify it exists.', async function() {
        await elements.open();
        await addElementsPage.addElementButton.waitForExist({timeout: 5000, timeoutMsg: "Element doesn't exist?"});
        expect('elements.addElementButton').toBeExisting();
        });

    it('should add four buttons and verify they exist', async function() {
        await elements.open();
        //await addElementsPage.addElementButton.waitForExist({timeout: 5000, timeoutMsg: "Element doesn't exist?"});
        const button = await elements.addElementButton;
        const addedButtons = await elements.addedButtons;
        console.log ('The button element is: ' + button +'.')
        for (i=0; i<4; i++)
        {
           await button.click();
           console.log('button added!');
        }
        console.log('returning the added buttons yields this: ' + await addedButtons + '.')
        await expect(elements.addedButtons).toBeElementsArrayOfSize({gte: 4});
        
    });
});