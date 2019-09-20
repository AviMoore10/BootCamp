const returnTime = function (time) {
    alert('The current time is: ' + time)
  }

const getTime = function (arg) {
    const time = new Date()
    arg(time)
}
  
  getTime(returnTime)

