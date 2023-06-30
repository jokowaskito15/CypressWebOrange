import "./Utilities.cy"
describe('Login Berhasil', () => {
    it('passes', () => {
        cy.login()
        cy.logout()
    })
  })