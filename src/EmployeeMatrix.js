/* Write your code below */
const Matrix = require('./Matrix')

class EmployeeMatrix extends Matrix {
    constructor(row, columns) {
        super(row, columns)
    }

    //ex 3
    loadData(salaryData){
        const newMatrix = []
        salaryData.forEach(row => {
            newMatrix.push([row._id, row.name, row.department, row.salary])
        })

        this.matrix = newMatrix
    }

    //ex 4
    getEmployees(department){
        const depWorkers = []

        for (let i = 0; i< this.matrix.length; i++){
            if(department === this.matrix[i][2]){
                depWorkers.push(this.matrix[i][1])
            }
        }

        return depWorkers
    }

    //ex 5
    getTotalSalary(department){
        let sum = 0

        for (let i = 0; i< this.matrix.length; i++){
            if(department === this.matrix[i][2]){
                sum += this.matrix[i][3]
            }
        }

        return sum
    }

    //ex 6
    findRichest(){
        let richest = 0;
        let richestIndex = 0;

        for (let i = 0; i< this.matrix.length; i++){
            if(richest < this.matrix[i][3]){
                richest = this.matrix[i][3]
                richestIndex = i
            }
        }

        return this.matrix[richestIndex][1]
    }
}



//You can paste the code from the lesson below to test your solution
let data = [
        { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
        { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
        { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
        { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
        { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
        { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()
    
m.loadData(data)
m.print()

console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

console.log(m.findRichest()) //prints Anisha


/* Do not remove the exports below */
module.exports = EmployeeMatrix