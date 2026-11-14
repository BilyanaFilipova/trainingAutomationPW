I. Write CSS selectors for: the main navigation links

[data-testid=cs-app-header] [data-testid=cs-nav-dashboard]
[data-testid=cs-app-header] [data-testid=cs-nav-resolved-cases]
[data-testid=cs-app-header] [data-testid=cs-nav-ranklist]
[data-testid=cs-app-header] [data-testid=cs-nav-my-requests]
[data-testid=cs-app-header] [data-testid=cs-nav-new-request]
[data-testid=cs-app-header] [data-testid=cs-language-switcher]
[data-testid=cs-app-header] [data-testid=cs-user-menu-button]



II. all required inputs on the New Request wizard step 1
[data-testid=cs-new-request-step-1] *:required

there are 4 required 
To check the Input
[data-testid=cs-new-request-step-1] input:required

- name="title" (Request Title)
- name="dateOfRequest" (Date of Request)
	- name="category" (Category)

AND
[data-testid=cs-new-request-step-1] textarea:required

- name="description" (Description)




III. First row in My Request
[data-rowindex="0"]



IV. For each element, rank three possible locators from most to least robust and explain why

1	[data-testid="cs-nav-dashboard"]	Most robust because it uses a unique test ID that is unlikely to change.
2	a[href="/dashboard"]	            Uses the link URL to identify the element, but the URL could change
3	header a	                        Least robust because it selects all links in the header instead of a specific navigation link.
     