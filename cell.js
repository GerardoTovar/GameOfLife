class Cell {
    constructor(){
        this.status = this.randomStatus();
        this.neighbors = 0;
    }

    randomStatus(){
        return Math.random() > 0.6 ? 1 : 0;
    }

    getStatus(){
        return this.status;
    }

    getNeighbors(){
        return this.neighbors;
    }

    setStatus(newStatus){
        this.status = newStatus;
    }

    setNeighbors(newNeighbors){
        this.neighbors = newNeighbors;
    }
}
module.exports = Cell;