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
});