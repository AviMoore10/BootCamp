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

  const getSummary = function(person) {
    let capName = people_info[person].name.toUpperCase()
    let capProfession = people_info[person].profession.toUpperCase()
    let capCountry= people_info[person].country.toUpperCase()
    let capCity = people_info[person].city.toUpperCase()
    let pAge
    if (people_info[person].age < 21) {
        pAge = "Underage"
    }
    else if (people_info[person].age > 55) {
        pAge = "55+"
    }
    else {
        pAge = people_info[person].age
    }
    let capPhrase = people_info[person].catchphrase.charAt(0).toUpperCase()
    let restPhrase =  (people_info[0].catchphrase).substring(1, people_info[0].catchphrase.length)
    
    let summary = "name: "+capName+" profession: "+capProfession+" living place: "+capCountry+", "+capCity+" ,age: "+pAge+" ,and my phrase: "+capPhrase+restPhrase //modify the summary string with the person parameterreturn summary
    return summary
  }

let personNum = prompt("Please enter person number between 1-3")
while (personNum < 1 || personNum > 3 || isNaN(personNum)) {
    personNum = prompt("Try again - Please enter person number between 1-3")
}

const personSummery = getSummary(personNum)

console.log(personSummery)
