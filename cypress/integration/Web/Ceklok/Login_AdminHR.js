/// <reference types="cypress" />

let user

describe('aUTH', () => {

        it('Login Admin HR', () => {
            cy.visit('https://evermos.com/')
            cy.get(':nth-child(6) > a').click('')

            cy.get('#username').type('marabotu1')
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