//DO NOT REMOVE
const Employee = require('./Employee')
//===================================



class Manager {

    //Write your code here...
    constructor(name) {
        this.name = name
        this.employees = []
    }

    hireEmployee(name) {
        let emp = new Employee(name)
        this.employees.push(emp)
    }

    askEmployeesToWork(Office) {
        for (let i of this.employees) {
            i.work(Office)
        }
    }
}







//DO NOT REMOVE =====================
module.exports = Manager