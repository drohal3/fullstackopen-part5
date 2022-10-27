describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('login open by default', function() {
    cy.visit('http://localhost:3000') // duplicate (already visited in beforeEach), I know...
    cy.contains('log in to application')
    cy.contains('username')
    cy.contains('password')
  })
})