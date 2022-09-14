

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DropDownPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectDropDownContainer()
    {
        return $('#dropdown option:nth-child(1)');
    }

    get selectDropDown1()
    {
        return $('#dropdown > option:nth-child(2)');
    }

    get selectDropDown2()
    {
        return $('#dropdown > option:nth-child(3)');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dropdown');
    }
}

module.exports = new DropDownPage();
