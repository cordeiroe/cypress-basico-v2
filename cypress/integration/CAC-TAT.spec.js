///<reference types="Cypress" />

const longText = 'Ainda assim, existem dúvidas a respeito de como a determinação clara de objetivos faz parte de um processo de gerenciamento de alternativas às soluções ortodoxas.'
const threeSecInMs = 3000

    // Exercicio aula 1
describe("Testes para a página CAC-TAT", () => {

    beforeEach(() => cy.visit("./src/index.html"));

    // it("verifica se titulo da pagina não é igual a Central de Atendimento ao Cliente TAT", () => {
    //     cy.title().should("not.be.equal", "Central de Atendimento ao Cliente TAT AAA");
    // });

    it("verifica se titulo da pagina é igual a Central de Atendimento ao Cliente TAT", () => {
        cy.title()
            .should("eq", "Central de Atendimento ao Cliente TAT");
    });

    // Exercicio aula 2 e exercicio extra 1

    it("Deve digitar em todos os campos obrigatórios", () => {

        cy.clock()

        cy.fillMandatoryFieldsAndSubmit('Emerson', 'Marques', 'emerson@emerson.com', '123456789', longText)
        
        cy.get('.success')
            .should('be.visible')
        
        cy.tick(threeSecInMs)

        cy.get('.success')
            .should('not.be.visible')
    });

    // Exercicio extra 2, aula 2

    it('Deve estourar uma mensagem de erro quando o email estiver digitado de forma incorreta', () => {
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit('Emerson', 'Marques', 'emerson!emerson.com', '123456789', longText)
        cy.get('.error')
            .should('be.visible')

        cy.tick(threeSecInMs)

        cy.get('.error')
            .should('not.be.visible')
        
        
    });

    // Exercicio extra 3, aula 2

    it('Deve estourar uma mensagem de erro quando o telefone for cadastrado usando um caracter incorreto', () => {
        cy.clock()
        
        cy.fillMandatoryFieldsAndSubmit('Emerson', 'Marques', 'emerson@emerson.com', '1234a6789', longText)
        cy.get('.success')
            .should('be.visible')
            
        cy.tick(threeSecInMs)

        cy.get('.success')
            .should('not.be.visible')
            
            
    });

    // Exercicio extra 4, aula 2
    
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
        cy.clock()
        
        cy.get('#phone-checkbox')
            .check()
        cy.fillMandatoryFieldsAndSubmit('Emerson', 'Marques', 'emerson@emerson.com', ' ', longText)

        cy.get('.error')
            .should('be.visible')
        
        cy.tick(threeSecInMs)

        cy.get('.error')
            .should('not.be.visible')
        
        
    });

    //Exercicio extra 5, aula 2

    it("Deve digitar nos campos e posteriormente apagar os dados digitados", () => {
        cy.fillMandatoryFieldsAndClear('Emerson', 'Marques', 'emerson@emerson.com', '123456789', longText)

    });

    //Exercicio extra 6, aula 2
    
    it("Deve digitar nos campos, posteriormente apagar os dados digitados e tentar submeter o formulário vázio", () => {
        cy.clock()
        
        cy.contains('.button', 'Enviar')
            .click()
        cy.get('.error')
            .should('be.visible')

        cy.tick(threeSecInMs)

        cy.get('.error')
            .should('not.be.visible')
    });

    it('envia o formulário com sucesso usando um comando customizado', () => {
        cy.clock()

        cy.fillMandatoryFieldsAndSubmit('Emerson', 'Marques', 'emerson@emerson.com', '123456789', longText)

        cy.get('.success')
            .should('be.visible')
        
        cy.tick(threeSecInMs)

        cy.get('.success')
            .should('not.be.visible')
            
            
    });

    it('seleciona um produto (youtube) por seu texto', () => {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube') 
    });

    it('seleciona um produto (mentoria) por seu valor', () => {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    });

    it('seleciona um produto (blog) por seu índice', () => {
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog')
    });

    it('marca o tipo de atendimento para "Feedback"', () => {
        cy.get('input[type="radio"]')
            .check('feedback')
            .should('have.value', 'feedback')
    });

    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(($radio)=> {
                cy.wrap($radio)
                    .check()
                cy.wrap($radio)
                    .should('be.checked')
            })
    });

    it('deve marcar ambos os checkboxes e depois desmarcar o ultimo', () => {
        cy.get('input[type="checkbox"]')
            .check()
            .last()
            .uncheck()
            .should('not.be.checked')
    });

    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')   
            .then(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })     
    });

    it('seleciona um arquivo da pasta fixtures usando a função drag and drop', () => {
        cy.get('input[type="file"')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop'})   
            .then(input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })     
    });

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json', { encoding: null}).as('fileApelidado')
        cy.get('input[type="file"]')
            .should('not.have.value')
            .selectFile('@fileApelidado')
            .then (input => {
                expect(input[0].files[0].name).to.equal('example.json')
            })
    });

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    });

    it('acessa a página da política de privacidade removendo o target e então clicanco no link', () => {
        cy.get('#privacy a')
            .invoke('removeAttr', 'target')
            .click()
        cy.url('#privacy a')
            .should('include', 'privacy.html')
        
    });

    it('testa a página da política de privavidade de forma independente', () => {
        cy.get('#privacy a').click()
        
    });

    
});