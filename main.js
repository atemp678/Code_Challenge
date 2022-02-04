//As we were asked in the question to show how we think, see below for detailed algorithm thought process:
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
//456 = 654, 645, 564, 546, 465, 456
//4bc = 4bc c4b bc4 b4c 4cb cb4
//5bc = 5bc 5cb b5c c5b bc5 cb5
//6bc = 6cb 6bc c6b cb6 b6c bc6
import { allAnagrams } from "./FindAnagramsFunction";

const lettersOnly = /^[a-zA-Z]+$/;
export function solution(input) {
  if (lettersOnly.test(input)) {
    return "undefined";
  }
  if (!input || typeof input !== "string") {
    return "Please enter a string";
  }
  let number = input.replace(/[^0-9\\.]+/g, "");
  {
    if (number.length < 2) {
      return input;
    } else {
      allAnagrams(number);
      const arr = number; //declare your number
      const anag = allAnagrams(arr); //send it to the function
      return anag.join(",");
    }
  }
}
