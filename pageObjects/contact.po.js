const { expectation } = require("@playwright/test");

exports.ContactPage = class ContactPage {
  constructor(page) {
    this.page = page;
    this.addcontact = '//button[@id="add-contact"]';
    this.firstName = "#firstName";
    this.lastName = "#lastName";
    this.dob = '//input[@placeholder="yyyy-MM-dd"]';
    this.email = '//input[@id="email"]';
    this.phone = '//input[@id="phone"]';
    this.address1 = '//input[@placeholder="Address 1"]';
    this.address2 = '//input[@placeholder="Address 2"]';
    this.city = '//input[@placeholder="City"]';
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
    this.viewCreatedContact = '//button[@id="view-contact"]';

  }

  async contactAdd(
    firstName,
    lastName,
    dob,
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
    await this.page.locator(this.dob).fill(dob);
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
    dob,
    email,
    phone,
    address1,
    address2,
    city,
    state,
    postalCode,
    country
  ) {
    const fNameValidation = await this.page.locator(this.savedfirstName);

    const lNameValidation = await this.page.locator(this.savedlastName);

    const dobValidation = await this.page.locator(this.saveddob);
    const emailValidation = await this.page.locator(this.savedemail);

    const phoneValidation = await this.page.locator(this.savedphone);

    const address1Validation = await this.page.locator(this.savedaddress1);

    const address2Validation = await this.page.locator(this.savedaddress2);

    const cityValidation = await this.page.locator(this.savedcity);

    const stateValidation = await this.page.locator(this.savedstate);

    const postalCodeValidation = await this.page.locator(this.savedpostalCode);

    const countryValidation = await this.page.locator(this.savedcountry);

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
