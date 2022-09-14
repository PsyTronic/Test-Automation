const Page = require('./page');

class addElementsPage extends Page
{

get addElementButton()
{
    return $('#content div button')
}
get addedButtons()
{
    return $$('#elements *');
}

 open() {
        return super.open('/add_remove_elements/');
    }
}

module.exports = new addElementsPage();