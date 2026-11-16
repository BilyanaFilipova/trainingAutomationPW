import { test, expect } from "@playwright/test";

test("User can log in using CSS selectors", async ({ page }) => {

  // Open login page
  await page.goto("http://localhost:5173/login");

  // Fill in email
  await page.getByPlaceholder("Email").fill("john@example.com");

  // Fill in password
  await page.getByPlaceholder("Password").fill("password123");

  // Click Log in button
  await page.getByTestId("cs-login-submit").click();

 
});