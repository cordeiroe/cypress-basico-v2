Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (firstName, lastName, email, phone, text)=>{
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#email').type(email)
    cy.get('#phone').type(phone)
    cy.get('#open-text-area').type(text, {delay: 0})
    cy.get('.button[type="submit"]').click()
})

Cypress.Commands.add('fillMandatoryFieldsAndClear', (firstName, lastName, email, phone, text) =>{
    cy.get('#firstName').type(firstName).clear().should('have.value', '')
    cy.get('#lastName').type(lastName).clear().should('have.value', '')
    cy.get('#email').type(email).clear().should('have.value', '')
    cy.get('#phone').type(phone).clear().should('have.value', '')
    cy.get('#open-text-area').type(text, {delay: 0}).clear().should('have.value', '')
})

Cypress.Commands.add('fillFieldsExceptMandatoryPhone', () => {
    cy.get('#firstName').type('Emerson')
    cy.get('#lastName').type('Marques')
    cy.get('#email').type('emerson@emerson.com')
    cy.get('#open-text-area').type('Texto', {delay: 0})
    cy.get('.button[type="submit"]').click()

})