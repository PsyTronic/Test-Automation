const astroWeightPage = require('../pageobjects/astroWeight.page');

describe ('Astro Weight page tests', async function()
{

    before('Open the browser', async function()
    {
        await astroWeightPage.open();
    })
    it('Should ensure the Heading 1 element exists', async function()
    {
        expect(await astroWeightPage.heading).toExist;
    })
    it('Should ensure the \'select\' element exists', async function()
    {
        expect(await astroWeightPage.planetSelector('Pluto')).toExist;
    })
    it('Should check to see that a person weighing 150 lbs. on the earth weights 24.83 on the moon', async function()
    {
        let planet = await astroWeightPage.planetSelector('Earth');
        console.log(planet);
        //planet.click;
        await browser.pause(3000);
        // await planet.waitForDisplayed({timeout:1000});
        // if (await astroWeightPage.planetSelector(8).toBeDisplayed == false)
        // {
        //     throw console.error('ELEMENT NOT DISPLAYED! RE-EVALUATE YOUR SELECTOR CODE!');;
        // }
        await astroWeightPage.setWeight(150);
        await browser.pause(1000)
        await astroWeightPage.calculateButton.click();
        await expect(await astroWeightPage.getWeight).toHaveTextContaining('150');
        await astroWeightPage.planetSelector("Moon");
        await browser.pause(1000)
        await astroWeightPage.calculateButton.click();
        await browser.pause(1000);
        await expect(await astroWeightPage.getWeight).toHaveTextContaining('24.83');
    })
    it('Should ensure that users can add a planet and it\'s weight multiplier', async function()
    {  
        await astroWeightPage.addPlanet('Romulus',1.1);
        await astroWeightPage.setWeight(100);
        await browser.pause(100);
        await astroWeightPage.planetSelector('Romulus');
        await browser.pause(100);
        await astroWeightPage.calculateButton.click();
        await browser.pause(10000);
        await expect(await astroWeightPage.getWeight).toHaveTextContaining('110');
    })
})