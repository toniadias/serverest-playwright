// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login', () => {
  test('Não deve logar com dados inválidos', async ({ page }) => {
    const login = new LoginPage(page);

    await login.acessar();
    await login.preencherFormulario('teste@test.com', '1234');

    await expect(page.locator(login.alert)).toHaveText(
      'Email e/ou senha inválidos',
    );
  });
});
