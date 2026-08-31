import { test, expect } from '@playwright/test';
const pageURL = "https://sdetqa.vercel.app/autoplay";
test.describe('Data Entry Form Validation', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(pageURL);
        await expect(page.getByText('AutoPlay')).toBeVisible();
    });
    test('1page load validation', async ({ page }) => {
        await expect(page).toHaveURL(pageURL);
        await expect(page.getByText('AutoPlay')).toBeVisible();
    });

    test('2 input field validation', async ({ page }) => {
        const nameField = page.getByLabel('Full name');
        const emailField = page.getByLabel('Email');
        const phoneField = page.getByLabel('Phone');
        const addressField = page.getByLabel('Address');
        await expect(nameField).toBeVisible();
        await expect(nameField).toBeEnabled();
        //Validating max length of the input fields
        await expect(nameField).toHaveAttribute('maxlength', '15');
        nameField.fill('swati singh');
        await expect(nameField).toHaveValue('swati singh');


        await expect(emailField).toBeVisible();
        await expect(emailField).toBeEnabled();
        emailField.fill('Test@example.com');
        await expect(emailField).toHaveValue('Test@example.com');

        await expect(phoneField).toBeVisible();
        await expect(phoneField).toBeEnabled();
        phoneField.fill('1234567890');
        await expect(phoneField).toHaveValue('1234567890');

        await expect(addressField).toBeVisible();
        await expect(addressField).toBeEnabled();
        addressField.fill('123 Main Street');
        await expect(addressField).toHaveValue('123 Main Street');
    });
    test('3 radio Button validation', async ({ page }) => {
        const maleRadioButton = page.getByLabel('Male',{exact:true});
        const femaleRadioButton = page.getByLabel('Female',{exact:true});
        //validating the visibility and enabled state of the radio buttons
        await expect(maleRadioButton).toBeVisible();
        await expect(maleRadioButton).toBeEnabled();
        await expect(femaleRadioButton).toBeVisible();
        await expect(femaleRadioButton).toBeEnabled();
//checking the male radio button and validating that it is checked and the female radio button is not checked   
        await maleRadioButton.check();
        await expect(maleRadioButton).toBeChecked();
        await expect(femaleRadioButton).not.toBeChecked();

     });


     //4. Checkboxes validation
  test('4. Checkboxes validation', async ({ page }) => {
 
    // Select Sunday
    const sundayCheckbox = page.getByLabel('Sun');
    await sundayCheckbox.check() // check checkbox
    //sundayCheckbox.setChecked(true)  //sundayCheckbox.setChecked(false)  true- check
 
    //Select all checkboxes (Mon-Sun)
 //with MAP
    const allDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
 
    // const allCheckboxes = allDays.map((day) => {
    //   return page.getByLabel(day)
    // })
 
    // for (const checkbox of allCheckboxes) {
    //   await checkbox.check()
    //   await expect(checkbox).toBeChecked()
    // }

    //with for loop
    for (const day of allDays) {
      const checkbox = page.getByLabel(day)
      await checkbox.check()
      await expect(checkbox).toBeChecked();
    }

    //Uncheck monday  validate that it is unchecked

    const mondayCheckbox = page.getByLabel('Mon');
    await mondayCheckbox.uncheck();
    await expect(mondayCheckbox).not.toBeChecked();
    //uncheck tuesday and validate that it is unchecked
    const tuesdayCheckbox = page.getByLabel('Tue');
    await tuesdayCheckbox.uncheck();
    await expect(tuesdayCheckbox).not.toBeChecked();
    //uncheck wednesday and validate that it is unchecked
    const wednesdayCheckbox = page.getByLabel('Wed');
    await wednesdayCheckbox.uncheck();
    await expect(wednesdayCheckbox).not.toBeChecked();
    //select checkbox using index and validate that it is checked
    

  })



});