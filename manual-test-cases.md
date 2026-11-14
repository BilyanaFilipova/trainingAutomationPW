TC01 – Submit a request with valid basic information
Good for automation
Preconditions:
City Service Portal is avaible
Steps:
	1. Open the New Request page in City Service Portal.
	2. Enter a valid request title.
	3. Enter a description containing at least 30 characters.
	4. Select today's date.
	5. Select a category.
	6. Select Medium priority.
	7. Leave the Emergency toggle OFF.
	8. Click Next.
Test data:
	• Title: Broken streetlight
	• Description: The streetlight near the main entrance is not working.
	• Date: 14-Nov-2026
	• Category: Street Lighting
	• Priority: Medium
	• Emergency: No
Expected result:
	• All information is accepted.
	• The user can proceed to Step 2 – Location Details.
	• Progress updates from 20% to 40%.
Why automate? This is a repeatable test with clear expected results. It checks important functionality and is suitable for regression testing.


TC02 – Validate required fields
Good for automation
Steps:
	1. Open the New Request page.
	2. Leave Request Title empty.
	3. Leave Description empty.
	4. Do not select a Category.
	5. Click Next.
Test data:
	• Title: Empty
	• Description: Empty
	• Date: Today's date
	• Category: Not selected
Expected result:
	• The form does not proceed to Step 2.
	• Required-field validation messages are displayed.
	• The user remains on Step 1.
	• No request is submitted.
Why automate? Required-field validation is a critical function. It can be tested repeatedly with different combinations of missing fields.


TC03 – Validate description minimum and maximum length
Good for automation
Steps:
	1. Open the New Request page.
	2. Enter a valid title.
	3. Enter a description with fewer than 30 characters.
	4. Try to continue.
	5. Enter exactly 30 characters.
	6. Try again.
	7. Enter more than 2,000 characters.
	8. Check the validation behavior.
Test data:
	• Description 1: Streetlight broken (18 characters).
	• Description 2: The streetlight is broken near my home. (40 characters).
	• Description 3: 2,001 characters.
Expected result:
	• A description shorter than 30 characters is rejected.
	• A description meeting the 30-character minimum is accepted.
	• A description exceeding the 2,000-character maximum is prevented or rejected.
	• The character counter displays the correct number of characters.
Why automate? Boundary-value testing is highly repeatable. Automation can quickly check minimum and maximum limits and detect regressions.

TC04 – Validate date restrictions
Good for automation
Steps:
	1. Open the New Request page.
	2. Enter valid title and description.
	3. Select a date within the allowed period.
	4. Try selecting a date more than one month ago.
	5. Try selecting a future date.
	6. Observe the validation behavior.
Test data:
	• Valid date: 14-Nov-2026.
	• Invalid old date: 01-Oct-2026.
	• Future date: 15-Nov-2026.
Expected result:
	• A date within the allowed period is accepted.
	• A date more than one month ago is rejected.
	• A future date is rejected if the business rules prohibit future dates.
	• Appropriate validation messages are displayed.
Why automate? Date validation is predictable and can be checked using different date values. It is useful for regression testing.
Note: The screenshot explicitly states that the date cannot be more than one month ago. The future-date restriction should be confirmed with the business requirements.

