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
