import run from "aocrunner";

// A = ROCK
// B = PAPER
// C = SCISSORS
//
// X when ROCK      1
// Y when PAPER     2
// Z when SCISSORS  3
//
// PART 2
// X need to lose
// Y need to draw
// Z need to win

const parseInput = (rawInput: string) => rawInput;

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const rounds: string[] = input.split( '\n' );
  const ROCK: string = 'A';
  const PAPER: string = 'B';
  const SCISSORS: string = 'C';
  const LOSE: string = 'X';
  const DRAW: string = 'Y';
  const WIN: string = 'Z';
  let score: number = 0;

  const chosenPlayPoints = (sign: string, op: string): number => {
    let points: number = 0;
    switch (sign) {
      case LOSE: {
        switch (op) {
          case ROCK: {
            // LOSE WITH SCISSORS
            points += 3;
            break;
          }
          case PAPER: {
            // LOSE WITH ROCK
            points += 1;
            break;
          }
          case SCISSORS: {
            // LOSE WITH PAPER
            points += 2;
            break;
          }
        }
        break;
      }
      case DRAW: {
        points += 3;
        switch (op) {
          case ROCK: {
            // DRAW WITH ROCK
            points += 1;
            break;
          }
          case PAPER: {
            // DRAW WITH PAPER
            points += 2;
            break;
          }
          case SCISSORS: {
            // DRAW WITH SCISSORS
            points += 3;
            break;
          }
        }
        break;
      }
      case WIN: {
        points += 6;
        switch (op) {
          case ROCK: {
            // WIN WITH PAPER
            points += 2;
            break;
          }
          case PAPER: {
            // WIN WITH SCISSORS
            points += 3;
            break;
          }
          case SCISSORS: {
            // WIN WITH ROCK
            points += 1;
            break;
          }
        }
        break;
      }
    }
    return points;
  }

  for (let x = 0; x < rounds.length; x++) {
    let op = rounds[x].split(' ')[0];
    let sign = rounds[x].split(' ')[1];
    score += chosenPlayPoints(sign, op);
  }

  return score;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const rounds: string[] = input.split( '\n' );
  const ROCK: string = 'A';
  const PAPER: string = 'B';
  const SCISSORS: string = 'C';
  const MY_ROCK: string = 'X';
  const MY_PAPER: string = 'Y';
  const MY_SCISSORS: string = 'Z';
  let score: number = 0;

  const chosenPoints = (me: string): number => {
    let points: number = 0;
    if (me === MY_ROCK) points += 1;
    if (me === MY_PAPER) points += 2;
    if (me === MY_SCISSORS) points += 3;
    return points;
  }

  const winOrLosePoints = (op: string, me: string): number => {
    let points = 0;
    if (op === ROCK) {
      if (me === MY_PAPER) points += 6;
      if (me === MY_SCISSORS) points += 0;
      if (me === MY_ROCK) points += 3;
    } 
    else if (op === PAPER) {
      if (me === MY_PAPER) points += 3;
      if (me === MY_SCISSORS) points += 6;
      if (me === MY_ROCK) points += 0;
    } 
    else if (op === SCISSORS) {
      if (me === MY_PAPER) points += 0;
      if (me === MY_SCISSORS) points += 3;
      if (me === MY_ROCK) points += 6;
    }
    return points;
  }

  for (let x = 0; x < rounds.length; x++) {
    let op = rounds[x].split(' ')[0];
    let me = rounds[x].split(' ')[1];
    score += winOrLosePoints(op, me);
    score += chosenPoints(me);
  }

  return score;
};

run({
  part1: {
    tests: [
      // {
      //   input: `
      //     A Y
      //     B X
      //     C Z
      //   `,
      //   expected: 12,
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          A Y
          B X
          C Z
        `,
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
