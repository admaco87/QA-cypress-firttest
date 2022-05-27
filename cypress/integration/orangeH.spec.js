/// <reference types= "Cypress" />

beforeEach(()=>{

    cy.fixture('datosorange.json').then(function(datos){
        this.datosorange=datos
        cy.visit(this.datosorange.url)
    })
    
})

describe('verificacion visibilidad', function(){
    it('validacion logo superior', function(){
        cy.get('#divLogo > img').should('be.visible')
        cy.get('#txtUsername').should('be.visible')
        cy.get('#btnLogin').should('be.visible')
    })
    it ('validacion visivilidad footer', function(){
        cy.get('#footer > :nth-child(1)').should('contain.text','OrangeHRM 4.10')
    })
})

describe.only('verificacion visibilidad', function(){
    it('operacion loggin', function(){
        cy.get('#txtUsername').type(this.datosorange.username)
        cy.get('#txtPassword').type(this.datosorange.password)
        cy.get('#btnLogin').click()
        cy.get('#menu_admin_viewAdminModule > b').click()
        cy.get('#btnAdd').click()
        cy.get('#UserHeading').contains('Add User')
        cy.get('#systemUser_employeeName_empName').type('Adrian')  
        cy.get('#systemUser_userName').type('Conti')
        cy.get('#systemUser_password').type('conti1234')
        cy.get('#systemUser_confirmPassword').type('conti1234')
   
    })
        
})

