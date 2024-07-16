import { test, expect } from "@playwright/test";

test("redirects on valid code", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const otp_selector = await page.getByTestId("codeVerify");

  await expect(otp_selector).toBeVisible();

  await otp_selector.click();

  await otp_selector.fill("123456");

  const submitBtn = page.getByTestId("submitBtn");

  await expect(submitBtn).toBeVisible();

  await submitBtn.click();

  await expect(page).toHaveURL("http://localhost:3000/success");
});

test("toast on invalid code", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const otp_selector = await page.getByTestId("codeVerify");

  await expect(otp_selector).toBeVisible();

  await otp_selector.click();

  await otp_selector.fill("1234");

  const submitBtn = await page.getByTestId("submitBtn");

  await expect(submitBtn).toBeVisible();

  await submitBtn.click();

  await expect(page).toHaveURL("http://localhost:3000");
});

test("no last 7 in the code", async ({ page }) => {
  await page.goto("http://localhost:3000");

  const otp_selector = await page.getByTestId("codeVerify");

  await expect(otp_selector).toBeVisible();

  await otp_selector.click();

  await otp_selector.fill("123457");

  const submitBtn = await page.getByTestId("submitBtn");

  await expect(submitBtn).toBeVisible();

  await submitBtn.click();

  await expect(page).toHaveURL("http://localhost:3000");
});
