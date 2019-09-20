const isEven = function(number) {
    if (number % 2 == 0) {
        return true
    } 
    else {
        return false
    }
}

const oddNumbers = function(arr) {
    let answer
    for (let value of arr) {
        answer = isEven(value)
        if (answer == false) {
            console.log(value)
        }
    }
}

const arr = [1, 2, 3, 4, 5, 6]
oddNumbers(arr)