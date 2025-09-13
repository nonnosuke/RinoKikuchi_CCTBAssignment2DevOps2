const {Builder, By, until} = require('selenium-webdriver');

(async function testValidation() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://54.83.89.110/');
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
