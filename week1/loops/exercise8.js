const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for (let index in names) {
    people[index] = {name: names[index] , age: ages[index]}
}

for (let index in people) {
    console.log(people[index].name+" is "+people[index]["age"]+" years old")
}