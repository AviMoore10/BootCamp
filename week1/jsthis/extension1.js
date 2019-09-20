const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      if (this.drinkRequirements[drinkType] <= coffeeShop.beans) {
        coffeeShop.beans -= this.drinkRequirements[drinkType]
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
  console.log(coffeeShop.beans)