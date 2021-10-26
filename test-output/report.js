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
      "name": "@tags1"
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
      "name": "@tags1"
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
});