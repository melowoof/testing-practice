import { expect, test } from "vitest";
import { capitalize } from "./functions/capitalize.js";
import { reverseString } from "./functions/reverseString.js";
import { calculator } from "./functions/calculator.js";
import { caesarCipher } from "./functions/caesarCipher.js";
import { analyzeArray } from "./functions/analyzeArray.js";

test("capitalize first word of 'coke scroom' to be 'Coke scroom'", () => {
  expect(capitalize("coke scroom")).toMatch("Coke scroom");
});

test("reverse 'race car' to get 'rac ecar'", () => {
  expect(reverseString("race car")).toMatch("rac ecar");
});

test("add 1 and 2 to get 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 1 and 2 to get -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divide 1 and 2 to get 0.5", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("multiply 1 and 2 to get 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("shift string 'abcde' by a shift factor of 3 to get 'defgh'", () => {
  expect(caesarCipher("abcde", 3)).toMatch("defgh");
});

test("shift string 'masc' by a shift factor of 3 to get 'pdvf'", () => {
  expect(caesarCipher("masc", 3)).toMatch("pdvf");
});

test("shift string 'hello world' by a shift factor of 3 to get 'khoor zruog'", () => {
  expect(caesarCipher("hello world", 3)).toMatch("khoor zruog");
});

test("shift string 'xyz' by a shift factor of 3 to get 'abc'", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("shift string '' by a shift factor of 3 to get ''", () => {
  expect(caesarCipher("", 3)).toMatch("");
});

test("shift string 'hi, world!' by a shift factor of 3 to get 'kl, zruog!'", () => {
  expect(caesarCipher("hi, world!", 3)).toMatch("kl, zruog!");
});

test("shift string 'hi, woRLd!' by a shift factor of 3 to get 'kl, zrUOg!'", () => {
  expect(caesarCipher("hi, woRLd!", 3)).toMatch("kl, zrUOg!");
});

test("input array of [1, 8, 3, 4, 2, 6] to get object == {average: 4, min: 1, max: 8, length: 6}", () => {
  const input = [1, 8, 3, 4, 2, 6];
  const expected = { average: 4, min: 1, max: 8, length: 6 };

  expect(analyzeArray(input)).toEqual(expected);
});

test("input array of [1, 8, 3, 4, 2, 6] to get object == {average: 4, min: 1, max: 8, length: 6}", () => {
  const input = [2, 8];
  const expected = { average: 5, min: 2, max: 8, length: 2 };

  expect(analyzeArray(input)).toEqual(expected);
});
