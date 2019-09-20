//DO NOT REMOVE
const Document = require('./Document')
//===================================


class Employee {

    //Write your code here...
    constructor(name) {
        this.name = name
    }

    work(office) {
        for (let i=0 ; i < 10 ; i++) {
            let doc = new Document(this.name)
            office.documents.push(doc)
        }
    }

    

}








//DO NOT REMOVE =====================
module.exports = Employee