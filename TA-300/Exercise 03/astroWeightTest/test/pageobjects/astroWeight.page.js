class astroWeightPage
{
    get heading()
    {
        return $('body > h1:nth-child(3)');
    }
    async planetSelector(text)
    {
        return $('#planets').selectByVisibleText(text);
    }
    async setWeight(weight)
    {
        $('#user-weight').setValue(weight);
    }
    get getWeight()
    {
        return $('#output > span:nth-child(2)');
    }
    get calculateButton()
    {
        return $('#calculate-button');
    }
    async addPlanet(name, weight)
    {
        await $('#planetName').setValue(name);
        await browser.pause(100);
        await $('#weightMultiplier').setValue(weight);
        await $('#add-button').click();
    }
    get addPlanetButton()
    {
        return $('#add-button');
    }
    async open()
    {
        return await browser.url('https://astro-calculator-ccc.herokuapp.com/');
    }
}
module.exports = new astroWeightPage;