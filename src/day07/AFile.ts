export default class File {
    private _name: string = '';
    private _size: number = 0;

    /**
     * File Constructor
     * @param fileSize - the size of this file
     */
    constructor(name: string, fileSize: number) {
        this._name = name;
        this._size = fileSize;
    }
}

