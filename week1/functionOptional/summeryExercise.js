people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]

  /* This function get's a string value element form one of the key-values in the  objects located at the people_info array
  and returns the strin capitalized. */
  const capitalize = function(person) {
    let cap = person[0].toUpperCase()
    let rest = person.slice(1)
    return cap + rest
  }

  /* This function get's number parameter. If the parameter smaller then 21 she returns "underage", if it's bigger then 55
  she returns "55+", else she returns the parameter as is  */
  const getAge = function(person) {
    if (person < 21) {
        return "Underage"
    }
    else if (person > 55) {
        return "55+"
    }
    else {
        return person
    }
  }

  /* This function gets object array value from the people_info array, capitalize strings objects values - helped other function
  and check ,using other function, the age object value to print accordinglly. Finally , using new variables she created, 
  she prints arranged summary*/
  const getSummary = function(getThePerson){
    const capName = capitalize(getThePerson.name)
    const upAge = getAge(getThePerson.age)
    const upProfession = capitalize(getThePerson.profession)
    const capCountry = capitalize(getThePerson.country)
    const capCity = capitalize(getThePerson.city)
    const capPhrase = capitalize(getThePerson.catchphrase)
    let summary = capName +" is an "+ upAge +" "+ upProfession+ " from "+ capCountry +", "+capCity +". "+ capName + " loves to say: " + capPhrase //modify the summary string with the person parameterreturn summary
    console.log(summary)
  }

let personNum = prompt("Please enter person number between 1-3")
while (personNum < 0 || personNum > 3 || isNaN(personNum)) {
    personNum = prompt("Try again - Please enter person number between 1-3")
}

getSummary(people_info[personNum])
  