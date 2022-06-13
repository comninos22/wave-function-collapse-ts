import { Connection } from "../helpers/connection"
import { IPattern, Pattern } from "../helpers/pattern"
import { UnitMatrix } from "../helpers/unitMatrix"

export class NullPattern extends Pattern implements IPattern {
    constructor() {
        super("", 'null')
        this.connectsTo = [

        ]
    }
    setConnections() {
    }
}
