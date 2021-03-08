Feature: API Test Automation
  @API
  Scenario: An API Sample Scenario
    Given I have the api ready for a get request
    When I hit the get "posts" endpoint
    Then I should be able to get a list of posts