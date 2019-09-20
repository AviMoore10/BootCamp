const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const driver = new Builder().forBrowser('chrome').build();

async function exercise1() {
    await driver.get('file:///C:/Users/Avi/bootCamp/week3/selenium/exercise1.html');
    await driver.findElement(By.id("button")).click()
    const input = await driver.findElement(By.id("input")).getAttribute("value")
    const divNew = await driver.findElement(By.id("newdiv")).getText()
    if (input == divNew) {
        await alert("Great!")
    }
    else {
        await alert("not equal")
    }
    setTimeout(()=>{
        driver.quit()
      }, 2000)
}

exercise1()
