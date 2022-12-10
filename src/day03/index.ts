
/* Day 03 */

import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inventories: string[] = input.split( '\n' );
  const priorityLookup: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let part1: string = '';
  let part2: string = '';
  let sum: number = 0;
  for (const inv of inventories) {
    // split inv into 2 pieces
    part1 = inv.slice(0, inv.length / 2);
    part2 = inv.slice(inv.length / 2);
    // search through each letter of part1 and see if it is contained in part2
    let match = '';
    for (const letter of part1) {
      if ( part2.includes(letter) ) {
        match = letter;
        break;
      }
    }
    // get priority score from lookup
    let score = priorityLookup.indexOf(match) + 1;
    sum += score;
  }
  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const inventories: string[] = input.split( '\n' );
  const priorityLookup: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // split the inventory into groups of 3
  const invGroups: string[][] = [];
  let mainIndex = 0;
  let groupIndex = 0;
  let sum: number = 0;
  
  // create a bunch of sub arrays to hold the groups of 3
  for (const inv of inventories) {
    if (mainIndex % 3 === 0) {
      invGroups.push([]);
      groupIndex++;
    }
    invGroups[groupIndex - 1].push(inv);
    mainIndex++; 
  }

  // now look through the groups of 3 for a common letter
  for (const group of invGroups) {
    // go through each letter of the first inventory and see if it is contained in
    // both the second and third.
    for (const letter of group[0]) {
      if (group[1].includes(letter) && group[2].includes(letter)) {
        // lookup this letter and add it to the sum
        let score = priorityLookup.indexOf(letter) + 1;
        sum += score;
        break;
      }
    }
  }

  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
          vJrwpWtwJgWrhcsFMMfFFhFp
          jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
          PmmdzqPrVvPwwTWBwg
          wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
          ttgJtRGJQctTZtZT
          CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          vJrwpWtwJgWrhcsFMMfFFhFp
          jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
          PmmdzqPrVvPwwTWBwg
          wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
          ttgJtRGJQctTZtZT
          CrZsJsPPZsGzwwsLwLmpwMDw
        `,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
