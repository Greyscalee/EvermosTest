
                                            //COMJUNCTION 
Cypress.Commands.add('GetTokenSubs', function (accessToken) {
    cy.request({
        method: 'POST',
        url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/commsubs', // baseUrl is prepended to url
        // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          input: "envirtups-qa3@yahoo.com",
          password: "secret123",
          community_id: "138"
        }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.access_token))
       cy.writeFile('cypress/fixtures/savetoken.json', user)
     })
  })

  Cypress.Commands.add('GetToken', function (accessToken) {
    cy.request({
        method: 'POST',
        url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/superadmin', // baseUrl is prepended to url
        // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          user_name: "marabotu2",
          password: "secret1234"
        }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.access_token))
       cy.writeFile('cypress/fixtures/savetoken.json', user)
     })
  })

  Cypress.Commands.add('GetTokenadmin', function (accessToken) {
    cy.request({
        method: 'POST',
        url: 'https://api.vasdev.co.id:8066/smartcomm/api/auth/commadmin', // baseUrl is prepended to url
        // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          user_name: "marabotu2",
          password: "rahasia1234"
        }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.access_token))
       cy.writeFile('cypress/fixtures/savetoken.json', user)
     })
  })

                                               //CEKLOK


  Cypress.Commands.add('Tokenceklokadmin', function (acces_token) {
    cy.request({
        method: 'POST',
        url: '21.0.0.112:8000/user/login', // baseUrl is prepended to url
        // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          company : "VST1912231",
          username : "marbottest",
          pass  : "secret1234",
          platform : "Web"
        }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.access_token))
       cy.writeFile('cypress/fixtures/savetoken.json', user)
     })
  })

  Cypress.Commands.add('getsession', function (session_id) {
    cy.request({
        method: 'POST',
        url: 'https://api.vasdev.co.id:8066/sitamoto/auth/login',
        form: false,

                headers: {
                    "Content-type": 'application/json',
                    "Session-Key": 'web'
                  },
        failOnStatusCode: false, // baseUrl is prepended to url
         // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          "username":"vascomm",
          "password":"ojolalisholat"
      }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.session_id))
       cy.writeFile('cypress/fixtures/savetokensita.json', user)
     })
  })

  Cypress.Commands.add('getcsrf', function (data) {
    cy.request({
        method: 'POST',
        url: 'http://192.168.172.15:3012/csrf/generate',
          failOnStatusCode: false, // baseUrl is prepended to url
         // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers

        body: {
          "key" : "ab8e655334612284ce1a3bc674b57b4f348af752cf29b34932f834e394680971"
        }
    })
    .then((resp) => {
        const user = resp.body
        window.localStorage.setItem('authen', JSON.stringify(user.data))
       cy.writeFile('cypress/fixtures/csrf.json', user)
     })
  })
  
  