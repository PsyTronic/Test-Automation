const Page = require('./page');
const util = require('util')

class keypressPage extends Page
{
    open()
    {
        return super.open('key_presses');
    }
    /*
    To solve the assignment, this code was unnecessary. It is being kept as a reminder.

    get textBox()
    {
        $('#target').waitForExist({timeout:1000, string: "Failed to find text box!"});
        //const textBox = await $('#target');
        return $('#target');
    }
    */
    async pressAKey(key)
    {
        //These commented out lines are unnecessary and are kepy for posterity.
        //const textBox = await this.textBox;
        //console.log( 'Does the element exist? ' + textBox);
        await browser.keys([key])
    }
    getKeypress()
    {
    return $('#result');
    }
}
module.exports = new keypressPage()