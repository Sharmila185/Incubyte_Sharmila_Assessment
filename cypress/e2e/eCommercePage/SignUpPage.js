import { faker } from '@faker-js/faker';

class SignUpPage {

    // Visit the website
    homePage() {
        cy.visit("https://magento.softwaretestingboard.com/")
    }

    // Navigate to Registration Page
    registrationPage() {
        cy.contains("Create an Account").click()
    }

    // Enter a valid details
    createAccount(firstName, lastName, email, password, cnfmPassword) {
        cy.get("#firstname").type(firstName)
        cy.get("#lastname").type(lastName)
        cy.get('#email_address').type(email)
        cy.get('#password').type(password)
        cy.get('#password-confirmation').type(cnfmPassword)
        cy.get("[title='Create an Account']").click()
    }

    // Validate URL
    validateURL() {
        cy.url().then((url) => {
            expect(url).to.be.includes('/customer/account/')
        })
    }

    // validate the registration completed
    validateRegistration() {

        cy.get(".message-success div").then((message) => {
            cy.wait(2000)
            const reg_message = message.text()
            expect(reg_message).to.be.include('Thank you for registering with Main Website Store.')
        })
    }

    // Take a Screenshot
    screenshot() {
        cy.screenshot("Registration Completed")
    }
}
export default SignUpPage