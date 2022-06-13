import { IPattern } from "./pattern";
import { IUnitMatrix } from "./unitMatrix";


export interface IConnection {
    pattern: IPattern;
    at: IUnitMatrix;
}

export class Connection implements IConnection {
    pattern: IPattern;
    at: IUnitMatrix;
    constructor(pattern: IPattern, at: IUnitMatrix) {
        this.pattern = pattern;
        this.at = at;
    }
}