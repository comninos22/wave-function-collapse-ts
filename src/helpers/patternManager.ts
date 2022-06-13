import { IPattern } from "./pattern";
import { GrassPattern } from "../patterns/grassPattern";
import { HeavyForestPattern } from "../patterns/heavyForrest";
import { LightForestPattern } from "../patterns/lightForrestPattern";
import { NullPattern } from "../patterns/nullPattern";
interface IPatternManager {
    patterns: IPatternDictionary;
}
class PatternManager implements IPatternManager {
    patterns: IPatternDictionary
    constructor() {
        this.patterns = {
            grass: new GrassPattern,
            light_forest: new LightForestPattern,
            heavy_forest: new HeavyForestPattern,
            'null': new NullPattern
        }

    }
    public startConnections() {
        for (let prop in this.patterns) {
            this.patterns[prop].setConnections()
        }
    }
    public getPatterns() {
        return this.patterns;
    }
}
let pm = new PatternManager;
export const patternManager = pm;
export type IPatternDictionary = {
    [alias in Aliases]: IPattern;
};
export type Aliases = "grass" | "light_forest" | "heavy_forest" | "null";
