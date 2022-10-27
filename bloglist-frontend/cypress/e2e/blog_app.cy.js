const testUser = {
  username: 'test',
  name: 'test test',
  password: 'Test123Test123'
}

describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
    // create new user
    cy.request('POST', 'http://localhost:3003/api/users', testUser)
  })

  it('login open by default', function () {
    cy.visit('http://localhost:3000') // duplicate (already visited in beforeEach), I know...
    cy.contains('log in to application')
    cy.contains('username')
    cy.contains('password')
  })

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username')
        .type(testUser.username)
      cy.get('#password')
        .type(testUser.password)
      cy.get('#loginBtn')
        .click()

      cy.contains(`${testUser.name} logged in`)
    })

    it('fails with wrong credentials', function () {
      cy.get('#username')
        .type(testUser.username)
      cy.get('#password')
        .type('incorrect password')
      cy.get('#loginBtn')
        .click()

      cy.get('html').should('not.contain', `${testUser.name} logged in`)

      cy.contains('log in to application')
      cy.contains('username')
      cy.contains('password')

      cy.get('#notification').should('have.class', 'error')
    })
  })
})