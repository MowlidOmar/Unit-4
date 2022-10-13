import { By } from 'selenium-webdriver';

 const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

export class loginPage {

    loginBtn: By = By.xpath('//*[@id="login-button"]')

    userName: By = By.css('#user-name')

    password: By = By.css('#password')

    loginCredentials: By = By.xpath('//*[@id="login_credentials"]')
    driver: any;

    async navigate() {
  await this.driver.get(this.url)
  await this.driver.wait(until.elementLocated(this.loginBtn))
}
 

  async navigate() {
  await this.driver.wait(until.elementLocated(this.username))
}

async navigate() {
  await this.driver.wait(until.elementLocated(this.password))
}

async navigate(){
  await this.driver.wait(until.elementLocated(this.loginCredentials))
}

constructor() {
  super({ url: "https://www.saucedemo.com/" });
}
