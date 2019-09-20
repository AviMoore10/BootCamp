//DO NOT REMOVE 
const Manager = require('./Manager')
const Cleaner = require('./Cleaner')
//===================================

class Office {

    //Write your code here...
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireManager(name) {
        let mana = new Manager(name)
        this.managers.push(mana)
    }

    hireCleaner(name) {
        let cle = new Cleaner(name)
        this.cleaners.push(cle)
    }

    startWorkDay() {
        for(let v of this.managers) {
            v.askEmployeesToWork(this)
        }
        for(let i of this.cleaners) {
            i.clean()
        }
    }

}







//DO NOT REMOVE =====================
module.exports = Office