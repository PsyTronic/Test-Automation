function reverse(string){
    //your code here
    /*
    For a given string,
    find a function to reverse parts of the string by word
    and return a new string where the words are forwards
    but the ORDER of the words are reversed.
    This may need to be done via a substring regex search.
    This can be done by putting each word into an array, and returning a string that is a concatenation of the array values;
     */
    let arrayIndex = 0;
    let insideArray = [];
    let wordString = "";
    // console.log('regex returns :', letterArray)
    let wordArray = [];
  
      for (let i=0; i < string.length; i++)
      {
        if (!(string[i] == ' '))
        {
          wordString = wordString + string[i];
        }
        else
          {
            wordArray.push(wordString);
            wordString = "";
          }
        //console.log(wordArray[i])
      }
    wordArray.push(wordString);
    console.log('The wordArray reads as: ',wordArray);
    wordArray.reverse()
    console.log('The new wordArray reads as: ',wordArray);
    return wordArray.join(" ");
    
  }

  function addLength(str) {
/*
I jumped ahead and forgot the pseudocode!
*/
    let wordArray = str.split(' ');
    let resultArray = [];
    console.log(wordArray)
    
    for (let i = 0; i < wordArray.length; i++)
      {
        let integer = wordArray[i].length;
        let appendString = " " + integer;
        resultArray[i] = "".concat(wordArray[i], appendString);
      }
    console.log(resultArray)
    return resultArray;
  }
  function removeEveryOther(arr){
    //your code here
    
    /*
    Given a non-empty array,
    run a for loop.
    In the for loop, check if the array positon, starting with i = 0,
    is NOT EVEN. Do this with a !modulus line like !(i % 2).
    If yes, push that array position's contents to a new array. Else do nothing.
    Output: a new array that has every second element of the old array removed.
    */
    let resultArray = [];
    for (let i = 0; i < arr.length; i++)
      {
        if (!(i%2))
          {
            resultArray.push(arr[i]);
          }
      }
    return resultArray;
  }

  function invert(array) {
    /*
    for a given array of numbers,
    Create a for loop.
    In the for loop reverse each number's sign by using the formula
    Array[i] = array[i]* -1;
    Then return the array;
    */
    
    for (let i = 0; i < array.length; i++)
      {
        array[i] = array[i] * -1;
      }
    return array;
  }

  function basicOp(operation, value1, value2)
{
  /*
  For a given set of variables, two values, and an operator,
  perform an operation on the values using the operator
  and return the result of this operation.
  *?
  */
  switch (operation)
    {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return (value1 / value2);
        
      default: return value1 + value2;
    }
  
    function averages(numbers) {
    
      let avgsArray = [];
      if (numbers == null)
        {
            return avgsArray;
        }
        else if (numbers.length <2)
        {
            return avgsArray;
        }
      for(let i = 1; i < numbers.length; i++)
        {
          avgsArray[i-1] = ((numbers[i] + numbers[i-1])/2);
        }
      return avgsArray;
    }
}