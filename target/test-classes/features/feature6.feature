Feature: Gmail compose
	
	Scenario: Validate mail compose
    Given launch site using "chrome" in "STG" environment
    When enter userid as "magnitiait"
    And click userid next button
    And enter password as "Magnitia@262"
    And click password next button
    And send mail and test by using excel data "src\test\resources\testdata\mailtestdata.xlsx"
    When do logout
    And quit site
