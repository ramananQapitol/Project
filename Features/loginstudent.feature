Feature: Login cucumber

@tags
Scenario Outline: Login Functionality with valid credentials
Given Student is on the Learnwise Login Page
When Student should enter valid "<username>" 
And Student should select next Button
Then Student should verify success message
Examples:
|username|
|admin@admin.com|