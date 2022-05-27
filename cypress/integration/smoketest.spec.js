/// <reference types= "Cypress" />

beforeEach(()=>{

    cy.fixture('datos_prueba.json').then(function(datos){
        this.datos_pueba=datos
        cy.visit(this.datos_pueba.url)
    })
    
})
describe('Prueba pagina de inicio', function(){

    it('Validacion encabezado superior', function(){
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')
    })
    it('Validacion de columna', function(){
        cy.get('#online_banking_features > :nth-child(1) > h4').should('be.visible')
        cy.get('#money_map_link').should('be.visible')
    })
    
})

describe('Prueva E2E, transferencia de fondos', function(){

    it('prueba trasferencia de fondos', function(){
        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_pueba.username)
        cy.get('#user_password').type(this.datos_pueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(3)
        cy.get('#tf_amount').type('500')
        cy.get('#tf_description').type('Alquiler')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text', 'You successfully submitted your transaction.')
        cy.get('.board-content').should('be.visible')


       
    })
    
})