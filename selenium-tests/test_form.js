const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testForm() {
 let options = new chrome.Options()
        .headless() // run without GUI
        .addArguments('--no-sandbox')
        .addArguments('--disable-dev-shm-usage')
        .addArguments('--user-data-dir=/tmp/chrome-user-data-' + Date.now()); // unique temp dir
  
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  try {
    await driver.get('http://54.83.89.110/');
    await driver.findElement(By.name('name')).sendKeys('Alice');
    await driver.findElement(By.name('email')).sendKeys('alice@example.com');
    await driver.findElement(By.name('role')).sendKeys('Developer');
    await driver.findElement(By.id('submit')).click();

    await driver.wait(until.elementLocated(By.id('success')), 3000);
    console.log('✅ Test Success');
  } catch (e) {
    console.log('❌ Test Failed', e);
  } finally {
    await driver.quit();
  }
})();
