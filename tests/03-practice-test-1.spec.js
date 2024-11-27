const { test } = require('@playwright/test');

test('Click test', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
    await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
    await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    await page.getByRole('link', { name: 'Trở về trang chủ' }).click();
});