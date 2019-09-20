const StringFormatter = function () {
    const capitalizeFirst = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase()
    }

    const skewerCase = function (str) {
        return str.split(" ").join("-")
    }

    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box
