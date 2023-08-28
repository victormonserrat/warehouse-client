Feature: Add sale

  In order to update the stock
  As a warehouse worker
  I want to add a sale
  
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

  Scenario Outline: Selling an item
    When I list the inventory
    And I sell <quantity> <item>
    Then I should see the following example <example> products and quantities:
      | example | name         | stock |
      | 0       | Dining Chair | 1     |
      | 0       | Dining Table | 1     |
      | 1       | Dining Chair | 0     |
      | 1       | Dining Table | 0     |
      | 2       | Dining Chair | 1     |
      | 2       | Dining Table | 0     |
      
    Examples:
      | example | item         | quantity |
      | 0       | Dining Chair | 1        |
      | 1       | Dining Chair | 2        |
      | 2       | Dining Table | 1        |

  Scenario: Selling an item with unreliable API
    When I list the inventory
    And I sell 1 Dining Chair and the API is unreliable
    Then I should see the following products and quantities:
      | name         | stock |
      | Dining Chair | 1     |
      | Dining Table | 1     |

