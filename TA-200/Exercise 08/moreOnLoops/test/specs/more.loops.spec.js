const { keypress } = require('../pageobjects/key_presses.page');
const key_pressesPage = require('../pageobjects/key_presses.page');
const page = key_pressesPage;


describe('More on Loops tests', async function()
{
    xit('should tell you what your fuel levels are', async function()
    {
        var fuelLevel = 0;

        while(fuelLevel < 12)
        {
            fuelLevel += 1;
            console.log('Filling up: ' + fuelLevel + ' gallons full.');
        }
        console.log(fuelLevel + " gallons is enough to begin your trip");

        while(fuelLevel > 4)
        {
            fuelLevel -= 1;
            console.log('Traveling... ' + (12 - fuelLevel) + ' gallons of gas used')
        }
        console.log('You are at ' + fuelLevel + ' gallons, or 1/4 of a tank. Time to refuel!')

    })
    it('should count down to zero in realtime seconds', async function()
    {    
        
    // APPARENTLY THIS CODE WORKS

    var seconds = 10;
    var timer = setInterval(function() {
       seconds--;
        if(seconds == 0) {
            console.log("done");
            clearInterval(timer);
        } else {
            console.log(seconds + " seconds left");
        }
        }, 1000);

        let timex = 60;
        let intervalID = setInterval(function()
        {
            timer = timex - 1;
                if (timex <= 0)
                {
                    clearInterval(intervalID)
                }
        console.log(timex + " seconds until time reaches 0.")
        }, 1000);

        //await timeCount(timer)
        // function timeCount()
        // {
        // while (timer > 0)
        // {
            // setTimeout(
        // while (timer > 0)
        // {
        //     timer = timeCount(timer);
        // }
            //(1000 * timer));
            //timer = timer - 1;
 
            // if (timer <= 0)
            //     {
            //         clearTimeout(timeFunc)
            //     }
        // }
            console.log('DING DING! Time is up!')
    })

    // async function timeCount(timer)
    // {
    //     console.log('This timer reads as ',timer + ' seconds.')
    //     let timeup = setInterval(async function()
    //     {
    //         console.log('TIMER!!!!! ',timer + ' seconds.')
    //         while (timer > 0)
    //         {
    //             console.log(timer + " seconds until time reaches 0.");
    //             // await timeCount(timer)
    //             timer = timer - 1;
    //         }
    //         return timer;
    //     }, 1000 * timer)

    //     // if (timer > 0)
    //     // {
    //     //     await timeCount(timer)
    //     // }
    //     console.log('TIMEUP!!!!! ',timeup + ' seconds.')
    //     return timeup;
    // }

    xit ('should keep trying to get random numbers to be the same as the first random number 4 times for a game', async function()
    {
        let currNum;
        let firstNum = await getRandomInt(10);
        console.log('the first number is... ',firstNum)
        let hits = 1;
        let numTries = 0;
        while (hits < 5)
        {
            currNum = await getRandomInt(10);
            //console.log('the current number is... ',currNum)
            if (currNum == firstNum)
            {
                console.log('HIT, at ' + (numTries + 1) + ' iterations.')
                hits += 1;
            }
            numTries += 1;
            console.log('this loop has run ' + numTries + ' times.')
        }

    })

    async function getRandomInt(max)
    {
    return Math.floor(Math.random() * max + 1);
    }

    it('Should access and console.log displayed inputs from https://the-internet.herokuapp.com/key_presses', async function()
    {
    await page.open()

    console.log(await page.pressKey('ArrowUp'));
    console.log(await page.pressKey('ArrowUp'));
    console.log(await page.pressKey('ArrowDown'));
    console.log(await page.pressKey('ArrowDown'));
    console.log(await page.pressKey('ArrowLeft'));
    console.log(await page.pressKey('ArrowRight'));
    console.log(await page.pressKey('ArrowLeft'));
    console.log(await page.pressKey('ArrowRight'));
    console.log(await page.pressKey('KeyB'));
    console.log(await page.pressKey('KeyA'));
    console.log(await page.pressKey('Enter'));
    browser.pause(10000);

     const keyPressedText = await page.keysmash.getText();

    expect(await page.keysmash.getText()).toEqual('You Entered: ENTER');  
    browser.pause(10000);
    })
})