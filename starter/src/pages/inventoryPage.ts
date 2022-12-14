import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";

  export class Login extends BasePage {
  loginBtn: By = By.xpath('//*[@id="login-button"]')
  username: By = By.css('#user-name')
  password: By = By.css('#password')
  loginCredentials: By = By.xpath('//*[@id="login_credentials"]')
  slBackpack: By = By.xpath('//*[@id="item_4_title_link"]/div')
  bikeLight: By = By.xpath('//*[@id="item_0_title_link"]/div')
  slbAddCart: By = By.xpath ('//*[@id="add-to-cart-sauce-labs-backpack"]')
  blAddCart: By = By.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]')
  teeAddCart: By = By.xpath('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]')
  backBtn: By = By.xpath('//*[@id="back-to-products"]')
  cartBtn: By = By.xpath('//*[@id="shopping_cart_container"]/a')
  
  constructor() {
    super({ url: "https://magento.softwaretestingboard.com/" });
  }
}