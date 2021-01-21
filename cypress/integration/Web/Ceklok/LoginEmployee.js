/// <reference types="cypress" />

let user

describe('Auth', () => {

        it('Login Admin HR', () => {
            cy.visit('ceklok.vasdev.co.id/employee/login')
            cy.get('#company').type('PBDN206120')
            cy.get('#username').type('berkah1')
            cy.get('#password').type('secret1234')
            cy.get('.btn-login').click('')
            .then((res) => {
              cy.log(res)

              const OTP = res.body
              const status = res.status
              const duration = res.duration
              const headers = res.headers
              cy.writeFile('ccypress/fixtures/Ceklok_Api/Auth.json', { status: status, duration: duration, headers: headers, OTP })
            })

        })
})