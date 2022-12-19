import run from "aocrunner";

class Directory {
  /**
   * Child directories of this directory
   * @private
   */
  private _dirs: Directory[] = null;
  /**
   * Files in this directory
   * @private
   */
  private _files: File[] = null;
  /**
   * The size of this directory - all the way down
   * @private
   */
  private _size: number = 0;

  /**
   * Directory Constructor
   */
  constructor() { }
}

class File {
  /**
   * The size of this file
   * @private
   */
  private _size: number = 0;

  /**
   * File Constructor
   * @param fileSize
   */
  constructor(fileSize: number) {
    this._size = fileSize;
  }
}

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const test = new Directory();
  const lines: string[] = input.split( '\n' );
  console.log( lines[0] )
  console.log( lines[1] );

  return 95437;
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
        $ cd /
        $ ls
        dir a
        14848514 b.txt
        8504156 c.dat
        dir d
        $ cd a
        $ ls
        dir e
        29116 f
        2557 g
        62596 h.lst
        $ cd e
        $ ls
        584 i
        $ cd ..
        $ cd ..
        $ cd d
        $ ls
        4060174 j
        8033020 d.log
        5626152 d.ext
        7214296 k`,
        expected: 95437,
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
  trimTestInputs: true,
  onlyTests: true,
});
