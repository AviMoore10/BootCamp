for (let i = 1 ; i <= 6 ; i++) {
    const newSquare = document.createElement("span")
    newSquare.setAttribute("class", "square")
    document.getElementById("container").appendChild(newSquare)
    console.log(i)
}