// /// <reference types="cypress" />

// let user


// describe('Sitamoto', () => {

//         it('View Dashboard Sitamoto', () => {
//             cy.visit('https://sitaweb.vasdev.co.id/login')

//             // cy.get('#username').type('marabotu44')
//             // cy.get('#password').type('secret1234')
//             // cy.get('#LoginBtn').click('')
//             // cy.get('.btn-link').click('')
//             // cy.get('a > .btn').click('')
//             cy.get('.labelForget').click('')
//             cy.get('#emailajah').type('envirtups-qa3@yahoo.com')
//             cy.get('#getOTP').click('')
//             cy.get('#gotIT').click('')
//             cy.visit('https://sitaweb.vasdev.co.id/login')
//         })
// })

context("Tests", () => {
    const getSecretFromPage = () =>
      cy.waitUntil(() =>
        cy
          .contains("Demo Secret")
          .then(
            $el =>
              $el
                .parent()
                .parent()
                .find("input")[0].value
          )
          .then(value => value !== "Loading..." && value)
      );
    const fillFormWithSecret = token => {
      cy.contains("Verify Token").click();
      cy.contains("Please input a token.")
        .then($el => $el.parent().find("input"))
        .type(token);
      cy.contains("The token is valid in this current window.").should("be.visible");
    };
  
    it("The OTP token generation should work", () => {
      // go to the baseUrl page (see cypress.json)
      cy.visit("/");
  
      getSecretFromPage().then(secret => {
        cy.task("generateOTP", secret).then(fillFormWithSecret);
      });
    });
  
    it("The last OTP secret shuold be used if not passed everytime", () => {
      cy.visit("/");
      getSecretFromPage().then(secret => {
        cy.task("generateOTP", secret);
        cy.task("generateOTP").then(fillFormWithSecret);
      });
    });
  });