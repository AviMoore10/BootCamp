const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (this.drinkRequirements[drinkType].beanRequirement <= coffeeShop.beans) {
        coffeeShop.beans -= this.drinkRequirements[drinkType].beanRequirement
      }
      else if (this.drinkRequirements[drinkType] == undefined) {
        console.log("Sorry, we don't make filtered")
      }
      else {
        console.log("Sorry, we're all out of beans")
      }
    }
  }
  
//   coffeeShop.makeDrink("latte"); 
//   console.log("There are "+coffeeShop.beans+" beans left")
//   coffeeShop.makeDrink("americano");
//   console.log("There are "+coffeeShop.beans+" beans left")
//   coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
//   coffeeShop.makeDrink("doubleShot");
//   console.log("There are "+coffeeShop.beans+" beans left")
//   coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

  coffeeShop.money = 100 
  coffeeShop.beanPrice = 5

  coffeeShop.buyBeans = function() {
    this.beans += (this.money/this.beanPrice)
  }

  coffeeShop.buyBeans()

  coffeeShop.drinkRequirements.latte = {beanRequirement: 10, price: 5}
  coffeeShop.drinkRequirements.americano = {beanRequirement: 5, price: 6}
  coffeeShop.drinkRequirements.doubleShot = {beanRequirement: 15, price: 7}
  coffeeShop.drinkRequirements.frenchPress = {beanRequirement: 12, price: 8}


  coffeeShop.buyDreank = function(drinkType) {
    this.makeDrink(drinkType)
    this.money += this.drinkRequirements[drinkType].price
  }

console.log(coffeeShop.beans) // Checking beans amount before buying a drink
console.log(coffeeShop.money) // Checking money amount before buying a drink

coffeeShop.buyDreank("latte")

console.log(coffeeShop.beans)
console.log(coffeeShop.money)
