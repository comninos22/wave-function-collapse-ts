import { Connection } from "../helpers/connection"
import { IPattern, Pattern } from "../helpers/pattern"
import { patternManager } from "../helpers/patternManager";
import { UnitMatrix } from "../helpers/unitMatrix"

export class LightForestPattern extends Pattern implements IPattern {
    constructor() {
        super("light-forest.png",'light_forest')

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
            new Connection(
                allPatterns.heavy_forest,
                UnitMatrix.connect().everywhere()
            )
        ]
    }
}
