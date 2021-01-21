/// <reference types="cypress" />

let user

describe('Auth', () => {

        it('Login Admin HR', () => {
            cy.visit('https://ceklok.vasdev.co.id/employee/login')
            cy.get('.text-register > span').click('')
            cy.get('#company-regist').type('PBDN206120')
            cy.get('#btn-regis-employee').click('')
            cy.get('[disabled]').click({force: true})
            cy.get('#employeeEmail').type('envirtups-qa3@yahoo.com')
            cy.get('#employeeName').type('Ichsan satu')
            cy.get('#employeeTelp').type('0844456214')
            cy.get('#employeePassword').type('secret1234')
            cy.get('#employeeNik').type('45432145')
            cy.get('#employeeUsername').type('dalam1')
            cy.get('#rePasswordemployee').type('secret1234')
            cy.get('#btnRE-second-tab').click('')
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