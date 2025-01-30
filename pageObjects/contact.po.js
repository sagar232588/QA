const { expectation } = require("@playwright/test");

exports.ContactPage = class ContactPage {
  constructor(page) {
    this.page = page;
    this.addcontact = '//button[@id="add-contact"]';
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.birthdate = '//input[@placeholder="yyyy-MM-dd"]';
    this.email = '//input[@id="email"]';
    this.phone = '//input[@id="phone"]';
    this.address1 = '//input[@placeholder="address1"]';
    this.address2 = '//input[@placeholder="address2"]';
    this.city = '//input[@placeholder="city"]';
    this.state = '//input[@placeholder="State or Province"]';
    this.postalCode = '//input[@placeholder="Postal Code"]';
    this.country = '//input[@placeholder="Country"]';
    this.Save = '//button[@id="submit"]';

    this.savedfirstName = '//span[@id="firstName"]';
    this.savedlastName = '//span[@id="lastName"]';
    this.saveddob = '//span[@id="birthdate"]';
    this.savedemail = '//span[@id="email"]';
    this.savedphone = '//span[@id="phone"]';
    this.savedaddress1 = '//span[@id="address1"]';
    this.savedaddress2 = '//span[@id="address2"]';
    this.savedcity = '//span[@id="city"]';
    this.savedstate = '//span[@id="state"]';
    this.savedpostalCode = '//span[@id="postalCode"]';
    this.savedcountry = '//span[@id="country"]';
  }

  async ContactAdd(
    firstName,
    lastName,
    birthdate,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    postalCode,
    country
  ) {
    await this.page.locator(this.addcontact).click();
    await this.page.locator(this.firstName).fill(firstName);
    await this.page.locator(this.lastName).fill(lastName);
    await this.page.locator(this.birthdate).fill(birthdate);
    await this.page.locator(this.email).fill(email);
    await this.page.locator(this.phone).fill(phone);
    await this.page.locator(this.address1).fill(address1);
    await this.page.locator(this.address2).fill(address2);
    await this.page.locator(this.city).fill(city);
    await this.page.locator(this.state).fill(state);
    await this.page.locator(this.postalCode).fill(postalCode);
    await this.page.locator(this.country).fill(country);
    await this.page.locator(this.Save).click();
  }

  async validateContactCreated(
    fName,
    lName,
    birthdate,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    postalCode,
    country
  ) {
    const fNameValidation = await this.page
      .locator(this.savedfirstName)
      .textContent();
    const lNameValidation = await this.page
      .locator(this.savedlastName)
      .textContent();
    const dobValidation = await this.page.locator(this.saveddob).textContent();
    const emailValidation = await this.page
      .locator(this.savedemail)
      .textContent();
    const phoneValidation = await this.page
      .locator(this.savedphone)
      .textContent();
    const address1Validation = await this.page
      .locator(this.savedaddress1)
      .textContent();
    const address2Validation = await this.page
      .locator(this.savedaddress2)
      .textContent();
    const cityValidation = await this.page
      .locator(this.savedcity)
      .textContent();
    const stateValidation = await this.page
      .locator(this.savedstate)
      .textContent();
    const postalCodeValidation = await this.page
      .locator(this.savedpostalCode)
      .textContent();
    const countryValidation = await this.page
      .locator(this.savedcountry)
      .textContent();
    await expect(fNameValidation).toHaveText(fName);
    await expect(lNameValidation).toHaveText(lName);
    await expect(dobValidation).toHaveText(dob);
    await expect(emailValidation).toHaveText(email);
    await expect(phoneValidation).toHaveText(phone);
    await expect(address1Validation).toHaveText(address1);
    await expect(address2Validation).toHaveText(address2);
    await expect(cityValidation).toHaveText(city);
    await expect(stateValidation).toHaveText(state);
    await expect(postalCodeValidation).toHaveText(postalCode);
    await expect(countryValidation).toHaveText(country);
  }
  async viewContact() {
    await this.page.locator(this.viewCreatedContact).click();
  }
};
