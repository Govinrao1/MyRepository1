Feature: Gmail Login

  Scenario Outline: Validate password in login page with cross-browser
    Given launch site using "<bn>" in "<env>" environment
    When enter userid as "magnitiait"
    And click userid next button
    And enter password as "<pwd>"
    And click password next button
    Then validate outcome related to given password criteria like "<pwdcriteria>"
    When close site

    @smoketest
    Examples: 
      | pwd          | pwdcriteria | bn     | env |
      | Magnitia@262 | valid       | chrome | QA  |

    Examples: 
      | pwd          | pwdcriteria | bn      | env |
      | Magnitia@262 | valid       | firefox | QA  |
      | Magnitia@262 | valid       | edge    | QA  |
      | Magnitia@05  | invalid     | chrome  | QA  |
      | Magnitia@05  | invalid     | firefox | QA  |
      | Magnitia@05  | invalid     | edge    | QA  |
      |              | blank       | chrome  | QA  |
      |              | blank       | firefox | QA  |
      |              | blank       | edge    | QA  |
