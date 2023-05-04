$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/feature1.feature");
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
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
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
  "name": "title should be \"Gmail\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method3(java.lang.String)"
});
formatter.write("Gmail title test pased");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
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
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method7(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method4()"
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
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method7(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method4()"
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
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given userid criteria like \"blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method7(java.lang.String)"
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
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/feature2.feature");
formatter.feature({
  "name": "Gmail Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "launch site using \"\u003cbn\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.step({
  "name": "enter password as \"\u003cpwd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"\u003cpwdcriteria\u003e\"",
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
        "pwd",
        "pwdcriteria",
        "bn"
      ]
    },
    {
      "cells": [
        "Magnitia@05",
        "valid",
        "chrome"
      ]
    },
    {
      "cells": [
        "Magnitia@05",
        "valid",
        "firefox"
      ]
    },
    {
      "cells": [
        "Magnitia@05",
        "valid",
        "opera"
      ]
    },
    {
      "cells": [
        "Magnitia@06",
        "invalid",
        "chrome"
      ]
    },
    {
      "cells": [
        "Magnitia@06",
        "invalid",
        "firefox"
      ]
    },
    {
      "cells": [
        "Magnitia@06",
        "invalid",
        "opera"
      ]
    },
    {
      "cells": [
        "",
        "blank",
        "chrome"
      ]
    },
    {
      "cells": [
        "",
        "blank",
        "firefox"
      ]
    },
    {
      "cells": [
        "",
        "blank",
        "opera"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@05\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat gluecode.StepDefs1.method10(StepDefs1.java:161)\r\n\tat ✽.validate outcome related to given password criteria like \"valid\"(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature2.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"firefox\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@05\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat gluecode.StepDefs1.method10(StepDefs1.java:161)\r\n\tat ✽.validate outcome related to given password criteria like \"valid\"(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature2.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"opera\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@05\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat org.testng.Assert.assertTrue(Assert.java:54)\r\n\tat gluecode.StepDefs1.method10(StepDefs1.java:161)\r\n\tat ✽.validate outcome related to given password criteria like \"valid\"(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature2.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@06\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Invalid pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"firefox\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@06\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Invalid pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"opera\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@06\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Invalid pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Blank pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"firefox\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Blank pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate password in login page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"opera\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate outcome related to given password criteria like \"blank\"",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs1.method10(java.lang.String)"
});
formatter.write("Blank pwd test was passed");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close site",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/feature3.feature");
formatter.feature({
  "name": "Gmail compose",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate mail compose",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@05\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send mail and test",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method11(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027Compose\u0027]\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KALAMSIR-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Mindq-pc\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64773}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3013f895f4dde633e04ec3dcf6f295f9\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027Compose\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages.ComposePage.clickCompose(ComposePage.java:54)\r\n\tat gluecode.StepDefs1.method11(StepDefs1.java:172)\r\n\tat ✽.send mail and test(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature3.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "do logout",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method12()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "quit site",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/feature4.feature");
formatter.feature({
  "name": "Gmail compose",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate mail compose",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter userid as \"magnitiait\"",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method5(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click userid next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method6()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter password as \"Magnitia@05\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method8(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click password next button",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method9()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "send mail and test by taking data from excel",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs2.method13()"
});
formatter.result({
  "error_message": "java.io.IOException: While trying to invoke \u0027createWorkbook\u0027 on factory org.apache.poi.xssf.usermodel.XSSFWorkbookFactory and arguments [java.io.FileReader@62b475e2]\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.createWorkbook(WorkbookFactory.java:357)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.createXSSFWorkbook(WorkbookFactory.java:316)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.create(WorkbookFactory.java:175)\r\n\tat gluecode.StepDefs2.method13(StepDefs2.java:44)\r\n\tat ✽.send mail and test by taking data from excel(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature4.feature:9)\r\nCaused by: java.lang.NoSuchMethodException: org.apache.poi.xssf.usermodel.XSSFWorkbookFactory.createWorkbook(java.io.FileReader)\r\n\tat java.lang.Class.getMethod(Unknown Source)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.createWorkbook(WorkbookFactory.java:340)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.createXSSFWorkbook(WorkbookFactory.java:316)\r\n\tat org.apache.poi.ss.usermodel.WorkbookFactory.create(WorkbookFactory.java:175)\r\n\tat gluecode.StepDefs2.method13(StepDefs2.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "do logout",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs1.method12()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "quit site",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs1.method4()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/feature5.feature");
formatter.feature({
  "name": "Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "validate registration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "launch site using \"\u003cbn\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "click on create account",
  "keyword": "When "
});
formatter.step({
  "name": "click on for myself",
  "keyword": "And "
});
formatter.step({
  "name": "fill fields with \"\u003cfn\u003e\",\"\u003cln\u003e\",\"\u003cuid\u003e\",\"\u003cpwd\u003e\" and click next",
  "keyword": "And "
});
formatter.step({
  "name": "do otp verification if required for \"\u003ccountry\u003e\" with \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "fill fields with \"\u003crecovery\u003e\",\"\u003cmonth\u003e\",\"\u003cday\u003e\",\"\u003cyear\u003e\",\"\u003cgender\u003e\" and click final next",
  "keyword": "And "
});
formatter.step({
  "name": "validate output message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "bn",
        "fn",
        "ln",
        "uid",
        "pwd",
        "country",
        "phone",
        "recovery",
        "month",
        "day",
        "year",
        "gender"
      ]
    },
    {
      "cells": [
        "chrome",
        "abdul",
        "kalam",
        "jhdfbjbg.67",
        "q1w2e3r4@123",
        "United States",
        "8104075295",
        "magnitiait@gmail.com",
        "May",
        "20",
        "2000",
        "Male"
      ]
    }
  ]
});
formatter.scenario({
  "name": "validate registration operation",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "launch site using \"chrome\"",
  "keyword": "Given "
});
formatter.match({
  "location": "gluecode.StepDefs1.method2(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on create account",
  "keyword": "When "
});
formatter.match({
  "location": "gluecode.StepDefs2.method14()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on for myself",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs2.method15()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill fields with \"abdul\",\"kalam\",\"jhdfbjbg.67\",\"q1w2e3r4@123\" and click next",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs2.method16(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "do otp verification if required for \"United States\" with \"8104075295\"",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs2.method17(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.id: phoneNumberId\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat gluecode.StepDefs2.method17(StepDefs2.java:111)\r\n\tat ✽.do otp verification if required for \"United States\" with \"8104075295\"(file:///E:/batch247/org.magnitia5.gmailbddtddpico/src/test/resources/features/feature5.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#phoneNumberId\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KALAMSIR-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\Mindq-pc\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:64938}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84c5c48345eb709f3e0fdbcc48b5c6be\n*** Element info: {Using\u003did, value\u003dphoneNumberId}\r\n\tat sun.reflect.GeneratedConstructorAccessor33.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat gluecode.StepDefs2.method17(StepDefs2.java:111)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:124)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:114)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "fill fields with \"magnitiait@gmail.com\",\"May\",\"20\",\"2000\",\"Male\" and click final next",
  "keyword": "And "
});
formatter.match({
  "location": "gluecode.StepDefs2.method18(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "validate output message",
  "keyword": "Then "
});
formatter.match({
  "location": "gluecode.StepDefs2.method19()"
});
formatter.result({
  "status": "skipped"
});
});