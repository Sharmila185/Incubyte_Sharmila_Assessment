Feature: User Sign-Up Process

    Scenario: Ensure user can register with valid information
        Given The user navigates to the registration page
        When The user enter name, email, and password fields
        Then The user should be successfully registered
        And The system should capture a screenshot of the confirmation page
