import { test, expect } from "@playwright/test";
import { ContactPage } from "../../pageObjects/contact.po";
import { LoginPage } from "../../pageObjects/login.po";
const testData = require("../../fixtures/loginFixture.json");
const contactTestData = require("../../fixtures/contactFixture.json");
// const {authenticateUser, createEntity,deleteEntity,getEntity,validateEntity,updateEntity}=require('../../utils/contactUtils');
// let accessToken;
test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto("/");
  await login.login(testData.validUser.username, testData.validUser.password);
  await login.verifyValidation();
});

test.describe("Contact testcases", () => {
  test("Contact Add test", async ({ page, context, request }) => {
    const contact = new ContactPage(page);
    await contact.contactAdd(
      contactTestData.contact.firstname,
      contactTestData.contact.lastname,
      contactTestData.contact.dob,
      contactTestData.contact.email,
      contactTestData.contact.phone,
      contactTestData.contact.address1,
      contactTestData.contact.address2,
      contactTestData.contact.city,
      contactTestData.contact.state,
      contactTestData.contact.postalCode,
      contactTestData.contact.country
    );
    await contact.viewContact();
    await contact.validateContactCreated(
        contactTestData.contact.firstName,
        contactTestData.contact.lastName,
        contactTestData.contact.dob,
        contactTestData.contact.email,
        contactTestData.contact.phone,
        contactTestData.contact.address1,
        contactTestData.contact.address2,
        contactTestData.contact.city,
        contactTestData.contact.state,
        contactTestData.contact.postalCode,
        contactTestData.contact.country
    );
  });
});
