const Board = require('./board.js');

const board = new Board(20, 20);

const repeatCicle = () => {
    console.clear();
    console.log(board.showBoard());
    board.nextGeneration();
}

setInterval(repeatCicle, 1000);