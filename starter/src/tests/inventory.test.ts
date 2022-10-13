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

test("User wants to access the inventory page.", async () => {
  await driver.get("https://www.saucedemo.com/");
  await driver.findElement(driver.username).sendKeys("standard_user")  
  await driver.findElement(driver.password).sendKeys("secret_sauce")
  await driver.click(driver.loginBtn)
  expect(value).toBe(driver.'https://www.saucedemo.com/inventory.html');
});

test("User wants to read the full description of Sauce Labs Backpack and Sauce Labs Bike Light products and add them to my basket from the products pages.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.slBackpack);
  await driver.click(driver.slbAddCart);
  await driver.click(driver.backBtn);
  await driver.click(driver.bikeLight);
  await driver.click(driver.blAddCart);
  await driver.click(driver.backBtn);
  expect(value).toBe(driver.url);
});

test("User wants to be able to add a product from an inventory page by clicking to the ADD TO CART button of one of the products.", async () => {
  await driver.get("https://www.saucedemo.com/inventory.html");
  await driver.click(driver.cartBtn);
  expect(value).toBeTruthy();
});

test("User wants to check if  basket contains two products.", async () => {
    await driver.get("https://www.saucedemo.com/inventory.html");
    await driver.click(driver.teeAddCart);
    expect(value).toBeTruthy();
  });

afterAll(async () => {
    await driver.quit()
  });