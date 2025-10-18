// Your code here
// src/utils.js

export function pointsForWord(word) {
  let points = 0;

  for (const char of word) {
    if (/[aeiou]/i.test(char)) {
      points += 1;
    } else if (/[a-z]/i.test(char)) {
      points += 2;
    }
    
  }

  return points;
}
