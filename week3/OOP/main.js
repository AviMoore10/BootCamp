// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)

// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"


const someModule = function(){

    const _somethingPrivate = 3
    const exposePrivates = () => _somethingPrivate
  
    return  {exposePrivates: exposePrivates()}
  }
  
  const m = someModule()
console.log(m.exposePrivates()) //prints 3
