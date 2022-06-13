import { Connection, IConnection } from "./connection";
import { IImage } from "./image";
import { Aliases, patternManager } from "./patternManager";
import { Utils } from "./utils"

export interface IPattern {
    id: string
    alias: Aliases
    texture: IImage
    connectsTo: Array<IConnection>
    setConnections(): void
}
export abstract class Pattern {
    id: string;
    alias: Aliases;
    texture: IImage;
    connectsTo: Array<IConnection>;
    constructor(texture: IImage, alias: Aliases) {
        this.alias = alias
        this.id = Utils.randID(20);
        this.texture = texture;
        this.connectsTo = []
    }


}


