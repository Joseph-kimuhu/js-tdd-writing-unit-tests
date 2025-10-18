// Your tests here
// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7); // 2+1+2+2
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7); // Same as "test"
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("ignores non-alphabetic characters", () => {
    const word = "t3$#e🍕s!";
    const points = pointsForWord(word);
    expect(points).toBe(5); // t(2) + e(1) + s(2)
  });

  it("returns 0 for a string with only non-letters", () => {
    const word = "123!@#🍔";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });
});

