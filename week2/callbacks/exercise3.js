const alertFun = function (argData) {
    alert(argData)
}

const logData = function (argData) {
    console.log(argData)
}

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

  displayData(alert, logData, "I like to party")
  
