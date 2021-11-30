$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/loginstudent.feature");
formatter.feature({
  "name": "Login cucumber",
  "description": "",
  "keyword": "Feature"
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
});