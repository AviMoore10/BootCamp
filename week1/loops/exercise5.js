const arr = []

for (let i = 1 ; i <= 100 ; i++) {
    arr[i] = i
    console.log(arr[i])
}

for (let value of arr) {
    if (value % 2 != 0) {
        console.log(value)
    }
}