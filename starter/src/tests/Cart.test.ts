import {
  Builder,
  By,
  Capabilities,
  WebDriver,
  until,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

test("User wants to remove items from my basket from the Cart page.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  await driver.click(driver.removeBackpackBtn);
  await driver.click(driver.removeLightBtn);
  expect(value).toBe(driver.url);
});

test("remove items from my basket from the Inventory page.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.removeBackpackBtn);
  await driver.click(driver.removeLightBtn);
  expect(value).toBe(driver.url);
});

test("User wants to verify that the sum of money I need to pay for the products I added to my basket equals to the sum of money these products cost plus some taxes.", async () => {
  await driver.get("ttps://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  await driver.click(driver.checkoutBtn);
  await driver.findElement(driver.fName).sendKeys("Mowlid ");
  await driver.findElement(driver.lName).sendKeys("Omar");
  await driver.findElement(driver.zipcode).sendKeys("55344");
  await driver.click(driver.continueBtn);
  expect(total).toBe("$49.68");
});