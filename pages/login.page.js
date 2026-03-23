class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = 'input[data-testId="email"]';
    this.senha = 'input[data-testId="senha"]';
    this.btnEntrar = 'button[data-testId="entrar"]';
    this.alert = page.locator('.alert');
  }

  async acessar() {
    await this.page.goto('https://front.serverest.dev/login');
  }

  async preencherFormulario(email, senha) {
    await this.page.fill(this.email, email);
    await this.page.fill(this.senha, senha);
    await this.page.click(this.btnEntrar);
  }
}

module.exports = { LoginPage };
