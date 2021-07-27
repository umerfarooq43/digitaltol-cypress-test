describe('DT Cypress Assessment Test', () => {
  
  it('Verify if the page launched successfully', () => {
    cy.visit('https://ct.digitaltolk.se/');
    cy.get('img.brand-logo').should('be.visible')
  });

  it('Verify whether the language is changed to English successfully', () => {
    cy.visit('https://ct.digitaltolk.se/');
    cy.wait(4000)
    cy.get('[role="menuitem"] [class="el-input__inner"]').click()
    cy.findByText('EN').click()
    cy.contains('Booking')
  });

  it('Verify clicking login redirects correctly', () => {
    cy.visit('https://ct.digitaltolk.se/');
    cy.wait(5000)
    cy.get('a[href="/login"] span').first().click()
    cy.url().should('include', '/login');
    cy.contains('Logga in')
  });

  it('Verify login with invalid credentials returns error', () => {
    cy.visit('https://ct.digitaltolk.se/');
    cy.wait(5000)
    cy.get('[role="menuitem"] [class="el-input__inner"]').click()
    cy.findByText('EN').click()
    cy.contains('Booking')
    cy.get('a[href="/login"] span').first().click()
    cy.url().should('include', '/login');
    cy.get('.el-form-item__content .el-input__inner').first().type('umer@customer.dt')
    cy.get('.el-form-item__content .el-input__inner').last().type('password')
    cy.get('button.login-form__login-button').click()
    cy.contains('The user credentials were incorrect.')
  });

  it('Verify login with valid credentials returns home page', () => {
    cy.visit('https://ct.digitaltolk.se/');
    cy.wait(5000)
    cy.get('[role="menuitem"] [class="el-input__inner"]').click()
    cy.findByText('EN').click()
    cy.contains('Booking')
    cy.get('a[href="/login"] span').first().click()
    cy.url().should('include', '/login');
    cy.get('.el-form-item__content .el-input__inner').first().type('umer@customer.dt')
    cy.get('.el-form-item__content .el-input__inner').last().type('Test123$')
    cy.get('button.login-form__login-button').click()
    cy.contains('Home')
  });
});