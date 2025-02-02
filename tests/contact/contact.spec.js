import { test } from "@playwright/test";
const contactTestData = require("../../fixtures/contactFixture.json");
const testData = require("../../fixtures/loginFixture.json");
import { LoginPage } from "../../pageObjects/login.po.js";
import { ContactPage } from "../../pageObjects/contact.po.js";

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
      contactTestData.contact.province,
      contactTestData.contact.postalCode,
      contactTestData.contact.country
    );
    await contact.validateContactCreated(
      contactTestData.contact.firstname,
      contactTestData.contact.lastname,
      contactTestData.contact.dob,
      contactTestData.contact.email,
      contactTestData.contact.phone,
      contactTestData.contact.address1,
      contactTestData.contact.address2,
      contactTestData.contact.city,
      contactTestData.contact.province,
      contactTestData.contact.postalCode,
      contactTestData.contact.country
    );
  });
});

