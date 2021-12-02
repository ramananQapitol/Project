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
  "name": "Student should click on next button",
  "keyword": "When "
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should click on next button",
  "keyword": "When "
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: /tmp/.com.google.Chrome.liPfXb}, goog:chromeOptions: {debuggerAddress: localhost:40773}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b45edca104cdd10de7e4adaf673893e7\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat com.step.StepDefinitionStudent.studentShouldAbleToEnterPassword(StepDefinitionStudent.java:125)\n\tat ✽.Student should able to enter password \"Admin@123\"(Features/loginstudent.feature:63)\n",
  "status": "failed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter new password \"\u003cpass\u003e\"",
  "keyword": "And "
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter new password \"ADMIadmin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterNewPassword(String)"
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
  "name": "LW_TC_08_09 Verify if Sign in button is not enabled without entering any of the the fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter Institution code\"\u003ccode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should re-enter valid email\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should enter the valid password \"\u003cpasskey\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should confirm password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Should should click on SignIn Button",
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
        "code",
        "username",
        "passkey",
        "password"
      ]
    },
    {
      "cells": [
        "student246@yopmail.com",
        "QAPI5260",
        "student246@yopmail.com",
        "ADMIadmin",
        "ADMIadmin"
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_08_09 Verify if Sign in button is not enabled without entering any of the the fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter Institution code\"QAPI5260\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterInstitutionCode(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d95.0.4638.69)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: /tmp/.com.google.Chrome.aMlDVO}, goog:chromeOptions: {debuggerAddress: localhost:40107}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fe598f6f501cb0d7a3bbbef487d4faf5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat com.step.StepDefinitionStudent.studentShouldEnterInstitutionCode(StepDefinitionStudent.java:158)\n\tat ✽.Student should enter Institution code\"QAPI5260\"(Features/loginstudent.feature:88)\n",
  "status": "failed"
});
formatter.step({
  "name": "Student should re-enter valid email\"student246@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldReEnterValidEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should enter the valid password \"ADMIadmin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should confirm password \"ADMIadmin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldConfirmPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Should should click on SignIn Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.shouldShouldClickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Student should click on next button",
  "keyword": "When "
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should click on next button",
  "keyword": "When "
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able to see Hamburger",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to see Hamburger",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToSeeHamburger()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "Student should see start or resume button",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should see start or resume button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldSeeStartOrResumeButton()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "LW_TC_50 Verify whether the student is able to change the batch  name while creating",
  "description": "    the Venture group.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click courses",
  "keyword": "And "
});
formatter.step({
  "name": "Student should create Practice venture group",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should edit Batch Id",
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
  "name": "LW_TC_50 Verify whether the student is able to change the batch  name while creating",
  "description": "    the Venture group.",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should create Practice venture group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCreatePracticeVentureGroup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should edit Batch Id",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEditBatchId()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "LW_TC_74 Veriyf if Student clicks on the Submit button",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "LW_TC_74 Veriyf if Student clicks on the Submit button",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "LW_TC_75 Verify if Student clicks on the back button",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "LW_TC_75 Verify if Student clicks on the back button",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "LW_TC_77_78 Verify if Student can edit the uploaded document",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "Student should able to remove Upload document option",
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
  "name": "LW_TC_77_78 Verify if Student can edit the uploaded document",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to remove Upload document option",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToRemoveUploadDocumentOption()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "student click resume",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student click resume",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickResume()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "student click resume",
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
  "name": "verify it enter or not",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student click resume",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickResume()"
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
  "name": "verify it enter or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.verifyItEnterOrNot()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.step({
  "name": "student click resume",
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
  "name": "verify it click or not",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student click resume",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentClickResume()"
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
  "name": "verify it click or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.verifyItClickOrNot()"
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
      "name": "@tag41"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab",
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
      "name": "@tag41"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\"faculty_activities_title\"] //following::div[13]\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: /tmp/.com.google.Chrome.a9Z2Hq}, goog:chromeOptions: {debuggerAddress: localhost:33175}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bd9f5e555e61da845a5c5b45658f0910\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"faculty_activities_title\"] //following::div[13]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.step.StepDefinitionStudent.studentShouldClickOnResumeStartButton(StepDefinitionStudent.java:612)\n\tat ✽.Student should click on resume/start button(Features/loginstudent.feature:573)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on pvmilestones tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.clickOnPvmilestonesTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "LW_S_S63  Verify whether the student is able to view the assignments or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag42"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.step({
  "name": "click on pvmilestones tab and check whether the student is able to view the assignments.",
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
      "name": "@tag42"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
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
formatter.scenarioOutline({
  "name": "LW_S_S66 Verify whether the student is able to submit the assignment or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag43"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
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
      "name": "@tag43"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
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
formatter.scenarioOutline({
  "name": "LW_S_S67 Verify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag44"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
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
      "name": "@tag44"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
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
formatter.scenarioOutline({
  "name": "LW_S_S67 \tVerify whether the student is able to resubmit the assignment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag45"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
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
      "name": "@tag45"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
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
formatter.scenarioOutline({
  "name": "LW_TC_86,90 Check Student should be able to submit assisment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag46"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"\u003cusername\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should enter the valid Password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.step({
  "name": "Student should click on resume/start button",
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
  "name": "student should click on mile stone",
  "keyword": "And "
});
formatter.step({
  "name": "student should close the browers",
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
      "name": "@tag46"
    }
  ]
});
formatter.step({
  "name": "Student Should Enter Valid User Name \"student1212@yopmail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValidUserName1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on next Button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should enter the valid Password \"pass\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterTheValidPassword1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on the signin Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnTheSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should click on resume/start button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnResumeStartButton()"
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
  "name": "student should click on mile stone",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.student_should_click_on_mile_stone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should close the browers",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.student_should_close_the_browers()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
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
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "name": "LW_TC_46 LW_TC_55  Verify whether the studentr is able to join the venture group which is created.",
  "description": "",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Select a group to join or add a new group\u0027)]//following::div[8]\"}\n  (Session info: chrome\u003d95.0.4638.69)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 95.0.4638.69, chrome: {chromedriverVersion: 95.0.4638.69 (6a1600ed572fe..., userDataDir: /tmp/.com.google.Chrome.QduLY1}, goog:chromeOptions: {debuggerAddress: localhost:39211}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9342daf229db9b5c28c91465dee0fb52\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Select a group to join or add a new group\u0027)]//following::div[8]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.pom.LoginPomStudent.Create_VentureGroup(LoginPomStudent.java:106)\n\tat com.step.StepDefinitionStudent.studentShouldClickOnCreate_group(StepDefinitionStudent.java:827)\n\tat ✽.Student should click on create_group(Features/loginstudent.feature:698)\n",
  "status": "failed"
});
formatter.step({
  "name": "Student should fill mandatory fields and click on create",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldFillMandatoryFieldsAndClickOnCreate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should logout from his profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLogoutFromHisProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "LW_TC_57 LW_TC_58 Verify whether the student admin is able to delete the other students who all",
  "description": "are there in the venture group.",
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should in HOME Page",
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
  "description": "are there in the venture group.",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: #0 0x56204dea1463 \u003cunknown\u003e\n#1 0x56204d979678 \u003cunknown\u003e\n#2 0x56204d99c892 \u003cunknown\u003e\n#3 0x56204d9983bd \u003cunknown\u003e\n#4 0x56204d9d2480 \u003cunknown\u003e\n#5 0x56204d9cc683 \u003cunknown\u003e\n#6 0x56204d9a2b64 \u003cunknown\u003e\n#7 0x56204d9a3b55 \u003cunknown\u003e\n#8 0x56204ded10fe \u003cunknown\u003e\n#9 0x56204dee69d0 \u003cunknown\u003e\n#10 0x56204ded2055 \u003cunknown\u003e\n#11 0x56204dee7e18 \u003cunknown\u003e\n#12 0x56204dec682b \u003cunknown\u003e\n#13 0x56204df02f98 \u003cunknown\u003e\n#14 0x56204df03118 \u003cunknown\u003e\n#15 0x56204df1e59d \u003cunknown\u003e\n#16 0x7f07454b6609 \u003cunknown\u003e\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.step.StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage(StepDefinitionStudent.java:31)\n\tat ✽.Student is on the Learnwise Login Page(Features/loginstudent.feature:710)\n",
  "status": "failed"
});
formatter.step({
  "name": "Student should enter valid \"student1215@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentureTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click on Join_group",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnJoin_group()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should select group name",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldSelectGroupName()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should logout from that profile",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLogoutFromThatProfile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "LW_TC_60 LW_TC_61 Verify whether the Student is able to view the venture members or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag51"
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
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.step({
  "name": "Student should able to enter valid password \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Student should in HOME Page",
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
      "name": "@tag51"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: #0 0x557ce35b6463 \u003cunknown\u003e\n#1 0x557ce308e678 \u003cunknown\u003e\n#2 0x557ce30b1892 \u003cunknown\u003e\n#3 0x557ce30ad3bd \u003cunknown\u003e\n#4 0x557ce30e7480 \u003cunknown\u003e\n#5 0x557ce30e1683 \u003cunknown\u003e\n#6 0x557ce30b7b64 \u003cunknown\u003e\n#7 0x557ce30b8b55 \u003cunknown\u003e\n#8 0x557ce35e60fe \u003cunknown\u003e\n#9 0x557ce35fb9d0 \u003cunknown\u003e\n#10 0x557ce35e7055 \u003cunknown\u003e\n#11 0x557ce35fce18 \u003cunknown\u003e\n#12 0x557ce35db82b \u003cunknown\u003e\n#13 0x557ce3617f98 \u003cunknown\u003e\n#14 0x557ce3618118 \u003cunknown\u003e\n#15 0x557ce363359d \u003cunknown\u003e\n#16 0x7f586938b609 \u003cunknown\u003e\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.step.StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage(StepDefinitionStudent.java:31)\n\tat ✽.Student is on the Learnwise Login Page(Features/loginstudent.feature:729)\n",
  "status": "failed"
});
formatter.step({
  "name": "Student should enter valid \"student1214@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldEnterValid(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click on next button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnNextButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should able to enter valid password \"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldAbleToEnterValidPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should in HOME Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldInHOMEPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickResumeButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click on Practice venture tab",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickOnPracticeVentureTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should click View venture members",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldClickViewVentureMembers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should delete the venture",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldDeleteTheVenture()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "LW_TC_ Registration Page",
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
  "name": "student should login with Random Mail Id and should verify that mail",
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
        "username",
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_ Registration Page",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /usr/bin/google-chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027rutisqq429\u0027, ip: \u0027192.168.43.25\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.4.0-42-generic\u0027, java.version: \u002716.0.2\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: #0 0x55f269fce463 \u003cunknown\u003e\n#1 0x55f269aa6678 \u003cunknown\u003e\n#2 0x55f269ac9892 \u003cunknown\u003e\n#3 0x55f269ac53bd \u003cunknown\u003e\n#4 0x55f269aff480 \u003cunknown\u003e\n#5 0x55f269af9683 \u003cunknown\u003e\n#6 0x55f269acfb64 \u003cunknown\u003e\n#7 0x55f269ad0b55 \u003cunknown\u003e\n#8 0x55f269ffe0fe \u003cunknown\u003e\n#9 0x55f26a0139d0 \u003cunknown\u003e\n#10 0x55f269fff055 \u003cunknown\u003e\n#11 0x55f26a014e18 \u003cunknown\u003e\n#12 0x55f269ff382b \u003cunknown\u003e\n#13 0x55f26a02ff98 \u003cunknown\u003e\n#14 0x55f26a030118 \u003cunknown\u003e\n#15 0x55f26a04b59d \u003cunknown\u003e\n#16 0x7f79b823b609 \u003cunknown\u003e\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat com.step.StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage(StepDefinitionStudent.java:31)\n\tat ✽.Student is on the Learnwise Login Page(Features/loginstudent.feature:746)\n",
  "status": "failed"
});
formatter.step({
  "name": "student should login with Random Mail Id and should verify that mail",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLoginWithRandomMailIdAndShouldVerifyThatMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});