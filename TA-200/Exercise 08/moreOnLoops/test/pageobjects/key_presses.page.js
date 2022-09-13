

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class key_pressesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get textArea () {
        return $('#target')
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get keysmash () {
        return $('#result')
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async pressKey(key)
    {
        this.textArea.click();
        browser.keys(key);
        //await browser.waitUntil(await async function() {return await this.keysmash.isDisplayed()})
        return this.keysmash.getText();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('key_presses');
    }
}

module.exports = new key_pressesPage();
