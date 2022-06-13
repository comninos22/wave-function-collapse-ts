import { Grid } from "./helpers/grid"
import { patternManager } from "./helpers/patternManager";
patternManager.startConnections();
console.log("hi")
let grid = new Grid(10, 10)
grid.generateGrid();
console.log(grid);