Feature: UI Test Automation
  @UI
  Scenario: A UI Sample Scenario
    Given I'm on the google homepage
    When I search for "apple"
    Then I should be navigated to the search result page