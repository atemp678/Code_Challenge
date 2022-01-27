import { solution } from "./main.js";
const actual = solution(123);
const expected = [321, 312, 231, 213, 132, 123];

if (actual !== expected) {
  throw new Error(`${actual} value is not ${expected}`);
}
