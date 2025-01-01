import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignUpPage from "../../eCommercePage/SignUpPage";
import { faker } from '@faker-js/faker';

const signupPage = new SignUpPage;

// Generate random sign-up details
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let email = faker.internet.email();
let password = "Pass1234@"
let cnfmPassword = "Pass1234@"

Given('The user navigates to the registration page', function() {
    signupPage.homePage();
    signupPage.registrationPage();
})

When('The user enter name, email, and password fields',function() {
    signupPage.createAccount(firstName,lastName,email,password,cnfmPassword);
})

Then('The user should be successfully registered',function() {
    signupPage.validateURL();
    signupPage.validateRegistration();
})

Then('The system should capture a screenshot of the confirmation page', function() {
    signupPage.screenshot();
})

