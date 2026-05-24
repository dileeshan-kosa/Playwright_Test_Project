// import { test, expect } from '@playwright/test';

// test('Robot adds a new user to the app', async ({ page }) => {
//   // 1. Tell the robot to go to your local React website
//   await page.goto('http://localhost:5173');

//   // 2. Tell the robot to find the text boxes and type the data.
//   // Note: Change 'Name' and 'Email' if your React code uses different placeholders!
//   await page.getByPlaceholder('Name').fill('Robot Tester');
//   await page.getByPlaceholder('Email').fill('robot@test.com');

//   // 3. Click the submit button
//   // Note: Change 'Add User' to whatever your button actually says.
//   await page.getByRole('button', { name: 'Add User' }).click();

//   // 4. Pause for 3 seconds so you have time to watch it happen
//   await page.waitForTimeout(3000);
// });

import { test, expect } from '@playwright/test';

test('Robot adds a new user to the app', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // 1. Updated to match the EXACT placeholders on your screen
  await page.getByPlaceholder('e.g. John Doe').fill('Robot Tester');
  await page.getByPlaceholder('e.g. john@example.com').fill('robot@test.com');

  // 2. Updated to match the EXACT text on your green submit button
  await page.getByRole('button', { name: 'Save to Database' }).click();

  // 3. Pause for 3 seconds
  await page.waitForTimeout(3000);
});

