let obj = {}
let arr = []

$(".generator").on("click", function() {
    console.log("Processor ID: " + $(this).closest(".processor").attr("id"))
    arr.push(obj["Computer's data-id:"] = $(this).closest(".computer").data().id)
    console.log(arr)
    console.log($(this).closest(".computer").find(".BUS").text())
})

$(".validator").on("click", function() {
    console.log("Processor ID: " + $(this).closest(".computer").find(".processor").find(".generator").text())
    console.log("MB: " + $(this).closest(".computer").find(".MB").text())
    let childArr = []
    childArr.push($(this).closest(".computer").find(".processor").find(".QR:first-child").text())
    childArr.push($(this).closest(".computer").find(".processor").find(".QR:nth-child(2)").text())
    console.log("Both QR's: " + childArr[0] + " " + childArr[1])
})