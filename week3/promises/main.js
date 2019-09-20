//========= Boilerplate =========
const { Builder, By, Key } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();

//========= Interesting code =========
function example() {
    driver.get('https://www.google.com/');
    let googleInput = driver.findElement(By.name('q'))
    googleInput.then(function(){

    
// console.log(googleInput)
    let sent = googleInput.sendKeys("who am i?", Key.RETURN)

    sent.then(function(){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa" + sent)
    })
    })
    setTimeout(function () {
        driver.quit()
    }, 1000)
}

example()
