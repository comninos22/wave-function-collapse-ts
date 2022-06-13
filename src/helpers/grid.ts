import { Cell, ICell } from "./cell";

interface IGrid {
    length: number;
    height: number;
    cells: ICell[][];
    propagateToCells: () => void;
    generateGrid: () => void
}
export class Grid implements IGrid {
    length!: number;
    height!: number;
    cells: ICell[][] = [];
    constructor(length: number, height: number) {
        this.length = length;
        this.height = height;
    }
    propagateToCells = () => { };
    generateGrid = () => {
        for (let i = 0; i < this.length; i++) {
            this.cells[i] = []
            for (let j = 0; j < this.height; j++) {
                this.cells[i][j] = new Cell(i, j);
            }
        }
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.height; j++) {
                let cellNeighbors = [];
                i - 1 >= 0 &&
                    cellNeighbors.push(this.cells[i - 1][j])
                j - 1 >= 0 &&
                    cellNeighbors.push(this.cells[1][j - 1])
                i + 1 < this.length &&
                    cellNeighbors.push(this.cells[i + 1][j])
                j + 1 < this.length &&
                    cellNeighbors.push(this.cells[i][j + 1])
                this.cells[i][j].setNeighboors(cellNeighbors);
            }
        }
    };

}