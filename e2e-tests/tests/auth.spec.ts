import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";

test("Should allow the user to sign in", async ({ page }) => {
  await page.goto(UI_URL);

  await page.getByRole("link", { name: "Sign in" }).click();

  await expect(page.getByRole("heading", { name: "Sign in" })).toBeVisible();

  await page.locator("[name=email]").fill("shatyliuk222@gmail.com");
  await page.locator("[name=password]").fill("12345678");

  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Login Successful")).toBeVisible();

  await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
