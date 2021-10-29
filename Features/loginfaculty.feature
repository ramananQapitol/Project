Feature: Login Wadhwani
@tag1
  Scenario Outline: Login Functionality with valid credentials
Given Faculty is on the Learnwise Login Page
When Faculty should enter valid "<username>" 
Then Faculty should verify success message
Examples:
|username|
|qapital.faculty@yopmail.com|
@tag2
  Scenario Outline: Login Functionality with invalid credentials
Given Faculty is on the Learnwise Login Page
When Faculty should enter invalid "<username>" 
Then Faculty should verify its enter success message
Examples:
|username|
|qapital.com|
@tag3
  Scenario Outline: Login Functionality with invalid password
Given Faculty is on the Learnwise Login Page
When Faculty should enter invalid "<username>"
And Faculty should click next Button
Then Faculty should enter the invalid password"<password>"
Then Faculty should verify its  success message
Examples:
|username|password|
|qapital.faculty@yopmail.com|1234|
@tag4
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
@tag5
  Scenario Outline: Forgot password is click or not
Given Faculty is on the Learnwise Login Page
When Faculty should enter an valid email"<username>" 
And Faculty click the next Button
Then Faculty click the forgot password"<forgot password>"
Then Faculty should verify its successfully click 
Examples:
|username|      
|qapital.faculty@yopmail.com|
@tag6
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
@tag7
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
@tag8
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
@tag9
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
@tag10
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

  @tag11
    Scenario Outline: other course is click or not
    Given Faculty is on the Learnwise Login Page
    When Faculty should enter an valid email"<username>"
    And Faculty click the next Button
    Then Faculty enter the password"<password>"
    Then Faculty click on signin button
    Then click on dashboard Button
    Then Faculty should click on other course Button
    Then Faculty should verify other course  successfully click

    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
      
     @tag12
    Scenario Outline:  Joining courses
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should click on course
    Then User should start the course
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag13
    Scenario Outline:  Click on create Batch
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should click on courses
    Then User should able to Create A Batch
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
    
  @tag14
    Scenario Outline:  Entering Batch Details
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When click on create batch
    Then Enter details to create batch
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
     
  @tag15
    Scenario Outline:  Copy Batch Details
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should click Create BATCH
    Then Click on copy batch
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
 
  @tag16
    Scenario Outline:  Enter copy batch details
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should click Copy BATCH
    Then Enter Batch deTails
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
 
  @tag17
    Scenario Outline:  Clicking on Start Course
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should click on Start course
    Then User should see coursedetails
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
 
  @tag18
    Scenario Outline:  Changing Batch
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When User should see the batch names in dropdown options
    Then User should select other batch
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag19
    Scenario Outline:  Faculty should give mock test
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When click on mock test
    Then click on play button
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
  @tag20
    Scenario Outline:  Faculty should take Quizzes
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should click on quizzes
    Then Faculty should able see the quizzes
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag21
    Scenario Outline:  Faculty taking Quizzes
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should click Quizzes
    Then Faculty should click on take quizzes
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
   

  @tag22
    Scenario Outline:  Faculty should view quizz results
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should should take Quizz
    Then Faculty should click on view quizz Results
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
    

  @tag23
    Scenario Outline:  Faculty should take quizz
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should take quizz
    Then Faculty should click on submit
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
    
      
  @tag24
    Scenario Outline:  Verify Faculty should view Practice Venture
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see th Practice Venture
    Then Faculty should click on Practice Venture
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag25
    Scenario Outline:  Verify Faculty should view PV Milestones
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see th PV Milestones
    Then Faculty should click on PV Milestones
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag26
    Scenario Outline:  Verify Faculty should click on faculty notes
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see th Faculty Notes
    Then Faculty should click on Faculty Notes
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
   

  @tag27
    Scenario Outline:  Verify Faculty should see the lessons
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the lessons
    Then Faculty should click on lessons
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
    
  @tag28
    Scenario Outline:  Verify Faculty should click on report tab
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the report module
    Then Faculty should click on Report Module
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
    
  @tag29
    Scenario Outline:  Verify Faculty should click on Notification icon
  Given Faculty is on  Login Page
  And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the Notification icon
    Then Faculty should click onNotification icon
   Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
  @tag30
    Scenario Outline:  Faculty should take quizz again
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should take quizz again
    Then Faculty should Re-attempt quizz
   Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
  @tag31
    Scenario Outline:  Faculty should be in teaching mode
   Given Faculty is on  Login Page
   And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should click on START COURSe
    Then Faculty should click on teaching
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
   
  @tag32
    Scenario Outline:  Faculty should be in Manage Batches
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the Manage Batches
    Then Faculty should click on Manage Batches
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  #@tag33
  #  Scenario Outline:  Faculty should EDIT Manage Batches
    #Given Faculty is on  Login Page
    #When Faculty should see the edit symbol Manage Batches
    #Then Faculty should click onedit symbol Manage Batches

  #@tag34
  #  Scenario Outline:  Faculty should be in Chat box Manage Batches
   #Given Faculty is on  Login Page
    #When Faculty should see the Chat box
    #Then Faculty should click on Chat box
#
  #@tag35
  #  Scenario Outline:  Faculty should be in Manage Students
    #Given Faculty is on  Login Page
    #When Faculty should see the Manage Students
    #Then Faculty should click on Manage Students

  @tag33
    Scenario Outline:  Faculty should be in Run lessons
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the Run lessons
    Then Faculty should click on Run lessons
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  @tag34
    Scenario Outline:  Faculty should be in No Upcoming Module
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the No Upcoming Module
    Then Faculty should click on No Upcoming Module
    Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |

  #@tag38
  #  Scenario Outline:  Faculty should Close Batch
    #Given Faculty is on  Login Page
    #When Faculty should see the Close Batch
    #Then Faculty should click on Close Batch
#
  #@tag39
  #  Scenario Outline:  Faculty should ReOpen batch
   #Given Faculty is on  Login Page
    #When Faculty should see the ReOpen batch
    #Then Faculty should click on ReOpen batch
#
  #@tag40
  #  Scenario Outline:  Faculty should share his thoughts through chat
    #Given Faculty is on  Login Page
    #When Faculty should see chatIcon
    #Then Faculty should click on  chat icon and share his thoughts
#
  #@tag41
  #  Scenario Outline:  Faculty should send his thoughts
   #Given Faculty is on  Login Page
    #When Faculty should see the CHatBox
    #Then Faculty should click on send

  @tag35
    Scenario Outline:  Faculty should save and submit quizz
    Given Faculty is on  Login Page
    And Faculty enter the username"<username>"
    Then click the next button and enter password"<password>"
    When Faculty should see the Save and continue
    Then Faculty should click save and submit  
     Examples: 
      | username                    | password |
      | qapital.faculty@yopmail.com | Pass@123 |
      