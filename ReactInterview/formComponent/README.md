# Tab Form Component

## Overview

The **Tab Form Component** allows users to switch between three distinct sections—**Profile**, **Interest**, and **Settings**—within the same form interface. Each tab holds a specific set of fields and performs form validation to ensure that the data entered by the user is correct before submission.

## Tabs

1. **Profile Tab**
   - Contains fields for user details such as Name, Email, and Phone Number.
   - Fields are validated to ensure that required inputs are filled and the correct format is used for Email and Phone Number.
   
2. **Interest Tab**
   - Includes checkboxes or multi-select options for selecting user interests or preferences.
   - Validation ensures that at least one interest is selected before proceeding.
   
3. **Settings Tab**
   - Contains fields for updating user preferences, such as Notification Settings and Privacy Options.
   - Validation is applied to ensure that the settings are chosen appropriately.

## Features

- **Tab Navigation:** Users can easily switch between tabs without losing entered data.
- **Validation:** Each tab’s fields are validated individually, ensuring proper form data entry.
  - **Profile Tab:** Checks for proper format in email and phone number.
  - **Interest Tab:** Requires at least one option to be selected.
  - **Settings Tab:** Ensures that settings are in valid choices.
  
- **Error Handling:** Invalid inputs display error messages directly under the corresponding fields, guiding the user to correct their input.

## Usage

1. **Switch Tabs:** Click on any of the tabs—Profile, Interest, or Settings—to navigate between sections.
2. **Form Submission:** Once all fields are filled and validated, the form can be submitted. Errors will be highlighted if there are any validation issues.

## Validation Rules

- **Profile Tab:**
  - Name: Required
  - Email: Must be in valid email format.
  - Phone Number: Must be a valid phone number format.
  
- **Interest Tab:**
  - At least one interest must be selected.

- **Settings Tab:**
  - Ensure at least one notification setting is selected.

## Conclusion

The **Tab Form Component** enhances the user experience by organizing the form into manageable sections, providing clear navigation between tabs, and performing real-time validation to ensure data quality.

