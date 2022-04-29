///<reference types="Cypress" />

const runBefore = () =>{
    beforeEach(() => 
        cy.visit("./src/index.html"));
}

const longText = 'Ainda assim, existem dúvidas a respeito de como a determinação clara de objetivos faz parte de um processo de gerenciamento de alternativas às soluções ortodoxas.'

    // Exercicio aula 1
describe("Testes para a página CAC-TAT", () => {

    runBefore();

    it("verifica se titulo da pagina não é igual a Central de Atendimento ao Cliente TAT", () => {
        cy.title()
            .should("not.be.equal", "Central de Atendimento ao Cliente TAT AAA");
    });

    it("verifica se titulo da pagina é igual a Central de Atendimento ao Cliente TAT", () => {
        cy.title()
            .should("eq", "Central de Atendimento ao Cliente TAT");
    });

    // Exercicio aula 2 e exercicio extra 1

    it("Deve digitar em todos os campos obrigatórios", () => {
        cy.get('#firstName')
            .type('Emerson')
        cy.get('#lastName')
            .type('Marques')
        cy.get('#email')
            .type('emersoncmarques@outlook.com')
        cy.get('#phone')
            .type(12345)
        cy.get('#open-text-area')
            .type(longText, {delay: 0})
        cy.get('.button[type="submit"]')
            .click()
        cy.get('.success')
            .should('be.visible')
    });

    // Exercicio extra 2, aula 2

    it('Deve estourar uma mensagem de erro quando o email estiver digitado de forma incorreta', () => {
        cy.get('#firstName')
            .type('Emerson')
        cy.get('#lastName')
            .type('Marques')
        cy.get('#email')
            .type('emersoncmarques!outlook.com')
        cy.get('#open-text-area')
            .type('Teste')
        cy.get('.button[type="submit"]')
            .click()
        cy.get('.error')
            .should('be.visible')
    });

    // Exercicio extra 3, aula 2

    it('Deve estourar uma mensagem de erro quando o telefone for cadastrado usando um caracter incorreto', () => {
        cy.get('#firstName')
            .type('Emerson')
        cy.get('#lastName')
            .type('Marques')
        cy.get('#email')
            .type('emersoncmarques@outlook.com')
        cy.get('#phone')
            .type('abc')
            .should('have.value', '')
        cy.get('#open-text-area')
            .type('Teste')
        cy.get('.button[type="submit"]')
            .click()
        cy.get('.success')
            .should('be.visible')
    });

    // Exercicio extra 4, aula 2
    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.get('#firstName')
            .type('Emerson')
        cy.get('#lastName')
            .type('Marques')
        cy.get('#email')
            .type('emersoncmarques@outlook.com')
        cy.get('#phone-checkbox')
            .click()
        cy.get('#open-text-area')
            .type('Teste')
        cy.get('.button[type="submit"]')
            .click()
        cy.get('.error')
            .should('be.visible')
    });

    //Exercicio extra 5, aula 2

    it("Deve digitar nos campos e posteriormente apagar os dados digitados", () => {
        cy.get('#firstName')
            .type('Emerson')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('Marques')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('emersoncmarques@outlook.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type(12345)
            .clear()
            .should('have.value', '')
        cy.get('#open-text-area')
            .type(longText, {delay: 0})
            .clear()
            .should('have.value', '')
    });

    //Exercicio extra 6, aula 2
    
    it("Deve digitar nos campos, posteriormente apagar os dados digitados e tentar submeter o formulário vázio", () => {
        cy.get('.button[type="submit"]')
            .click()
        cy.get('.error')
            .should('be.visible')
    });
});