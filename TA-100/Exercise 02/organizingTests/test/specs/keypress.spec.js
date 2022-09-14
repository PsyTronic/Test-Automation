const keypressPage = require('../pageobjects/keypress.page');

describe('should get keypresses and register they were displayed in UI.', function()
{
    this.beforeEach('open the key_presses page', async function()
    {
        await keypressPage.open();
    })
    xit('should ensure the Keypress Textbox of the Keypress webpage exists', async function()
    {
        //Unnecessary Code, the assignment works without this, kept for posterity.
        await expect(keypressPage.textBox).toBeExisting();
    })
    
    it ('should press keys and recognize keypresses in UI', async function()
    {
        //Nnt necessary: const textBox = await keypressPage.textBox;
        //console.log( 'Does the element exist? ' + isExisting + ' ' + textBox);
        //console.log('The text box is \'' + await textBox.getText() +'\'');
        //let isExisting = await textBox.isExisting();
        let keys = ['UP','UP','DOWN','DOWN','LEFT','RIGHT','LEFT','RIGHT','B','A','ENTER'];
        let key = keys[0]
        //console.log( 'Does the element exist? ' + isExisting + ' ' + textBox);
        //console.log('The text box is \'' + await textBox.getText() +'\'');
        //await textBox.click();
        for(i=0; i<11; i++)
        {
            let key = keys[i];
            await keypressPage.pressAKey(key);
            expect(await keypressPage.getKeypress()).toHaveAttributeContaining("You entered: " + key);
            console.log(key)
        }
    })
})
