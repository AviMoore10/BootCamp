const upArrow = function() {
    const block = document.getElementById("block")
    let top = parseInt(block.style.top) || 0
    top -= 15
    block.style.top = top + "px"
}

const leftArrow = function() {
    const block = document.getElementById("block")
    let left = parseInt(block.style.left) || 0
    left -= 15
    block.style.left = left + "px"
}

const rightArrow = function() {
    const block = document.getElementById("block")
    let right = parseInt(block.style.left) || 0
    right += 15
    block.style.left = right + "px"
}

const downArrow = function() {
    const block = document.getElementById("block")
    let bottom = parseInt(block.style.top) || 0
    bottom += 15
    block.style.top = bottom + "px"
}