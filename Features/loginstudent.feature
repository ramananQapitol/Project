Feature: Login cucumber

  @tag
  Scenario Outline: Login Functionality with valid credentials
    Given Student is on the Learnwise Login Page
    When Student should enter valid "<username>"
    And Student should select next Button
    Then Student should verify success message

    Examples: 
      | username               |
      | student987@yopmail.com |

  @tag1
  Scenario Outline: Check next button is enabled or not
    Given Student should be in Login Page
    When Student should not enter any mail id "<username>"
    And Student should check next button is enabled
    Then Student should verify its enabled or not

    Examples: 
      | username               |
      |                        |
      | student987@yopmail.com |
      | student987@yopmail.com |

  @tag2
  Scenario Outline: Check Student Enter new password
    Given Student should enter "<username>"
    When Student should click on next button
    Then Student should able to enter password "<pass>"

    Examples: 
      | username               |  | pass      |
      | student246@yopmail.com |  | Admin@123 |
      | student246@yopmail.com |  | ADMIadmin |

  @tag3
  Scenario Outline: Check Student Enter new password and confirm password
    Given Student should ENteR "<username>"
    When Student should click on NEXT button
    And Student should able to enter new password "<pass>"
    Then Student should able to enter confirm password "<pass>"

    Examples: 
      | username               |  | pass      |  | pass      |
      | student246@yopmail.com |  | ADMIadmin |  | ADMIadmin |

  @tag4
  Scenario Outline: Student Registration Page
    Given Student should be in Learnwise Login Page
    When Student should enter valid email"<username>"
    And Student should select next Button
    And Student should enter Institution code"<code>"
    And Student should re-enter valid email"<username>"
    And Student should enter the valid password "<passkey>"
    And Student should confirm password "<password>"
    Then Should should click on SignIn Button

    Examples: 
      | username               | code     | username               | passkey   | password  |
      | student246@yopmail.com | QAPI5260 | student246@yopmail.com | ADMIadmin | ADMIadmin |

  @tag5
  Scenario Outline: Check Student should navigate to home page
    Given Student should Enter valid UserName "<username>"
    When Student should click on next button
    Then Student should able to enter valid password "<pass>"
    And Student should click on signIn

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag6
  Scenario Outline: Check Student should be in home page
    Given Student should Enter valid UserNamE "<username>"
    When Student should click on nextBTN
    Then Student should able to enter In valid password "<pass>"
    And Student should click on signIN Btn

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag7
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should able to see Hamburger

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag8
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should able to click on Hamburger

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag9
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should see start or resume button

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag10
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should click on start or resume button

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag11
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should click on Course Module

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag12
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should see Join Course is enabled or not

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag13
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should enter Batch id"<BatchId>"
    Then Student should click on Join Course

    Examples: 
      | username                |  | pass |  | BatchId        |
      | student1212@yopmail.com |  | pass |  | QAPI-2110-DADA |

  @tag14
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should click o Batch Name

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag15
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should click on Chat Icon

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag16
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    Then Student should click batchName and click on Quizzes

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag17
  Scenario Outline: Check Student should be in home page
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on Practice ventures

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag18
  Scenario Outline: Check Student able to create Practice venture group
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on Practice ventures
    Then student should click on create group

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag19
  Scenario Outline: Check Student able to create Practice venture group
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on Practice ventures
    Then student should click on create group

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag20
  Scenario Outline: Check Student able to create Practice venture group
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on Practice ventures

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag21
  Scenario Outline: Check Student able to create Practice venture group
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on PV Milestones

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |

  @tag22
  Scenario Outline: Check Student able to create Practice venture group
    Given Student should EnTer VALid UserNamE "<username>"
    When Student should  EnteR valid password "<pass>"
    And Student should in HOME Page
    And Student should click courses
    Then Student should click on PV Milestones
    Then Student should click on PV Milestone assesment

    Examples: 
      | username                |  | pass |
      | student1212@yopmail.com |  | pass |
