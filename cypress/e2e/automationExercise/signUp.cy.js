describe('Login Scenarioss', () => {
    it('Login with invalid password', () => {
        cy.visit('https://www.automationexercise.com/')
        cy.get("a[href='/login']").click()
        cy.contains('New User Signup!')
        cy.get("input[data-qa='signup-name']").type('test1234')
        cy.get("input[data-qa='signup-email']").type('test123466@gmail.com')
        cy.get("button[data-qa='signup-button']").click()
        cy.get("div[id='uniform-id_gender1']").click()     //This is for Mr option
        //cy.get("div[id='uniform-id_gender2']").click()   //This is for Mrs option
        cy.get("input[id='password']").type('abc123345')
        cy.get("select[id='days']").type('abc123345')
        cy.get("select[id='mpnths']").type('abc123345')
        cy.get("select[id='years']").type('abc123345')
    })
})