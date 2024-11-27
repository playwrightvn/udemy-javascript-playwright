const { test } = require('@playwright/test');

test('Click test - solution 01', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.click("//a[text()='Bài học 1: Register Page (có đủ các element)']");
    await page.click("//a[text()='Trở về trang chủ']");
    await page.click("//a[text()='Bài học 2: Product page']");
    await page.click("//a[text()='Trở về trang chủ']");
});

test('Click test - solution 02', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
    await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
});