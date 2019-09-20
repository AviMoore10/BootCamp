// const validator = require('validator');

// console.log(validator.isEmail("shoobert@dylan"))

// console.log(validator.isMobilePhone("786-329-9958"))

// let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
// console.log(validator.blacklist("I'M SO EXCITED!!!~!", ["!", "?", ".", "@", "~", ",", "'"]))



const faker = require('faker');


const makeHuman = function(number) {
    for (let i = 0 ; i < number ; i++) {
    var randomName = faker.name.findName()
    console.log(randomName)
    var randomEmail = faker.internet.email()
    console.log(randomEmail)
    var randomCard = faker.company.companyName()
    console.log(randomCard)
    }
}


 //prints the following:
// Viola, https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg, Donnelly - Feil
// Isaias, https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg, Wilkinson, Hickle and Hoppe

makeHuman(2)