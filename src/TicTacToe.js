const Matrix = require("./Matrix")

class TicTacToe extends Matrix {
  //ex 7
  constructor(row, columns) {
    super(row, columns)
    this.whoNext = 1
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
    if (this.whoNext === player) {
      const sign = player === 1 ? "x" : "o"

      //extension 1
      if (this.matrix[rowNum][colNum] === ".") {
        this.alter(rowNum, colNum, sign)
      } else {
        console.log("error")
      }

      //extension 2
      this.whoNext = (player % 2) + 1

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

        //extension 3
        this.loadBoard()
        this.whoNext = 1
      }
    } else {
      console.log("error whoNext")
    }
  }
}

let board = new TicTacToe(3, 3)
board.loadBoard()

board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1)
