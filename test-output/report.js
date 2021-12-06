$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/loginstudent.feature");
formatter.feature({
  "name": "Login cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "LW_TC_01 Verify if Student is able to enter email in the Email text field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "student987@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_01 Verify if Student is able to enter email in the Email text field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student987@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_02 Verify if Next button is enabled without adding the domain to the email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should verify Next Button is enabled or not",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "student987"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_02 Verify if Next button is enabled without adding the domain to the email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student987\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should verify Next Button is enabled or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldVerifyNextButtonIsEnabledOrNot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_03 Verify if Next button is enabled without entering the Emailid or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should verify Next Button is enabled or not",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_03 Verify if Next button is enabled without entering the Emailid or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should verify Next Button is enabled or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldVerifyNextButtonIsEnabledOrNot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_04,14,15,16 Verify if Student is able to see the Student Login page after clicking on the next button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username"
      ]
    },
    {
      "cells": [
        "student987@yopmail.com"
      ]
    },
    {
      "cells": [
        "student9876@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_04,14,15,16 Verify if Student is able to see the Student Login page after clicking on the next button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student987@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "LW_TC_04,14,15,16 Verify if Student is able to see the Student Login page after clicking on the next button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student9876@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_05 Verify if Student can enter the password in New password textfield",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student246@yopmail.com",
        "",
        "Admin@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_05 Verify if Student can enter the password in New password textfield",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student246@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter password \"Admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC__06 Verify if Student can enter the combination of lowercase and uppercase as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student246@yopmail.com",
        "",
        "Admin@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC__06 Verify if Student can enter the combination of lowercase and uppercase as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student246@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter password \"Admin@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_07 Verify if Student can click on Sign in button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter confirm password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student246@yopmail.com",
        "",
        "ADMIadmin",
        "",
        "ADMIadmin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_07 Verify if Student can click on Sign in button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student246@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter password \"ADMIadmin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter confirm password \"ADMIadmin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_17,19 Verify whether the student is able to redirect to the home page if he enters the valid emailid",
  "description": "    and valid password.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_17,19 Verify whether the student is able to redirect to the home page if he enters the valid emailid",
  "description": "    and valid password.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_18,20 Verify whether the student is able to login if he uses valid mail id and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "passes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_18,20 Verify whether the student is able to login if he uses valid mail id and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"passes\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_21 Verify whether the Student is able view all main features of Dashboard or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_21 Verify whether the Student is able view all main features of Dashboard or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_22 Verify whether the student is able to click on hamburger or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able to click on Hamburger",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_22 Verify whether the student is able to click on hamburger or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to click on Hamburger",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToClickOnHamburger()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_23 Verify whether the Student is able to click on start/ resume or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_23 Verify whether the Student is able to click on start/ resume or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_24 Verify whether the Student is able to click on start/ resume or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_24 Verify whether the Student is able to click on start/ resume or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_27 Verify if Student is able to click on the Course tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on Course Module",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_27 Verify if Student is able to click on the Course tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Course Module",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnCourseModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_28 Verify if the join button is enabled or not without entering the batchid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should see Join Course is enabled or not",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_28 Verify if the join button is enabled or not without entering the batchid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should see Join Course is enabled or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldSeeJoinCourseIsEnabledOrNot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_30 Verify if Student is able to click on Join button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should enter Batch id\"\u003cBatchId\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on Join Course",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass",
        "",
        "BatchId"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass",
        "",
        "QAPI-2110-DADA"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_30 Verify if Student is able to click on Join button.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter Batch id\"QAPI-2110-DADA\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterBatchId(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Join Course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnJoinCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_32 Verify if Student is able to click on Yes button or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click o Batch Name",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_32 Verify if Student is able to click on Yes button or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click o Batch Name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOBatchName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_34 Verify if Student is able to click on Chat icon.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on Chat Icon",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_34 Verify if Student is able to click on Chat icon.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Chat Icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnChatIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_36 Verify if Student can Click on Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on Quizzes",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_36 Verify if Student can Click on Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Quizzes",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_49 Verify whether the student is able to create te the new venture group without",
  "description": "    providing the mandatory details.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "student is able to create to the new venture group without providing the mandatory details",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_49 Verify whether the student is able to create te the new venture group without",
  "description": "    providing the mandatory details.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student is able to create to the new venture group without providing the mandatory details",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsAbleToCreateToTheNewVentureGroupWithoutProvidingTheMandatoryDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_48_52_60 Verify whether the student is able to create the new venture group",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on Practice ventures",
  "keyword": "Then "
});
formatter.step({
  "name": "student should click on create group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_48_52_60 Verify whether the student is able to create the new venture group",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Practice ventures",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentures()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click on create group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnCreateGroup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_62 Verify whether the Student is able to view the venture members or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on PV Milestones",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_62 Verify whether the Student is able to view the venture members or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on PV Milestones",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPVMilestones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_90_91_92_93_94_95_96_97_98_99 Verify if Student clicks on the Save button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should Click on profile",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_90_91_92_93_94_95_96_97_98_99 Verify if Student clicks on the Save button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should Click on profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_100 Verify if student is able to click on the notification icon or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should Click on Notification icon",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_100 Verify if student is able to click on the notification icon or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should Click on Notification icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNotificationIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_101 Verify if student is able to view the notifications or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should view Notifications",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_101 Verify if student is able to view the notifications or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should view Notifications",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldViewNotifications()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_102 Verify if student is able to click on the reports tab or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should Click on Reports",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_102 Verify if student is able to click on the reports tab or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should Click on Reports",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnReports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_103 verify if student is able to view the reports or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should view Reports",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_103 verify if student is able to view the reports or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should view Reports",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldViewReports()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_104 Verify if student is able to view and download the quiz report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should view Download quizz report",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_104 Verify if student is able to view and download the quiz report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should view Download quizz report",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldViewDownloadQuizzReport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_105 Verify if student is able to view and download the assignment report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should Download quizz report",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_105 Verify if student is able to view and download the assignment report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should Download quizz report",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldDownloadQuizzReport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_106 Verify if student is able to view and download the final assesment report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should view final assesment report",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_106 Verify if student is able to view and download the final assesment report or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should view final assesment report",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldViewFinalAssesmentReport()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_73 Veriyf if Student clicks on the Submit button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able Click on Submit Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_73 Veriyf if Student clicks on the Submit button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able Click on Submit Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleClickOnSubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_74 Verify if Student clicks on the back button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able Click on Back Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_74 Verify if Student clicks on the back button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able Click on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleClickOnBackButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_76 Verify if Student clicks on Assignment name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able Click any PV_Milestone",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_76 Verify if Student clicks on Assignment name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able Click any PV_Milestone",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleClickAnyPV_Milestone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_79 Veriyf if Student can view the status as submitted once assignment is uploaded",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag36"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able to check status",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_79 Veriyf if Student can view the status as submitted once assignment is uploaded",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag36"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to check status",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToCheckStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_80  Check Student should be click on view submit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag37"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on any assignment",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on view submission",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_80  Check Student should be click on view submit",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag37"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnPVMilestonesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on any assignment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnAnyAssignment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on view submission",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnViewSubmission()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_81 Check Student should be in milestone2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag38"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click milestone 2",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on view submit",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_81 Check Student should be in milestone2",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag38"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnPVMilestonesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click milestone 2",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickMilestone(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on view submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnViewSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_83,85Check Student should be click on attempt button and verify error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag39"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click milestone 2",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on view submit",
  "keyword": "Then "
});
formatter.step({
  "name": "Student click on attempt button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_83,85Check Student should be click on attempt button and verify error",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag39"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on PV milestones Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnPVMilestonesButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click milestone 2",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickMilestone(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on view submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnViewSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student click on attempt button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickOnAttemptButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S63  Verify whether the student is able to view the assignments or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag40"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S63  Verify whether the student is able to view the assignments or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag40"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S66 Verify whether the student is able to submit the assignment or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag41"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S66 Verify whether the student is able to submit the assignment or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag41"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S67 Verify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag42"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on viewsubmission  button in the selected pv milestone assignment.",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S67 Verify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag42"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on viewsubmission  button in the selected pv milestone assignment.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnViewsubmissionButtonInTheSelectedPvMilestoneAssignment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S67 \tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag43"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on resubmit button.",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S67 \tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag43"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on resubmit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnResubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_86,90 Check Student should be able to submit assisment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag44"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "student should click on submit",
  "keyword": "And "
});
formatter.step({
  "name": "student should click on close icon",
  "keyword": "And "
});
formatter.step({
  "name": "student should click on back button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_86,90 Check Student should be able to submit assisment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag44"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on start or resume button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnStartOrResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.student_should_click_on_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click on close icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.student_should_click_on_close_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click on back button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.student_should_click_on_back_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_52 Verify whether the student is able to cancel the process of creating the",
  "description": "    Venture group in the middle by clicking on the cancel button.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag45"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.step({
  "name": "student should click on cancel group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_52 Verify whether the student is able to cancel the process of creating the",
  "description": "    Venture group in the middle by clicking on the cancel button.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag45"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click on cancel group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnCancelGroup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_52 Verify whether the student is able to cancel the process of creating the",
  "description": "    Venture group in the middle by clicking on the cancel button.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag46"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.step({
  "name": "student should click create group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_52 Verify whether the student is able to cancel the process of creating the",
  "description": "    Venture group in the middle by clicking on the cancel button.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag46"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should click create group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickCreateGroup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_86 Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag47"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume or start button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_86 Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag47"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume or start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeOrStartButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_46 LW_TC_55  Verify whether the studentr is able to join the venture group which is created.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag48"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on create_group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should fill mandatory fields and click on create",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should logout from his profile",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1214@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_46 LW_TC_55  Verify whether the studentr is able to join the venture group which is created.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag48"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1214@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentureTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on create_group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnCreate_group()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should fill mandatory fields and click on create",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldFillMandatoryFieldsAndClickOnCreate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should logout from his profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLogoutFromHisProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_57 LW_TC_58 Verify whether the student admin is able to delete the other students who all",
  "description": "    are there in the venture group.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag49"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on Join_group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should select group name",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should logout from that profile",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1215@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_57 LW_TC_58 Verify whether the student admin is able to delete the other students who all",
  "description": "    are there in the venture group.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag49"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1215@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentureTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Join_group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnJoin_group()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should select group name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldSelectGroupName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should logout from that profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLogoutFromThatProfile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_TC_60 LW_TC_61 Verify whether the Student is able to view the venture members or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag50"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click View venture members",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should delete the venture",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1214@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_60 LW_TC_61 Verify whether the Student is able to view the venture members or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag50"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1214@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentureTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click View venture members",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickViewVentureMembers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should delete the venture",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldDeleteTheVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S65  and LW_S_S72\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag52"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on resubmit button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on remove button and click on choose unsupported file and submit",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S65  and LW_S_S72\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag52"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on resubmit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnResubmitButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on remove button and click on choose unsupported file and submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnRemoveButtonAndClickOnChooseUnsupportedFileAndSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S71 and LW_S_S73 and LW_S_S77 and LW_S_S78\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag53"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on resubmit button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on remove button and click on choose file and submit",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S71 and LW_S_S73 and LW_S_S77 and LW_S_S78\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag53"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on resubmit button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnResubmitButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on remove button and click on choose file and submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnRemoveButtonAndClickOnChooseFileAndSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check Student should be in the home page and see all the tabs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag54"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Student should be in the home page and see all the tabs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag54"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag55"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag55"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag56"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check Student should be in home page and see the resume or start button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag56"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S62-64  Verify whether the student is able to view the assignments or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag57"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S62-64  Verify whether the student is able to view the assignments or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag57"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S66 Verify whether the student is able to resubmit the assignment or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag58"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S66 Verify whether the student is able to resubmit the assignment or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag58"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S67 Verify if Student can view the start date of a course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag59"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on viewsubmission  button in the selected pv milestone assignment.",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S67 Verify if Student can view the start date of a course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag59"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on viewsubmission  button in the selected pv milestone assignment.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnViewsubmissionButtonInTheSelectedPvMilestoneAssignment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "LW_S_S67 -68\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag60"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on resubmit button.",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "student1212@yopmail.com",
        "",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_S_S67 -68\tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag60"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter valid \"student1212@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on signIn",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check whether the student is able to view the assignments.",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.checkWhetherTheStudentIsAbleToViewTheAssignments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clik on view details button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clikOnViewDetailsButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on resubmit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnResubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
});