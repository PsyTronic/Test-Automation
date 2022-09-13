describe('More on loops', async function(){

    it('should create and add to arrays', async function()
    {
        let arrExample = [];
        arrExample.push(9)
        console.log (arrExample)
        arrExample.push("hello world")
        console.log(arrExample)
        arrExample.push(true, -3.9, "152")
        console.log(arrExample)

        let supplyKit = ['rain coat', 'matches', 'blanket', 'water', 'meal packs', 'knife', 'first aid']
        let supplyContents = `supplyKit, ${supplyKit}, Size of Kit: , ${supplyKit.length}`
        supplyKit[1] = 'lighter';
        console.log('supplyKit',supplyKit);
        let takenItem = supplyKit.pop();
        console.log('takenItem',takenItem);
        takenItem = supplyKit.shift();
        console.log('takenItem',takenItem);
        console.log('supplyKit',supplyKit);
        supplyKit.unshift('twine');
        supplyKit.push('compass');
        supplyContents = `supplyKit, ${supplyKit}, Size of Kit: , ${supplyKit.length}`
        console.log(supplyContents);

        supplyKit.splice(3,0, 'rope');
        supplyKit.splice(supplyKit.indexOf('knife') , 1);
        console.log('Old supplyKit: ', supplyKit);
        supplyKit.splice(2,3, 'water bottle', 'socks', 'jacket');
        supplyContents = `supplyKit, ${supplyKit}, Size of Kit: , ${supplyKit.length}`;
        console.log(supplyContents);
        console.log('supplyKit: ',supplyKit);

        let desk1 = ['pencils', 'notebook', 3.14, true, 6.022e23]
        let desk2 = ['pen', 'laptop', 'camera', 42, 'phone']
        let desk3 = desk1.concat(desk2);
        console.log('desk3: ', desk3, 'Desk1: ', desk1);
        console.log(desk1.slice(3,5));
        console.log(desk2.slice(3,5));
        console.log(desk1.reverse());
        console.log(desk2.sort());
        console.log ('Desk 1: ', desk1, 'Desk2: ', desk2);

        let message = 'In the forest, no one can hear you code.';
        console.log(message.split());
        console.log(message.split('e'));
        console.log(message.split(' '));
        console.log(message.split(''));

        let myArray = ['A', 'c', 'c', 7];
        console.log(myArray.join());
        console.log(myArray.join('a'));
        console.log(myArray.join(' '));
        console.log(myArray.join(''));

        
        let elem1 = ['hydrogen', 'H', 1.008];
        let elem2 = ['helium', 'He', 4.003];
        let elem3 = ['iron', 'Fe', 55.85];
        let elemsTable = [];
        elemsTable.push(elem1);
        elemsTable.push(elem2);
        elemsTable.push(elem3);

        console.log('mass of element 1: ', elemsTable[0][2], ' name of element 2: ', elemsTable[1][0], ' symbol of element 3: ', elemsTable[2][1])

        let array1d1 = [1,2,3];
        let array1d2 = [4,5,6];
        let array1d3 = [7,8,9];
        let array1d4 = [10,11,12];
        let array1d5 = [13,14,15];
        let array1d6 = [16,17,18];
        let array1d7 = [19,20,21];
        let array1d8 = [22,23,24];
        let array1d9 = [25,26,27];
        let array2d1 = [array1d1,array1d2,array1d3];
        let array2d2 = [array1d4,array1d5,array1d6];
        let array2d3 = [array1d7,array1d8,array1d9];
        let array3d  = [array2d1,array2d2,array2d3];

        for (let i = 0; i < array3d.length; i++)
        {
            console.log('array3d' + i + ': ')
            for (let j = 0; j < array3d[i].length; j++)
            {
                console.log('array2d' + j + ': ')
                for (let k = 0; k < array3d[i][j].length; k++)
                {
                    console.log(' array1d: ' + array3d[i][j][k]);
                }
            }
        }
        let superHeroes = [
            ['Superman', 'Batman', 'Spiderman'],
            ['Wolverine', 'Storm', 'Cyclops'],
            ['Goku', 'Vegeta',  'Gohan']
        ];
        
        console.log(superHeroes[0][2]);
        console.log(superHeroes[1][1]);
        console.log(superHeroes[2][1]);

        
        let newHeroes = ['Invisible Woman', 'Thing', 'Human Torch'];

        superHeroes[3] = newHeroes;
        console.log(superHeroes[3]);
        superHeroes[1].reverse();
        console.log(superHeroes[1]);

        let president = {
            firstName: 'George',
            lastName: 'Washington'
        };
        console.log(president['firstName']);
        console.log(president['lastName']);

        let address = {
            'building number': 467,
            street: 'East 51st street',
            state: 'CA',
            country: 'USA'
        };

        president.lastName = 'Bush'
        console.log(president);

        president.age = 57;

        console.log(president);

        delete president.age;
        console.log(president);

        let student = {
            firstName: 'Joe',
            lastName: 'Doe',
            studentId: 1
        };

        console.log('age' in student);
        console.log('studentId' in student);

        let learningToCode = {
            languages: ["JavaScript", "C#", "Java"],
            isDifficult: true,
            difficulty: 8,
            isRewarding: true,
            humor: "https://www.reddit.com/r/ProgrammerHumor/"
        }

        learningToCode.languages[3] = "Go";
        learningToCode.difficulty = 7;
        learningToCode.isFun = true;
        for (let i = 0; i < learningToCode.languages.length; i++)
        {
            console.log(learningToCode.languages[i]);
        }
        let chocoMountain =
        {
            title: 'Choco Mountain',
            servings: 8,
            ingredients: ["flour","egg","Chocolate"]
        }
        console.log(chocoMountain.title);
        console.log("Serves: ",chocoMountain.servings);
        console.log("Ingredients: ", chocoMountain.ingredients);


        let restaurant1 = 
        {
            name: "Dis Place",
            city: "Little Italy",
            alreadyVisited: false
        }
        let restaurant2 = 
        {
            name: "Dat Place",
            city: "Little Italy",
            alreadyVisited: false
        }

        let restaurant3 = 
        {
            name: "Dis Other Place",
            city: "Little Italy",
            alreadyVisited: true
        }

        let restaurants = [restaurant1,restaurant2,restaurant3];

        for (let i = 0; i < restaurants.length; i++)
        {
            console.log(restaurants[i].name + " in " + restaurants[i].city + ".")
            if (restaurants[i].alreadyVisited == true)
            {
                console.log("You have already visited this place. The smell of the food wafts back into your nose from your memories, like you were there again.")
            }
            else
            {
                console.log("You have not been here before. Your mouth salivates as your imagination dances with the tantalizing possibilities of a mouth-watering meal.")
            }
            console.log ("")
        }
        });

        //Section 13: More on objects
        it ('should create and add to more objects', async function()
        {
            let car = {
                'name':'Mitsubishi',
                'model':'Super Lancer',
                'weight':1300,
                'year': 1996,
                'color':'Grey',
                'start': function () {
                    console.log("Vroom!")
                },
                'honk': function () {
                    console.log("Beep Beep")
                }
            }
            console.log ("")
            /* 
            The JavaScript object

            let myObj = {
                x: 8\,
                y: 9};

                Is the same as the JSON string

                let myJson = '{"x": 8, "y": 9}';

                JSON.parse(myJson);  // Will return an object
                */
                function checkfor1000(x,y)
                {
                    if( x == 1000 || y == 1000 || x+y == 1000)
                    {
                        console.log("One of the numbers "  + x + " or " + y +  ", or the sum of them, is equal to 1000.")
                    }
                    else
                    {
                        console.log("None of the numbers " + x + " or " + y + ", or their sum, equal 1000.")
                    }
                }
                checkfor1000(1000,0);
                checkfor1000(200,800);
                checkfor1000(555,222);
                console.log ("")
                function listExtensions(array)
                {
                    let extensionList = [];
                    if (Array.isArray(array))
                    {
                        console.log("the following extension types exist:")
                        for (let i = 0; i < array.length; i++)
                        {
                            let dotPos;
                            //for (let j = array[i].length; j > 0; j--)
                            for (let j = 0; j < array[i].length; j++)
                            {
                                if(array[i].charAt(j) === '.')
                                {
                                    dotPos = j;
                                }
                            }

                            if (!(extensionList.includes(array[i].substr((array[i].length)-(array[i].length-dotPos)))))
                            {
                                console.log(array[i].substr((array[i].length)-(array[i].length-dotPos)));
                                extensionList.push(array[i].substr((array[i].length)-(array[i].length-dotPos)));
                            }
                        }
                    }
                    return extensionList;
                }
                let testArray = ['index.html', 'main.js', 'styles.css']
                let testArray2 = ['index.html', 'main.html', 'styles.css']

                listExtensions(testArray);
                listExtensions(testArray2);
                console.log ("")
                function calFahrenheit(celsius)
                {
                    let fahrenheit = ((celsius * 9/5) + 32);
                    return fahrenheit;
                }
                console.log("your temperature in fahrenheit is: " + calFahrenheit(0));
                console.log ("")
                function calculateDogAge(humanAge)
                {
                    console.log("Your dog of " + humanAge + " years = " + (humanAge*7) + " in dog years.")
                }
                calculateDogAge(7);
                calculateDogAge(42);
                calculateDogAge(3.14);
                console.log ("")
                function calculateSupply(age, dailyAmnt)
                {
                    console.log("You will need " + (((100-age)*365)*dailyAmnt) + " units of your favorite snack to last you until the ripe old age of " + 100 + ".");
                }
                console.log ("")
                calculateSupply(3,3);
                calculateSupply(30,3);
                calculateSupply(42,42);

                // Section 14: Built in Objects
                console.log ("")
                console.log(Math)
                console.log("the 'Math' object does NOT show its list of functions, methods, or variables. at all when combined with the WebdriverIO program.")
                console.log(Math.PI);
                let num =  5.7;
                console.log(Math.round(num));
                console.log(Math.floor(20.5));
                console.log(Math.ceil(20.5));
                console.log(Math.trunc(20.5));
                console.log(Math.random());
                console.log ("")
                function genRandom(x,y)
                {
                    //Working now, I think.;
                    return ((Math.random()*(y-x)+x))
                }
                console.log(genRandom(80,90));
                console.log(genRandom(1,10));
                console.log ("")
                function areaOfACircle(r)
                {
                    return (Math.PI*(Math.pow(r,2)))
                }
                console.log ("")
                console.log(areaOfACircle(30));
                console.log(areaOfACircle(20));
                console.log(areaOfACircle(10));

                console.log("Note: The curriculum says to create a feunction called is_array that determines if an object is an array," +
                " but then provides one for you. Which should it be? Make your own or use the already working solution provided?")
                console.log ("")
                function is_array(input) {
                    if (toString.call(input) === "[object Array]")
                        return true;
                    return false;   
                        };
                console.log(is_array('helloWorld'));
                console.log(is_array([1, 2, 4, 0]));
                console.log ("")
                let myColor = ["Red", "Green", "White", "Black"];
                console.log("Array string is: " + myColor.join(" ")+ ".")

                function isDate(input)
                {
                    if (toString.call(input) === "[object Date]")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                console.log ("")
                console.log ("Are these dates?")
                console.log(isDate(new Date(86400000)));
                console.log(isDate(new Date(99,5,24,11,33,30,0)));
                console.log(isDate([0, 1, 2, 4, 5]));
                console.log ("")

                function date_diff_indays(day1, day2)
                {
                    console.log ("What is the difference between these days, " + day1 + ", " + day2 + "?")
                    let date1 = new Date(day1);
                    let date2 = new Date(day2);

                    if (isDate(date1) && isDate(date2))
                    {
                        date3 = (date2.valueOf()-date1.valueOf());
                        return ("The difference is " + ((date3/1000/60/60/24)) + " days")
                    }
                    else
                    {
                        return "NOT A DATE: CHECK YOUR FORMATTING."
                    }
                }
                console.log(date_diff_indays('04/02/2014', '11/04/2014'));
                console.log ("")
                function isStringBlank(testString)
                {
                    console.log('Testing to see if this string is blank.' +
                    'Note that this function will return true if the string has no characters in it OR just one or more spaces. ' + 
                    'It does NOT check to see only if it is empty.')
                    if(testString.length == 0 || testString == " ")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                console.log(isStringBlank(''))
                console.log(isStringBlank('xyz'))
                console.log ("")
                function isInputString(testInput)
                {
                    console.log ("Checking to see if this input is a string...")
                    if (typeof(testInput) == "string")
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                console.log(isInputString('helloWorld'));
                console.log(isInputString([0, 1, 2, 4, 5]));
                console.log ("")
                
                // NOTE: Strings are immutable in javascript and so you must put strings together to change them at any character in the string.
                function capitalize(thisString)
                {
                    if (thisString.charAt(0).match(/[a-z]/))
                    {
                        console.log("Capitalization is important, yo!");
                        let capitalizedString = thisString.toUpperCase();
                        let newArray = [];
                        for (let i = 0; i < thisString.length; i++)
                        {
                            if (i == 0)
                            {
                                newArray[i] = capitalizedString[i];
                            }
                            else
                            {
                                newArray[i] = thisString[i];
                            }
                        }
                        let newString = newArray.join('');
                        console.log(newString[0]);
                        return newString;
                    }
                }
               let newCaplitalizedString = capitalize('my string exercises');
               console.log(newCaplitalizedString);
                expect (newCaplitalizedString).toBe("My string exercises");
                // should return "My string exercises"
        });
});