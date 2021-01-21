/// <reference types="cypress" />

let user


describe('Sitamoto list device', () => {

        it('View Device Report Sitamoto', () => {

            cy.viewport(1800, 1000)

            cy.visit('http://192.168.173.44:9899/admin/register')

            var fileName = 'image/hitam.png';

            // cy.fixture(fileName).then(fileRes =>{
                // cy.log(fileRes)
            cy.get('#icon_com').attachFile({ filePath: fileName });
            // })

            cy.get('#name_com').type('simbor la posada')
            cy.get('#descrip_com').type('simbor la posada')
            cy.get('#type_com').select('Voli')
            cy.get('#range_member').select('10 - 50')
            cy.get('#btn_register').click()

            cy.get('#name_admin').type('tuwek007')
            cy.get('#username_admin').type('tuwek007')
            cy.get('#phone_admin').type('084566665895438')
            cy.get('#email_admin').type('rifky.arsy1-ios1@yahoo.com')
            cy.get('#alamat_admin').type('malang')
            cy.get('#password_admin').type('h1yah1ya')
            cy.get('#password_confirm').type('h1yah1ya')
            cy.get('#btn_register2').click()
            cy.get(':nth-child(1) > .card > .card-body > center > form > button.btn.klik-pricing').click({ force: true})
        
            // cy.get('.modal-backdrop')
            // cy.wait(7000);
            // cy.get(':nth-child(1) > .card > .card-body > center > .card-title')
            // cy.get('.modal-backdrop').should(':visible').then(($option) => {
            //     // $option is yielded
            //     cy.log($option)
            //   })
            // cy.get('.modal-backdrop').should('not.exist');
            // cy.get('.modal-backdrop').then(res => {
            //     cy.log(res)
            //     console.log("test", res);
            //     if (!res.is(':visible')) {
            //     }
            // })
            // console.log("testss", cy.get('.modal-backdrop'));
            // cy.get('.modal-backdrop').then(res => {
            //     cy.log(res)
            //     if (res.is(':hidden')) {
            //         cy.get(':nth-child(1) > .card > .card-body > center > form > button.btn.klik-pricing').click()
            //     }
            // })

            
        })
})