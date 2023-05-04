@smoketest
Feature: Gmail Login

  Background: 
    Given launch site using "chrome" in "DEV" environment

  Scenario: Vaidate Gmail home page title
    Then title should be "Gmail"
    When close site

  Scenario: Vaidate Gmail page cookies
    Then cookies should be loaded
    When close site
