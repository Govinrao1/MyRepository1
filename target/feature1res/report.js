$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/feature1.feature");
formatter.feature({
  "name": "Gmail Login",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs1.method2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Vaidate Gmail home page title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "title should be \"gmail\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs1.method3(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat gluecode.StepDefs1.method3(StepDefs1.java:65)\r\n\tat ✽.title should be \"gmail\"(src/test/resources/features/feature1.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Validate Userid in home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter userid as \"\u003cuid\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"\u003cuidcriteria\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "uid",
        "uidcriteria"
      ]
    },
    {
      "cells": [
        "magnitiait",
        "valid"
      ]
    },
    {
      "cells": [
        "magnitianonit",
        "invalid"
      ]
    },
    {
      "cells": [
        "",
        "blank"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs1.method2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Userid in home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method5(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs1.method7(String)"
});
formatter.write("Valid uid test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs1.method2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Userid in home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter userid as \"magnitianonit\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method5(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs1.method7(String)"
});
formatter.write("Invalid uid test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs1.method2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Userid in home page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "enter userid as \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method5(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs1.method7(String)"
});
formatter.write("Blank uid test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
});