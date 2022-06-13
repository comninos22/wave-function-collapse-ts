
export interface IUnitMatrix {
    north: boolean;
    west: boolean;
    south: boolean;
    east: boolean;
    atSouth: Function;
    atEast: Function;
    atWest: Function;
    atNorth: Function;
    reset: Function;
}
export class UnitMatrix implements IUnitMatrix {

    north: boolean = false;
    west: boolean = false;
    south: boolean = false;
    east: boolean = false;
    constructor() { }
    static connect() {
        return new UnitMatrix;
    }
    everywhere = () => {
        return this.atEast().atNorth().atSouth().atWest();
    }
    atSouth = () => {
        this.south = true;
        return this;
    }
    atEast = () => {
        this.east = true;
        return this;
    }
    atWest = () => {
        this.west = true;
        return this;
    }
    atNorth = () => {
        this.north = true;
        return this;
    }
    reset = () => {
        return new UnitMatrix;
    }
    static check(u1: UnitMatrix, u2: UnitMatrix) {
        if ((u1.east && u2.west)    || (u1.west && u2.east)) return true;
        if ((u1.north && u2.south)  || (u1.south && u2.north)) return true;
        return false;
    }
}