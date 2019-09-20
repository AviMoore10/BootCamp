const isEven = function(number) {
    if (number % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

const answer = isEven(prompt("type any number"))
console.log(answer)