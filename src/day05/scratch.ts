/* Day 05 */

import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
    const input = parseInput(rawInput);
    const lines: string[] = input.split( '\n' );
    const stacks: string[] = [];
    const allStacks: string[][] = [];
    const instructions: string[] = [];

    for (let x = 0; x < 8; x++){
        stacks.push( lines[x] );
    }

    for (let x = 10; x < lines.length; x++) {
        instructions.push( lines[x] );
    }

    let s1 = stacks[7][1] + stacks[6][1] + stacks[5][1] + stacks[4][1] + stacks[3][1] + stacks[2][1] + stacks[1][1] + stacks[0][1];
    let s2 = stacks[7][5] + stacks[6][5] + stacks[5][5] + stacks[4][5] + stacks[3][5] + stacks[2][5] + stacks[1][5] + stacks[0][5];
    let s3 = stacks[7][9] + stacks[6][9] + stacks[5][9];
    let s4 = stacks[7][13] + stacks[6][13] + stacks[5][13] + stacks[4][13] + stacks[3][13] + stacks[2][13];
    let s5 = stacks[7][17] + stacks[6][17] + stacks[5][17] + stacks[4][17] + stacks[3][17] + stacks[2][17] + stacks[1][17];
    let s6 = stacks[7][21] + stacks[6][21] + stacks[5][21] + stacks[4][21] + stacks[3][21] + stacks[2][21] + stacks[1][21];
    let s7 = stacks[7][25] + stacks[6][25] + stacks[5][25] + stacks[4][25];
    let s8 = stacks[7][29] + stacks[6][29] + stacks[5][29] + stacks[4][29] + stacks[3][29] + stacks[2][29] + stacks[1][29] + stacks[0][29];
    let s9 = stacks[7][33] + stacks[6][33] + stacks[5][33] + stacks[4][33] + stacks[3][33];
    allStacks.push(s1.toString().trim().split(''));
    allStacks.push(s2.toString().trim().split(''));
    allStacks.push(s3.toString().trim().split(''));
    allStacks.push(s4.toString().trim().split(''));
    allStacks.push(s5.toString().trim().split(''));
    allStacks.push(s6.toString().trim().split(''));
    allStacks.push(s7.toString().trim().split(''));
    allStacks.push(s8.toString().trim().split(''));
    allStacks.push(s9.toString().trim().split(''));

    // go through instructions
    for (let instruction of instructions) {
        let parts: string[] = instruction.split(' ');
        const num: number = Number(parts[1]);
        const from: number = Number(parts[3]);
        const to: number = Number(parts[5]);
        let fromStack = allStacks[from - 1];
        let toStack = allStacks[to - 1];
        let grab = fromStack.splice(fromStack.length - num, fromStack.length - 1);
        let reversed = grab.reverse();
        toStack.push( ...reversed );
    }

    let result =
        allStacks[0][allStacks[0].length - 1] +
        allStacks[1][allStacks[1].length - 1] +
        allStacks[2][allStacks[2].length - 1] +
        allStacks[3][allStacks[3].length - 1] +
        allStacks[4][allStacks[4].length - 1] +
        allStacks[5][allStacks[5].length - 1] +
        allStacks[6][allStacks[6].length - 1] +
        allStacks[7][allStacks[7].length - 1] +
        allStacks[8][allStacks[8].length - 1];

    return result;

};

const part2 = (rawInput: string) => {
    const input = parseInput(rawInput);

    return;
};

run({
    part1: {
        tests: [
            {
                input: `
[Z] [M] [P]
 1   2   3
 
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`,
                expected: "CMZ",
            },
        ],
        solution: part1,
    },
    part2: {
        tests: [
            // {
            //   input: ``,
            //   expected: "",
            // },
        ],
        solution: part2,
    },
    trimTestInputs: false,
    onlyTests: true
});
