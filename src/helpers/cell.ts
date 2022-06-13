import { GrassPattern } from "../patterns/grassPattern";
import { NullPattern } from "../patterns/nullPattern";
import { IPattern, Pattern, } from "./pattern";
import { Aliases, IPatternDictionary, patternManager } from "./patternManager";
import { UnitMatrix } from "./unitMatrix";

export interface ICell {
    x: number;
    y: number;
    pattern: IPattern;
    allPatterns: IPatternDictionary;
    neighbors: Array<ICell>
    choosePattern: (p: IPattern) => void;
    setNeighboors: (neighbors: ICell[]) => void
}

export class Cell implements ICell {
    x: number;
    y: number;
    allPatterns: IPatternDictionary = patternManager.getPatterns();
    pattern: IPattern = this.allPatterns.null;
    availablePatterns: AvailabilityMap = {};

    neighbors: Array<ICell> = [];
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        for (let alias in this.allPatterns) {
            this.availablePatterns[alias as Aliases] = { pattern: this.allPatterns[alias], available: true }
        }
    }
    setNeighboors(neighboors: Array<ICell>) {
        this.neighbors = neighboors;
    }

    choosePattern(p: IPattern) {
        for (let neighbor of this.neighbors) {
            if (neighbor.pattern == this.allPatterns.null)
                break;
            for (let connection of neighbor.pattern.connectsTo) {
                if (p.alias == connection.pattern.alias) {
                    
                }
            }
        }
        if (this.availablePatterns[p.alias]!.available)
            this.pattern = this.availablePatterns[p.alias]!.pattern;
        else
            throw Error("Pattern not available")
    };

}
interface ICoords {
    x: number,
    y: number
}
type AvailabilityMap = {
    [alias in Aliases]?: { pattern: IPattern, available: Boolean }
}