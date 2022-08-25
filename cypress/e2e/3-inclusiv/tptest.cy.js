/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import{slowCypressDown} from 'cypress-slow-down'
slowCypressDown(3000)
describe('on va tester Mon Projet PortFolio', async () => {
    beforeEach(() => {
        cy.visit('https://thajavola.github.io/PortFolio/')
       
      })
  
   
    it('on va tester le contenu', async () => {
        
        cy.get(':nth-child(2) > .menu-btn').click()
        cy.get(':nth-child(3) > .menu-btn').click()
        cy.get(':nth-child(4) > .menu-btn').click()
        cy.get(':nth-child(5) > .menu-btn').click()
        cy.get(':nth-child(6) > .menu-btn').click()
        cy.get('.scroll-up-btn > .fas').click()
        
        cy.viewport('ipad-mini')
        
        cy.get(':nth-child(5) > .menu-btn').click()
        cy.get('div.menu-btn > .fas').click()
        
       
        
        cy.get(':nth-child(2) > .menu-btn').click()
        
       
        
        
        cy.viewport('iphone-xr')
        
        cy.get('#services > .max-width > .title').scrollIntoView()
        
        cy.viewport('macbook-16')
        cy.get('#home').scrollIntoView()

    })

    
   
    
})
  