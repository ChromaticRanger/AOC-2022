import File from "./AFile.js";
export default class Directory {
    private readonly _name: string = '';
    private _dirs: Directory[] = [];
    /*
     * Files in this directory
     * @private
     */
    private _files: File[] = [];
    private _size: number = 0;

    /**
     * Directory Constructor
     */
    constructor( name: string ) {
        this._name = name;
    }

    /**
     * Accessor for name field
     */
    get Name() {
        return this._name;
    }
}
