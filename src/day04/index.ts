
/* Day 04 */

import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

type Assignment = {
  first: number, 
  second: number
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const pairings: string[] = input.split( '\n' );
  let sum = 0;

  for ( let x = 0; x < pairings.length; x++ ) {
    // split the pairings into 2 pieces
    const pairs: string[] = pairings[x].split(',');
    const p1: Assignment = {
      first: Number(pairs[0].split('-')[0]),
      second: Number(pairs[0].split('-')[1]),
    };
    const p2: Assignment = {
      first: Number(pairs[1].split('-')[0]),
      second: Number(pairs[1].split('-')[1]),
    };

    // check for fully contains
    if ((p1.first >= p2.first && p1.second <= p2.second) || (p2.first >= p1.first && p2.second <= p1.second)) {
      sum++;
    }
  }

  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const pairings: string[] = input.split( '\n' );
  let sum = 0;

  for ( let x = 0; x < pairings.length; x++ ) {
    // split the pairings into 2 pieces
    const pairs: string[] = pairings[x].split(',');
    const p1: Assignment = {
      first: Number(pairs[0].split('-')[0]),
      second: Number(pairs[0].split('-')[1]),
    };
    const p2: Assignment = {
      first: Number(pairs[1].split('-')[0]),
      second: Number(pairs[1].split('-')[1]),
    };

    // check for fully contains
    if (((p1.second >= p2.first) && p1.second <= p2.second) || 
        (p2.second >= p1.first) && p2.second <= p1.second) {
      sum++;
    }
  }

  return sum;
};

run({
  part1: {
    tests: [
      {
        input: `
          2-4,6-8
          2-3,4-5
          5-7,7-9
          2-8,3-7
          6-6,4-6
          2-6,4-8
        `,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          2-4,6-8
          2-3,4-5
          5-7,7-9
          2-8,3-7
          6-6,4-6
          2-6,4-8
        `,
        expected: 4,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
