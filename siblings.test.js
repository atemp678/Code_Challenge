import each from "jest-each";
import { solution } from "./main.js";

describe(solution, () => {
  test.each`
    input          | expectedResult
    ${"123"}       | ${"321,312,231,213,132,123"}
    ${"1 2 3"}     | ${"321,312,231,213,132,123"}
    ${"A 3B2 C6D"} | ${"632,623,362,326,263,236"}
    ${"1"}         | ${"1"}
    ${"0"}         | ${"0"}
    ${"abc"}       | ${"undefined"}
  `(`converts $input to $expectedResult`, ({ input, expectedResult }) => {
    expect(solution(input)).toBe(expectedResult);
  });
});
