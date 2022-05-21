const Cell = require("./cell.js");

class Board {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        this.renderedBoard = new Array(this.alto).fill(new Array(this.ancho).fill('')).map(fila => fila.map(_ => new Cell));
    }

    showBoard() {
        return this.renderedBoard.map(row => row.map(cell => cell.getStatus()).join(' ')).join('\n');
    }

    findNeighbors() {
        this.renderedBoard.forEach((row, indexRow) => row.forEach((cell, indexColumn) => {
            let aliveNeighbors = 0;
            let movesX = [-1, 0, 1, -1, 1, -1, 0, 1];
            let movesY = [-1, -1, -1, 0, 0, 1, 1, 1];
            for (let i = 0; i < movesX.length; i++) {
                const mox = indexRow + movesX[i];
                const moy = indexColumn + movesY[i];
                if (mox >= 0 && moy >= 0) {
                    if(mox < this.ancho && moy < this.alto){
                        aliveNeighbors += this.renderedBoard[mox][moy].getStatus(); 
                    }
                }
            }
            cell.setNeighbors(aliveNeighbors);
        }));
    }

    nextGeneration() {
        this.findNeighbors();
        this.renderedBoard.forEach((row, indexRow) => row.forEach((cell, indexColumn) => { 
            if(cell.getStatus() === 0){
                if(cell.getNeighbors() === 3){
                    cell.setStatus(1);
                }
            }else{
                if(cell.getNeighbors() === 2 || cell.getNeighbors() === 3){
                    cell.setStatus(1)
                }else{
                    cell.setStatus(0)
                }
            }
        }));
    }
}

module.exports = Board;