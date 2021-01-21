/// <reference types="cypress" />

let user


describe('Sitamoto', () => {

        it('View Dashboard Sitamoto', () => {
            cy.visit('https://sitaweb.vasdev.co.id/login')

            // cy.get('#username').type('marabotu44')
            // cy.get('#password').type('secret1234')
            // cy.get('#LoginBtn').click('')
            // cy.get('.btn-link').click('')
            // cy.get('a > .btn').click('')
            cy.get('#gotoregister').click('')
            cy.get('#name').type('anjay comm')
            cy.get('#email').type('rifky.arsy1-comm1@yahoo.com')
            cy.get('#phone').type('0000000777774')
            cy.get('#nextBtn1').click('')

            cy.get('#username').type('marabotu1')
            cy.get('#password').type('hiyahiya')
            cy.get('#repassword').type('hiyahiya')
            cy.get('#nextBtn2').click('')

            cy.get('#city').select('Bali')
            cy.get('#typemeter').select('Prepaid')
            cy.get('#basetariff').select('Social')
            cy.get('#powerrange').select('250 up to 450')
            cy.get('#btnRegist').click('')

        })
})