import loginUser from "../fixtures/user.json"
import repository from "../fixtures/repository.json"

Cypress.Commands.add("login", () => {
  cy.visit(loginUser.url)
  cy.get(repository.txtUsername).type(loginUser.username)
  cy.get(repository.txtPassword).type(loginUser.password)
  cy.get(repository.btnLogin).click()
  cy.wait(5000)
})  

Cypress.Commands.add("logout", () => {
  cy.get(repository.btnProfil).click()
  cy.get(repository.btnLogout).click()
}) 