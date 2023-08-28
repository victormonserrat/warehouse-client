Feature: List inventory

  In order to keep track of stock
  As a warehouse worker
  I want to list the available products and quantities, and the articles in each product
  
  Background: 
    Given the warehouse has the following articles:
      | name      | stock |
      | Leg       | 12    |
      | Screw     | 17    |
      | Seat      | 2     |
      | Table Top | 1     |
    And the following products:
      | name         | parts                     |
      | Dining Chair | Leg:4,Screw:8,Seat:1      |
      | Dining Table | Leg:4,Screw:8,Table Top:1 |


  Scenario: Listing all
    When I list the inventory
    Then I should see the following products and quantities:
      | name         | stock |
      | Dining Chair | 2     |
      | Dining Table | 1     |
    And the articles in each product

  Scenario: Listing all with unreliable API
    Given the API is unreliable
    When I list the inventory
    Then I should see the following products and quantities:
      | name         | stock |
      | Dining Chair | 2     |
      | Dining Table | 1     |
    And the articles in each product
