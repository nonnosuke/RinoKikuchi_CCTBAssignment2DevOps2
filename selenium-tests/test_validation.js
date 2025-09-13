const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testValidation() {
// Configure Chrome options for EC2
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--user-data-dir=/tmp/chrome-user-data-' + Date.now());
  
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
  try {
    await driver.get('http://54.161.3.212/');
    await driver.findElement(By.name('name')).sendKeys('Alice');
    // Leave email empty
    await driver.findElement(By.name('role')).sendKeys('Developer');
    await driver.findElement(By.id('submit')).click();

    await driver.wait(until.elementLocated(By.id('error')), 3000);
    console.log('✅ Validation Test Passed (error shown)');
  } catch (e) {
    console.log('❌ Validation Test Failed', e);
  } finally {
    await driver.quit();
  }
})();
