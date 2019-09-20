const arr = [22, 33, 44]

let sum = 0
let counter = 0
for (let value of arr) {
    sum += value
    counter++
}

console.log(sum)
let avg = sum/counter
console.log(avg)