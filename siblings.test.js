import each from "jest-each";
import { solution } from "./main.js";
// const actual = solution(123);
// const expected = [321, 312, 231, 213, 132, 123];

describe(solution, () => {
  test.each`
    input          | expectedResult
    ${"abc"}       | ${"undefined"}
    ${"123"}       | ${"321, 312, 231, 213, 132, 123"}
    ${"A 3B2 C6D"} | ${"632, 623, 362, 326, 263, 236"}
    ${"1"}         | ${"1"}
    ${"0"}         | ${"0"}
  `(`converts $input to $expectedResult`, ({ input, expectedResult }) => {
    expect(solution(input)).toBe(expectedResult);
  });
});
// if (actual !== expected) {
//   throw new Error(`${actual} value is not ${expected}`);
// }
