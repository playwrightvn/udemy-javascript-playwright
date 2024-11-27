const { test } = require('@playwright/test');

test('Basic action 01 - click', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");

    // Single click
    await page.click("//a[@href='018-mouse.html']");

    const clickArea = page.locator("//div[@id='clickArea']");

    // Double click
    await clickArea.dblclick();

    // Click nhiều lần
    await clickArea.click({ clickCount: 10 });

    // Click chuột phải
    // await clickArea.click({ button: "right" });

    // Click kèm bấm phím shift
    await clickArea.click({ modifiers: ["Shift"] });
});

test('Basic action 02 - input', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='01-xpath-register-page.html']");

    // Fill input (giống kiểu paste vào)
    await page.fill("//input[@id='username']", "playwright_viet_nam");

    // Press (giống kiểu gõ từng kí tự)
    await page.locator("//input[@id='email']").pressSequentially("playwrightvietnam@gmail.com");

    // Press và delay vài giây
    await page.locator("//textarea[@id='bio']").pressSequentially("I love Playwright", {
        delay: 100
    });
});

test('Basic action 03 - radio/checkbox, select', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='01-xpath-register-page.html']");

    // Radio
    await page.check("//input[@id='male']");
    await page.locator("//input[@id='female']").check();

    // Checkbox
    await page.check("//input[@id='reading']");
    await page.locator("//input[@id='reading']").check();
    await page.locator("//input[@id='cooking']").setChecked(true);
    await page.locator("//input[@id='reading']").setChecked(false);

    // Select one
    await page.selectOption("//select[@id='country']", "Australia"); // Chọn bởi text
    await page.selectOption("//select[@id='country']", "canada"); // Chọn bởi value

    // Select multiple
    await page.selectOption("//select[@id='interests']", ["Science", "Art", "Music"]);
});

test('Basic action 04 - datepicker, color picker, range', async ({ page }) => {
    await page.goto("https://material.playwrightvn.com");
    await page.click("//a[@href='01-xpath-register-page.html']");

    // Date picker
    await page.fill("//input[@id='dob']", "2024-10-01");

    // Color picker
    await page.fill("//input[@id='favcolor']", "#ffffff");

    // Range
    await page.fill("//input[@id='rating']", "2");
});

test('Basic action 05 - file, hover', async ({ page }) => {
    // File

    // Hover
})