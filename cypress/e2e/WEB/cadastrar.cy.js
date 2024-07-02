describe('Funcionalidade de Cadastro', () => {
  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('https://bugbank.netlify.app/');
  });

  it('Validar o cadastro realizado com sucesso', () => {
        // Acessar a aba registrar
    cy.get('.ihdmxA').click()
        // Preencher os campos de cadastro
    cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true })
    cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
        // Clicar no Cadastrar
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
  });
  it('Validar o cadastro com E-mail Incorreto', () => {
    // Acessar a aba registrar
  cy.get('.ihdmxA').click()
    // Preencher os campos de cadastro
  cy.get(':nth-child(2) > .input__default').type('example@example/com', { force: true })
  cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
    // Clicar no Cadastrar
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
  });
  
  it('Validar o cadastro com todos os campos em branco', () => {
    // Acessar a aba registrar
cy.get('.ihdmxA').click()
        // Clicar no Cadastrar
cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
});
it('Validar mensagem de erro ao tentar cadastrar sem preencher o nome', () => {
  // Acessar a aba registrar
  cy.get('.ihdmxA').click();

  // Preencher apenas o email
  cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true });

  // Preencher a senha e a confirmação de senha
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true });
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true });

  // Clicar no Cadastrar
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });

  // Verificar se a mensagem de erro é exibida
  cy.contains('Nome não pode ser vazio').should('be.visible');
});
it('Validar mensagem de erro ao tentar cadastrar sem preencher o email', () => {
  // Acessar a aba registrar
  cy.get('.ihdmxA').click();

  // Preencher apenas o nome
  cy.get(':nth-child(3) > .input__default').type('Teste', { force: true });

  // Preencher a senha e a confirmação de senha
  cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true });
  cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true });

  // Clicar no Cadastrar
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });

  // Verificar se a mensagem de erro é exibida
  cy.get('.input__default')
    .should('be.visible', { force: true }) // Utiliza a opção { force: true } para forçar a visibilidade
    .and('have.attr', 'placeholder', 'Informe seu e-mail'); 
});
it('Validar mensagem de erro ao tentar cadastrar sem preencher a senha', () => {
  // Acessar a aba registrar
  cy.get('.ihdmxA').click();

  // Preencher os campos de cadastro (exceto a senha)
  cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true });
  cy.get(':nth-child(3) > .input__default').type('Teste', { force: true });

  // Clicar no Cadastrar
  cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });

  // Verifique se o campo de entrada ainda está marcado como obrigatório
  cy.get('label[for="password"]', { timeout: 10000 }).should('exist');


});
it('Validar mensagem de erro ao tentar cadastrar sem preencher o Confirmar senha', () => {
  // Acessar a aba registrar
cy.get('.ihdmxA').click()
  // Preencher os campos de cadastro (exceto a Confirmar senha)
cy.get(':nth-child(2) > .input__default').type('example@example.com', { force: true })
cy.get(':nth-child(3) > .input__default').type('Teste', { force: true })
cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Teste', { force: true })
  // Clicar no Cadastrar
cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click( { force: true })
  // Verifique se o campo de entrada ainda está marcado como obrigatório

cy.get('input[placeholder="Informe a confirmação da senha"]').should('exist');
});
});
