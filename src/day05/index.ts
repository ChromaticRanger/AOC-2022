
/* Day 05 */

import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines: string[] = input.split( '\n' );
  const stack_input: string[] = [];
  const instructions: string[] = [];
  let filtered_stacks: string[][] = [];

  // get the stack input data
  let x = 0;
  while (lines[x] !== '') {
    stack_input.push(lines[x]);
    x++;
  }

  x++;
  while (x < lines.length) {
    instructions.push( lines[x] );
    x++;
  }

  // get the number of stacks from final line
  let stack_nos: string[] = stack_input[stack_input.length -1].split(' ');
  let stackNosStr = stack_nos.join('').trim();
  const nosOfStacks: number = Number(stackNosStr[stackNosStr.length - 1]);

  // create the needed number of arrays
  const stacks: string[][] = Array.from(Array(nosOfStacks), () => []);

  // remove the last line from stack_input
  stack_input.splice(stack_input.length - 1, 1);

  // allocate each crate to the correct stack
  for (let line of stack_input) {
    let line_chars = line.split('');
    let id = 0;
    while (line_chars.length > 0) {
      // splice the first 3 characters
      let crate = line_chars.splice(0, 3);
      if (crate[0] !== ' ') {
        stacks[id].push(...crate);
      }
      // remove leading space if there is one there
      if (line_chars.length > 0 && line_chars[0] === ' ') {
        line_chars.splice(0, 1);
      }
      id++;
    }
  }

  // remove all but letters from each stack
  for (let stack of stacks) {
    let filtered_stack = stack.filter(s => (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90))
    filtered_stacks.push(filtered_stack.reverse());
  }

  // go through instructions
  for (let instruction of instructions) {
    let parts: string[] = instruction.split(' ');
    const num: number = Number(parts[1]);
    const from: number = Number(parts[3]);
    const to: number = Number(parts[5]);
    let fromStack = filtered_stacks[from - 1];
    let toStack = filtered_stacks[to - 1];
    let grab = fromStack.splice(fromStack.length - num, num);
    let reversed = grab.reverse();
    toStack.push( ...reversed );
  }

  // create the result from top items on the stacks
  let tops = filtered_stacks.map( s => s.pop());
  let result = tops.join('');

  return result;

};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const lines: string[] = input.split( '\n' );
  const stack_input: string[] = [];
  const instructions: string[] = [];
  let filtered_stacks: string[][] = [];

  // get the stack input data
  let x = 0;
  while (lines[x] !== '') {
    stack_input.push(lines[x]);
    x++;
  }

  x++;
  while (x < lines.length) {
    instructions.push( lines[x] );
    x++;
  }

  // get the number of stacks from final line
  let stack_nos: string[] = stack_input[stack_input.length -1].split(' ');
  let stackNosStr = stack_nos.join('').trim();
  const nosOfStacks: number = Number(stackNosStr[stackNosStr.length - 1]);

  // create the needed number of arrays
  const stacks: string[][] = Array.from(Array(nosOfStacks), () => []);

  // remove the last line from stack_input
  stack_input.splice(stack_input.length - 1, 1);

  // allocate each crate to the correct stack
  for (let line of stack_input) {
    let line_chars = line.split('');
    let id = 0;
    while (line_chars.length > 0) {
      // splice the first 3 characters
      let crate = line_chars.splice(0, 3);
      if (crate[0] !== ' ') {
        stacks[id].push(...crate);
      }
      // remove leading space if there is one there
      if (line_chars.length > 0 && line_chars[0] === ' ') {
        line_chars.splice(0, 1);
      }
      id++;
    }
  }

  // remove all but letters from each stack
  for (let stack of stacks) {
    let filtered_stack = stack.filter(s => (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90))
    filtered_stacks.push(filtered_stack.reverse());
  }

  // go through instructions
  for (let instruction of instructions) {
    let parts: string[] = instruction.split(' ');
    const num: number = Number(parts[1]);
    const from: number = Number(parts[3]);
    const to: number = Number(parts[5]);
    let fromStack = filtered_stacks[from - 1];
    let toStack = filtered_stacks[to - 1];
    let grab = fromStack.splice(fromStack.length - num, num);
    toStack.push( ...grab );
  }

  // create the result from top items on the stacks
  let tops = filtered_stacks.map( s => s.pop());
  let result = tops.join('');

  return result;

};

run({
  part1: {
    tests: [
      {
        input: `[N] [G]                     [Q]    
[H] [B]         [B] [R]     [H]    
[S] [N]     [Q] [M] [T]     [Z]    
[J] [T]     [R] [V] [H]     [R] [S]
[F] [Q]     [W] [T] [V] [J] [V] [M]
[W] [P] [V] [S] [F] [B] [Q] [J] [H]
[T] [R] [Q] [B] [D] [D] [B] [N] [N]
[D] [H] [L] [N] [N] [M] [D] [D] [B]
 1   2   3   4   5   6   7   8   9 

move 3 from 1 to 2
move 1 from 7 to 1
move 1 from 6 to 5`,
        expected: "???",
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
  onlyTests: false
});
