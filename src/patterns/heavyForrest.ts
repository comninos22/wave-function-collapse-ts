import { Connection } from "../helpers/connection"
import { IPattern, Pattern } from "../helpers/pattern"
import { patternManager } from "../helpers/patternManager";
import { UnitMatrix } from "../helpers/unitMatrix"

export class HeavyForestPattern extends Pattern implements IPattern {
    constructor() {
        super("heavy-forest.png", 'heavy_forest')
    }
    setConnections(): void {
        let allPatterns = patternManager.getPatterns();
        this.connectsTo = [
            new Connection(
                allPatterns.heavy_forest,
                UnitMatrix.connect().everywhere()
            ),
            new Connection(
                allPatterns.light_forest,
                UnitMatrix.connect().everywhere()
            ),
        ]
    }
}
