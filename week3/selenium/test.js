const {Builder, By, Key} = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
chrome_options.add_argument("--headless")

const driver = new Builder().forBrowser('chrome').build();

async function example() {
    await driver.get('https://www.google.com/');
    let googleQuestion = await driver.findElement(By.name('q'))
    await googleQuestion.sendKeys("who am i?", Key.RETURN)
    let element = await driver.findElement(By.className("credits")).getText();

    setTimeout(()=>{
        driver.quit()
      }, 2000)
}

example()
