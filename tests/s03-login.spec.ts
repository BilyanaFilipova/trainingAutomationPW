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

  // Verify that the URL changed to Dashboard
 await expect(page).toHaveURL("http://localhost:5173/dashboard");

  // Verify that the Dashboard heading is visible
await expect(page.getByRole("heading", { name: "All Service Requests (502)" })).toBeVisible();
  
 
});