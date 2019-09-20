const checkReservation = function () {
    if (document.getElementById("input").value === "Bob") {
        const newElem = document.createElement("div")
        newElem.innerHTML = "Welcome Bob"
        document.getElementById("parent").appendChild(newElem)
    } 
    else if (document.getElementById("input").value === "Ted") {
        const newElem = document.createElement("div")
        newElem.innerHTML = "Welcome Ted"
        document.getElementById("parent").appendChild(newElem)
    }
    else {
        const newElem = document.createElement("div")
        newElem.innerHTML = "You don't seem to have reservation, " + document.getElementById("input").value
        document.getElementById("parent").appendChild(newElem)
    }
}