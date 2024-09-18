import { expect, test } from "@playwright/test";

test("has hello world", async ({ page }) => {
  await page.goto("http://localhost:3001");
  await expect(page.getByText("Hello World")).toBeVisible();
});
