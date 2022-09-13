const Page = require('./page');

class checkboxesPage extends Page {

    open()
    {
        return super.open('checkboxes');
    }

    get checkbox1()
    {
        return $('#checkboxes > input:nth-child(1)');
    }
    get checkbox2()
    {
        return $('/html/body/div[2]/div/div/form/input[2]');
    }
    get heading()
    {
        return $('h3=Checkboxes');
    }

}
module.exports = new checkboxesPage();