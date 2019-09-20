const addButton = document.getElementById("button")
addButton.onclick = function () {
    const newDiv = document.createElement("div")
    newDiv.innerHTML = document.getElementById("input").value
    newDiv.setAttribute("id", "newdiv")
    newDiv.style.color = "purple"
    document.body.appendChild(newDiv)
}
