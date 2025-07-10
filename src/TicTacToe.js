const Matrix = require("./Matrix")

class TicTacToe extends Matrix {
  //ex 7
  constructor(row, columns) {
    super(row, columns)
  }

  loadBoard() {
    let newMatrix = []
    const numRows = 3
    const numColumns = 3

    for (let r = 0; r < numRows; r++) {
      newMatrix.push([])
      for (let c = 0; c < numColumns; c++) {
        newMatrix[r].push(".")
      }
    }

    this.matrix = newMatrix
  }

  //ex 8
  play(rowNum, colNum, player) {
    const sign = player === 1 ? "x" : "o"

    this.alter(rowNum, colNum, sign)

    //ex 9
    let col = colNum
    let count = 0

    for (let r = 0; r < this.matrix.length; r++) {
      if (this.matrix[r][col] === sign) {
        count++
      }
    }

    if (count === 3) {
      console.log(`Congratulations Player ${player}`)

    }
  }
}

let board = new TicTacToe()
board.loadBoard()
    
board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1)

