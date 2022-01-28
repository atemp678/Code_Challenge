export function solution(input) {
  // logic here
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (input[i] < input[j]) {
        let newPosition = swap(input[i], input[j]);
        return [...newPosition];
      }
      console.log(newPosition);
    }
  }
}
// Get input from user
// get a string that only contains numbers
// if the string has no numbers return error
