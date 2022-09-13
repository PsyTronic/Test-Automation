
describe('While Loop Exercise', async function()
{

    xit('just outputs while loop results', async function()
    {
        let i=0;
        while (i < 10)
        {
            i++;
            console.log(i);
        }
        console.log('BREAK!');

        i=9;
        while (i > 0) {
            console.log(i);
            i--
        }
        console.log('BREAK!');

        let num = 10000;
        while (num > 10)
        {
            console.log(num);
            num = num / 2;
        }
        console.log(num);
        console.log('BREAK!');

        i=0;
        while (i < 13 )
        {
            if (i != 3)
            {
                console.log(i);
            }
            i++
        }
        console.log("BREAK!");

        i=0;
        while (i < 13 )
        {
            if (!(i == 3 || i ==6))
            {
                console.log(i);
            }
            i++
        }
        expect (i).toBe(13);
    })
})