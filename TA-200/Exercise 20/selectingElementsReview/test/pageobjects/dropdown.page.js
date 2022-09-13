const Page = require('./page');

class dropdownPage extends Page {

    open()
    {
        return super.open('dropdown');
    }

    get dropdown()
    {
        return $('#dropdown');
    }
    get selection1()
    {
        return $('#dropdown > option:nth-child(2)');
    }
    get selection2()
    {
        return $('#dropdown > option:nth-child(3)');
    }

}
module.exports = new dropdownPage();