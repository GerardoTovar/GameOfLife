const Board = require('./board.js');

test('Prueba del metodo showBoard', () =>{
    const rows = Math.floor(Math.random() * 9) + 1;
    const columns = Math.floor(Math.random() * 9) + 1;
    const board = new Board(rows, columns);
    expect(typeof board.showBoard()).toBe("string");
    expect(board.showBoard().match(/(0|1)/g).length).toBe(rows * columns);
})

/*test('Prueba del metodo findNeighbors', () =>{
    const board = new Board(10, 10)
    expect(board.findNeighbors(5, 2)).toBeLessThan(9)
})*/