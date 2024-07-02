describe('Cadastro e Login com Fixtures', () => {
    beforeEach(() => {
      cy.visit('https://bugbank.netlify.app/');
      
      // Carrega os dados do arquivo de fixtures
      cy.fixture('dadosCadastro').then((dados) => {
        // Realiza o cadastro com os dados do arquivo de fixtures
        cy.get('.ihdmxA').click()
        // Preencher os campos de cadastro
    cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true })
    cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
        // Clicar no Registrar
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
        //Clicar em fechar
    cy.get('#btnCloseModal').click()
    cy.get('input[name="email"]').first().type('example@example.com', { force: true });
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
        cy.get('.otUnI').click();
      });
    });
  
    it('Validar extrato com sucesso', () => {
      
      // Carrega os dados do arquivo de fixtures
      cy.fixture('dadosCadastro').then((dados) => {
        // Preenche os campos de login com os dados do arquivo de fixtures
        cy.get('#btn-EXTRATO').click()
      });
      
    });
    });
  