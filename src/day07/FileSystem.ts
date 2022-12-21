import Directory from "./Directory.js";

export default class FileSystem {
    private _directories: Map<string, Directory> = new Map<string, Directory>();
    private _currentDirectory: Directory;

    /**
     *
     * @param root - The name you want to call the root directory
     */
    constructor(root: string) {
        this._directories.set(root, new Directory(root));
        this._currentDirectory = new Directory(root);
        console.log(this._currentDirectory.Name);
    }

    /**
     * Move to the parent of the passed in directory
     * @param dir - The current directory
     */
    up = (dir: Directory) => {
        console.log( dir.Name );
    };

    /**
     *
     * @param dir - The directory to move from.
     * @param name - The name of the directory that is a child of 'dir' to move into.
     */
    into = (dir: Directory, name: string) => {
       console.log( name );
    };

}
