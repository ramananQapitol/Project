$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/loginfaculty.feature");
formatter.feature({
  "name": "Login Wadhwani",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should verify success message",
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
        "qapital.faculty@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter valid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifySuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should verify its enter success message",
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
        "qapital.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter invalid \"qapital.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its enter success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsEnterSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login Functionality with invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter the invalid password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its  success message",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Functionality with invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter invalid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter the invalid password\"1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterTheInvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its  success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Signin Button is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter the invalid password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click the Sign in Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should verify its  success message",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Signin Button is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter invalid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter the invalid password\"1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterTheInvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click the Sign in Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickTheSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its  success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty click the forgot password\"\u003cforgot password\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its successfully click",
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
        "qapital.faculty@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the forgot password\"\u003cforgot password\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheForgotPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Signin button is click or not with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Signin button is click or not with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Dashboard is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify  dashboard successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Dashboard is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify  dashboard successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyDashboardSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Index is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on index Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify index successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Index is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on index Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnIndexButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify index successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyIndexSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Resume is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on Resume Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify resume successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Resume is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify resume successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyResumeSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "course plan is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on course plan Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify course plan successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "course plan is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on course plan Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnCoursePlanButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify course plan successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyCoursePlanSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "other course is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on other course Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify other course  successfully click",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "other course is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on other course Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnOtherCourseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify other course  successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyOtherCourseSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Joining courses",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on course",
  "keyword": "When "
});
formatter.step({
  "name": "User should start the course",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Joining courses",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on course",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should start the course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldStartTheCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Click on create Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on courses",
  "keyword": "When "
});
formatter.step({
  "name": "User should able to Create A Batch",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Click on create Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on courses",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should able to Create A Batch",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldAbleToCreateABatch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Entering Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on create batch",
  "keyword": "When "
});
formatter.step({
  "name": "Enter details to create batch",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Entering Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on create batch",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnCreateBatch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter details to create batch",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.enterDetailsToCreateBatch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Copy Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click Create BATCH",
  "keyword": "When "
});
formatter.step({
  "name": "Click on copy batch",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Copy Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click Create BATCH",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickCreateBATCH()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on copy batch",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnCopyBatch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enter copy batch details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click Copy BATCH",
  "keyword": "When "
});
formatter.step({
  "name": "Enter Batch deTails",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter copy batch details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click Copy BATCH",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickCopyBATCH()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Batch deTails",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.enterBatchDeTails()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Clicking on Start Course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on Start course",
  "keyword": "When "
});
formatter.step({
  "name": "User should see coursedetails",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Clicking on Start Course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on Start course",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnStartCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see coursedetails",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldSeeCoursedetails()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Changing Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should see the batch names in dropdown options",
  "keyword": "When "
});
formatter.step({
  "name": "User should select other batch",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Changing Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the batch names in dropdown options",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldSeeTheBatchNamesInDropdownOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should select other batch",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldSelectOtherBatch()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should give mock test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on mock test",
  "keyword": "When "
});
formatter.step({
  "name": "click on play button",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should give mock test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on mock test",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnMockTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on play button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnPlayButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should take Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on quizzes",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should able see the quizzes",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should take Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on quizzes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should able see the quizzes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldAbleSeeTheQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty taking Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click Quizzes",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on take quizzes",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty taking Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click Quizzes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on take quizzes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnTakeQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should view quizz results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should should take Quizz",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on view quizz Results",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should view quizz results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should should take Quizz",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldShouldTakeQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on view quizz Results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnViewQuizzResults()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should take quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should take quizz",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on submit",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should take quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should take quizz",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldTakeQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should view Practice Venture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th Practice Venture",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Practice Venture",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should view Practice Venture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th Practice Venture",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThPracticeVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Practice Venture",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnPracticeVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should view PV Milestones",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th PV Milestones",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on PV Milestones",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should view PV Milestones",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th PV Milestones",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThPVMilestones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on PV Milestones",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnPVMilestones()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should click on faculty notes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th Faculty Notes",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Faculty Notes",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should click on faculty notes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th Faculty Notes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThFacultyNotes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Faculty Notes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnFacultyNotes()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should see the lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the lessons",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on lessons",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should see the lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the lessons",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on lessons",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should click on report tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the report module",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Report Module",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should click on report tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the report module",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheReportModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Report Module",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnReportModule()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Faculty should click on Notification icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Notification icon",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click onNotification icon",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should click on Notification icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Notification icon",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheNotificationIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click onNotification icon",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnNotificationIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should take quizz again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should take quizz again",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should Re-attempt quizz",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should take quizz again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should take quizz again",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldTakeQuizzAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should Re-attempt quizz",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldReAttemptQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in teaching mode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on START COURSe",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on teaching",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in teaching mode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on START COURSe",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSTARTCOURSe()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on teaching",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnTeaching()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in Manage Batches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Manage Batches",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Manage Batches",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in Manage Batches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Manage Batches",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheManageBatches()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Manage Batches",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnManageBatches()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in Run lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Run lessons",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Run lessons",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in Run lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Run lessons",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheRunLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Run lessons",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnRunLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in No Upcoming Module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the No Upcoming Module",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on No Upcoming Module",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in No Upcoming Module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the No Upcoming Module",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheNoUpcomingModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on No Upcoming Module",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnNoUpcomingModule()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should save and submit quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Save and continue",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click save and submit",
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
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should save and submit quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
    }
  ]
});
formatter.step({
  "name": "Faculty is on  Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Save and continue",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheSaveAndContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click save and submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickSaveAndSubmit()"
});
formatter.result({
  "status": "passed"
});
});