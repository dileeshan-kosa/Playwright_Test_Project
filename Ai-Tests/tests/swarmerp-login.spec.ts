// import { test, expect } from '@playwright/test';

// test('Robot logs in and enters the Head Office', async ({ page }) => {
//   // 1. Go to the live website
//   await page.goto('https://cloud.swarmerp.com/');

//   // 2. Click the "Log in" button on the home page
//   await page.getByRole('button', { name: 'Log in' }).first().click();

//   // 3. Fill in the login details using our bulletproof locator trick
//   await page.locator('input[type="email"]').fill('robot123@mytest.com');
//   await page.locator('input[type="password"]').fill('TestPassword123');

//   // 4. Click the "Log in" button to enter the dashboard
//   await page.getByRole('button', { name: 'Log in' }).click();

//   // 5. Click on the property card! 
//   await page.getByText('Head Office').click();

//   await page.getByText('HR').click();

//   await page.getByText('Employees').click();

//   await page.getByText('New employee').click();


//   // 6. Pause for 5 seconds so we can verify it reaches the new URL
//   await page.waitForTimeout(5000);
// });



import { test, expect } from '@playwright/test';

test('Robot creates a unique new employee', async ({ page }) => {
  // --- 1. GENERATE DYNAMIC DATA ---
  // This grabs the last 5 numbers of the current millisecond on the clock
  const uniqueId = Date.now().toString().slice(-5); 
  
  const firstName = 'Jane_' + uniqueId;
  const lastName = 'Doe_' + uniqueId;
  const empNumber = 'EMP-' + uniqueId;
  
  // For date boxes, Playwright always prefers the standard computer format: YYYY-MM-DD
  const hireDate = '2026-05-23'; 

  // --- 2. LOG IN ---
  await page.goto('https://cloud.swarmerp.com/');
  await page.getByRole('button', { name: 'Log in' }).first().click();

  await page.locator('input[type="email"]').fill('robot123@mytest.com');
  await page.locator('input[type="password"]').fill('TestPassword123');
  await page.getByRole('button', { name: 'Log in' }).click();

  // --- 3. NAVIGATE TO FORM ---
  await page.getByText('Head Office').click();
  await page.waitForTimeout(3000); 

  await page.getByText('HR').click();
  await page.waitForTimeout(2000); 

  await page.getByText('Employees').click();
  await page.waitForTimeout(1000); 
  
  await page.getByText('New employee').click();
  
  // Wait 2 seconds for the new form to finish loading on the screen
  await page.waitForTimeout(2000);

  // --- 4. FILL OUT THE FORM ---
  // Using the text labels sitting directly above the boxes instead of placeholders
  await page.getByLabel('First name').fill(firstName);
  await page.getByLabel('Last name').fill(lastName);
  
  // Grabs the SECOND date box on the screen (the Hire Date)
  await page.locator('input[type="date"]').nth(1).fill(hireDate);
  
  // Using the label for the employee number box
  await page.getByLabel('Employee number').fill(empNumber);
  await page.waitForTimeout(2000);

  // await page.getByText('Save and activate').click();
  await page.getByRole('button', { name: 'Save and activate' }).click();
  
  await page.getByRole('button', { name: 'Save and activate' }).click();

  // Pause for 5 seconds so you can watch it type the unique numbers!
  await page.waitForTimeout(5000);
});