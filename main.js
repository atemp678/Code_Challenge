//Plan going with idea 3, as should have fastest runtime and also be simplest way to get the answer
//(refactor as time allows)

///Take in input, check if the input string is all integers and filter out spaces and letters.
//if string has no integers return error
//make a new array which is the input string as only an integer
//make sure 1 and 0 return 1 and 0 respectively
//permutate the given integer string in order to give all ways the digits can be organized
//make new array filtering out all duplicates
//reorganize new array from ascending to descending numbers.

//premutation:
// 456= 654, 645, 564, 546, 465, 456
// 4  = 4bc c4b bc4
//5 = 5bc c5b bc5
//6 = 6cb c6b cb6
//xxx....xn;
//for loop: input.length 
//if the loop doesn't end call itself again (recursion of for loop?)

export function solution(input) {
    if (!input || typeof input !== "string"){
        return "Please enter a string"
      } else if (input.length<2) 
      return input
    }
  let permutationsArray=[]
  for (let i = 0; i < input.length; i++){
    // do something
  }
  return permutationsArray
};
