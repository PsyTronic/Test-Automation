describe('More Pseudocode Exercise Tests', () =>
{
    it('should complete Exercise 1', async () =>
    {
        function nextItem(xs, item)
        {
            function nextItem(xs, item) {
                /*
                Pseudocode:
                Given a sequence of items, and a particular item in that sequence,
                1: find where the item in that sequence exists,
                2a: if the item exists, return the next item in that list
                2b: if the item doesn't exist, return nothing but undefined, same if it is the last item in the list.
                */
                console.log(xs, " ", item);
                console.log(xs.length);
                // let positionValue;
                if (xs.length != undefined)
                {
                  for (let i = 0; i < xs.length; i++)
                  {
                    console.log(xs[i])
                    if (item == xs[i])
                    {
                      return (xs[i+1]);
                    }
                  }
                }
                else
                {
                  if( xs instanceof Object)
                    {
                      console.log('This is an Object!')
                      while(xs.next().value < item)
                        {
                        }
                    }
                    return (xs.next().value)
                }
                return undefined;
              }
        }
    })

    it ('should complete Exercise 2', async function()
    {

        /*
        For each of these function assignments,
        the Pseudocode seems to already be written,
        which seems to render this exercise for the assignment invalid.
        */
        function getLength(arr){
            //return length of arr
            return arr.length;
        }
        function getFirst(arr){
            //return the first element of arr
            return arr[0];
        }
        function getLast(arr){
            //return the last element of arr
            return arr[arr.length-1];
        }
        function pushElement(arr){
            var el=1;
            //push el to arr
            arr.push(el);
            return arr;
        }
        function popElement(arr){
            //pop an element from arr
            let popElem = arr.pop()
            return arr;
        }
    })

    it('should complete Exercise 3', async function()
    {
    function pickIt(arr){
        var odd=[],even=[];
        //coding here
        /*
          For a given array
          traverse through the array,
          and if the array number is even, use the .push() array function to push that number to the even array,
          else use it to push the number to the odd array.
          */
        for (let i = 0; i < arr.length; i++)
          if (arr[i] % 2 == 0)
            {
              even.push(arr[i]);
            }
        else
          {
            odd.push(arr[i]);
          }
        
        
        console.log(odd,even)
        return [odd,even];
      }
      let array = [1,2,4,3,7,5,9,64]
      pickIt(array)
    })
})