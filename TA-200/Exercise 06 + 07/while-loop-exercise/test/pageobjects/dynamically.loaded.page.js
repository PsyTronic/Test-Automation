const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicPage extends Page {

get pageLink1()
{
    return $('.example > a:nth-child(5)')
}

get pageLink2()
{
    return $('.example > a:nth-child(8)')
}

get startButton1()
{
    return $('#start > button:nth-child(1)')
}
get text()
{
    return $('/html/body/div[2]/div/div/div[3]/h4')
}

click(element)
{
element.click();
}
get startButton2()
{
    return x
}

    open()
    {
        return super.open('dynamic_loading')
    }
}
module.exports = new DynamicPage();