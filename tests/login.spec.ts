import { test, expect } from "@playwright/test";

test("City Services Portal login page has correct title", async ({ page }) => {
  // Open login page
  await page.goto("http://localhost:5173/login");

  // Verify page title
  await expect(page).toHaveTitle("City Services Portal");
});