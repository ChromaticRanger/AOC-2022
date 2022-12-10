import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const calories: string[] = input.split( '\n' );
  let blockSum: number = 0;
  let cals: number[] = [];

  for ( let x = 0; x < calories.length; x++ ) {
    if ( calories[ x ] !== '' ) {
      blockSum += Number( calories[ x ] );
    }

    if ( calories[ x ] === '' ) {
      cals.push( blockSum );
      blockSum = 0;
    }

  }
  cals.push( blockSum );

  cals.sort( (a, b) => b - a );

  console.log ( cals[ cals.length - 1 ] );
  return cals[ cals.length - 1 ];
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const calories: string[] = input.split( '\n' );
  let blockSum: number = 0;
  let cals: number[] = [];

  for ( let x = 0; x < calories.length; x++ ) {
    if ( calories[ x ] !== '' ) {
      blockSum += Number( calories[ x ] );
    }

    if ( calories[ x ] === '' ) {
      cals.push( blockSum );
      blockSum = 0;
    }

  }
  cals.push( blockSum );

  cals.sort( (a, b) => b - a );

  return cals[ 0 ] + cals[ 1 ] + cals[ 2 ];
};

run({
  part1: {
    tests: [
      {
        input: `
          9000
          2000
          
          3000
          4000
          
          15

          3000
          12
          2000
          6000
          4500
        `,
        expected: 15512,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          9000
          2000
          
          3000
          4000
          
          15

          3000
          12
          2000
          6000
          4500
        `,
        expected: "",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
