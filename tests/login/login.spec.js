import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pageObjects/login.po';
const testData = require('../../fixtures/loginFixture.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Valid login tests', () => {
  test('Login using valid username and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.username, testData.validUser.password);
    await login.verifyValidation();
  });
})

test.describe('Invalid login tests', () => {
  test('Login using invalid username and valid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.username, testData.validUser.password);
    await login.verifyInvalidLogin();
  });  

  test('Login using valid username and invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.validUser.username, testData.invalidUser.password);
    await login.verifyInvalidLogin();
  });

  test('Login using invalid username and invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login(testData.invalidUser.username, testData.invalidUser.password);
    await login.verifyInvalidLogin();
  });
});

test.describe('Edge case login tests', () => {
  test('Login using empty username and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('', '');
    await login.verifyInvalidLogin();
  });

  test('Login using special characters in username and password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.login('!@#$%', '!@#$%');
    await login.verifyInvalidLogin();
  });
});
