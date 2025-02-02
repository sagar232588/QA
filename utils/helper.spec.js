const axios = require("axios");
import { expect } from "@playwright/test";
const cookie = require("cookie");

let apiUrl;

async function authenticate(username, password, { request }) {
  const apiUrl = await getApiBaseUrl();
  const headers = { "Content-Type": "application/json" };
  const requestBody = {
    email: username,
    password: password,
  };
  const response = await request.post(`${apiUrl}/users/login`, {
    data: requestBody,
    headers,
  }); 
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  const token = responseBody.token;
  return token;
}

async function getApiBaseUrl() {
  apiUrl = process.env.API_BASE_URL;
  if (!apiUrl) {
    apiUrl = "";
  }
  return apiUrl;
}

async function createEntity(userData, accessToken, module, { request }) {
  const apiUrl = await getApiBaseUrl();
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    authorization: "Bearer " + accessToken,
  };
  const response = await request.post(apiUrl + module, {
    headers,
    data: JSON.stringify(userData),
  });

  const responseBody = await response.json();
  const statusCode = response.status();
  expect(statusCode).toBe(201);
  if (responseBody && responseBody.id) {
    return responseBody.id;
  } else {
    return null;
  }
}