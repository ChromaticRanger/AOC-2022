import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let head: number = 0;
  let tail: number = 4;

  const isUnique = ( input:string ): boolean => {
    let charSet = new Set<string>;
    for ( let letter of input ) {
      charSet.add( letter );
    }
    if ( charSet.size === input.length ) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let packet = input.slice( head, tail );
    let found: boolean = false;
    // check the packet
    if ( isUnique( packet )) {
      break;
    } else {
      head++;
      tail++;
    }

  }

  return tail;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let head: number = 0;
  let tail: number = 14;

  const isUnique = ( input:string ): boolean => {
    let charSet = new Set<string>;
    for ( let letter of input ) {
      charSet.add( letter );
    }
    if ( charSet.size === input.length ) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < input.length; i++) {
    let packet = input.slice( head, tail );
    let found: boolean = false;
    // check the packet
    if ( isUnique( packet )) {
      break;
    } else {
      head++;
      tail++;
    }

  }

  return tail;
};

run({
  part1: {
    tests: [
      {
        input: 'bvwbjplbgvbhsrlpgdmjqwftvncz',
        expected: 5,
      },
      {
        input: 'nppdvjthqldpwncqszvftbrmjlhg',
        expected: 6,
      },
      {
        input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
        expected: 10,
      },
      {
        input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
        expected: 19,
      },
      {
        input: 'bvwbjplbgvbhsrlpgdmjqwftvncz',
        expected: 23,
      },
      {
        input: 'nppdvjthqldpwncqszvftbrmjlhg',
        expected: 23,
      },
      {
        input: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
        expected: 29,
      },
      {
        input: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
        expected: 26,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
