const checkExists = function(arr, num) {
    for (let value of arr) {
        if (value == num) {
            return true
        }
    }
    return false
}

const check1 = checkExists([1, 2, 3], 2)
console.log(check1)
const check2 = checkExists([1, 2, 3], 5)
console.log(check2)