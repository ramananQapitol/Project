Feature: Login Wadhwani
@tags1
Scenario Outline: Login Functionality with valid credentials
Given Faculty is on the Learnwise Login Page
When Faculty should enter valid "<username>" 
Then Faculty should verify success message
Examples:
|username|
|qapital.faculty@yopmail.com|
@tags2
Scenario Outline: Login Functionality with invalid credentials
Given Faculty is on the Learnwise Login Page
When Faculty should enter invalid "<username>" 
Then Faculty should verify its enter success message
Examples:
|username|
|qapital.com|
@tags3
Scenario Outline: Login Functionality with invalid password
Given Faculty is on the Learnwise Login Page
When Faculty should enter invalid "<username>"
And Faculty should click next Button
Then Faculty should enter the invalid password"<password>"
Then Faculty should verify its  success message
Examples:
|username|password|
|qapital.faculty@yopmail.com|1234|
@tags4
Scenario Outline: Signin Button is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter invalid "<username>"
And Faculty should click next Button
Then Faculty should enter the invalid password"<password>"
And Faculty should click the Sign in Button
Then Faculty should verify its  success message
Examples:
|username|password|
|qapital.faculty@yopmail.com|1234|
@tags5
Scenario Outline: Forgot password is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty click the forgot password"<forgot password>"
Then Faculty should verify its successfully click 
Examples:
|username|      
|qapital.faculty@yopmail.com|
@tags6
Scenario Outline: Signin button is click or not with valid password
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty enter the password"<password>"
Then Faculty click on signin button
Then Faculty should verify its successfully click 
Examples:
|username|password|   
|qapital.faculty@yopmail.com|Pass@123|
@tags7
Scenario Outline: Dashboard is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty enter the password"<password>"
Then Faculty click on signin button
Then click on dashboard Button
Then Faculty should verify  dashboard successfully click 
Examples:
|username|password|   
|qapital.faculty@yopmail.com|Pass@123|
@tags8
Scenario Outline: Index is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty enter the password"<password>"
Then Faculty click on signin button
Then click on dashboard Button
Then Faculty should click on index Button
Then Faculty should verify index successfully click 
Examples:
|username|password|   
|qapital.faculty@yopmail.com|Pass@123|
@tags9
Scenario Outline: Resume is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty enter the password"<password>"
Then Faculty click on signin button
Then click on dashboard Button
Then Faculty should click on Resume Button
Then Faculty should verify resume successfully click 
Examples:
|username|password|   
|qapital.faculty@yopmail.com|Pass@123|
@tags10
Scenario Outline: course plan is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty enter the password"<password>"
Then Faculty click on signin button
Then click on dashboard Button
Then Faculty should click on course plan Button
Then Faculty should verify course plan successfully click 
Examples:
|username|password|   
|qapital.faculty@yopmail.com|Pass@123|