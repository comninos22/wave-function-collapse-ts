import { Connection } from "../helpers/connection";
import { IPattern, Pattern } from "../helpers/pattern";
import { patternManager } from "../helpers/patternManager";
import { UnitMatrix } from "../helpers/unitMatrix";

export class GrassPattern extends Pattern {
    constructor() {
        super("grass.png",'grass')
    }
    setConnections(): void {
        let allPatterns = patternManager.getPatterns();
        this.connectsTo = [
            new Connection(
                allPatterns.grass,
                UnitMatrix.connect().everywhere()
            ),
            new Connection(
                allPatterns.light_forest,
                UnitMatrix.connect().everywhere()
            ),
        ]
    }

}
