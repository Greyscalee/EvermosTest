/// <reference types="cypress" />

let user

describe('aUTH', () => {

        it('Login Evermos Account Abnormal', () => {
            cy.visit('https://evermos.com/')
            cy.get(':nth-child(6) > a').click('')

            cy.get('[style="margin-bottom:30px;"] > .inputText__inner > .inputText__input').type('621223334444')
            cy.get('[style="margin-bottom:15px;"] > .inputText__inner > .inputText__input').type('hehehehe')
            cy.get('.btn').click('')
            .then((res) => {
              cy.log(res)

              const OTP = res.body
              const status = res.status
              const duration = res.duration
              const headers = res.headers
              cy.writeFile('ccypress/fixtures/EvermoS_Test/Auth.json', { status: status, duration: duration, headers: headers, OTP })
            })

        })
})