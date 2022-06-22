import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa tela de Login', () => {
  const EMAIL_TEST = 'test@gmail.com';
  const DATA_TEST_EMAIL = 'email-input';
  const DATA_TEST_PASSWORD = 'password-input';
  const DATA_TEST_SUBMIT = 'login-submit-btn';

  test('Testa se os componentes são renderizados', () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId(DATA_TEST_EMAIL);
    const password = screen.getByTestId(DATA_TEST_PASSWORD);
    const submit = screen.getByRole('button', { name: 'Enter' });
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  test('Testa se o botão está desabilitado', () => {
    renderWithRouter(<App />);
    const submit = screen.getByTestId(DATA_TEST_SUBMIT);
    expect(submit).toBeInTheDocument();
    expect(submit).toBeDisabled();
  });

  test('Testa se é habilitado ao digitar email valido e senha maior que 6 caracteres',
    () => {
      renderWithRouter(<App />);
      const email = screen.getByTestId(DATA_TEST_EMAIL);
      const password = screen.getByTestId(DATA_TEST_PASSWORD);
      const submit = screen.getByTestId(DATA_TEST_SUBMIT);
      userEvent.type(email, EMAIL_TEST);
      userEvent.type(password, '1234567');
      expect(submit).toBeEnabled();
    });

  test('Testa se ao clicar no botão renderiza para tela de foods', () => {
    const { history } = renderWithRouter(<App />);
    const email = screen.getByTestId(DATA_TEST_EMAIL);
    const password = screen.getByTestId(DATA_TEST_PASSWORD);
    const submit = screen.getByTestId(DATA_TEST_SUBMIT);
    userEvent.type(email, EMAIL_TEST);
    userEvent.type(password, '1234567');
    userEvent.click(submit);
    expect(history.location.pathname).toBe('/foods');
  });

  test('Testa se ao clicar no botão salva os token no LocalStorage', () => {
    renderWithRouter(<App />);
    const email = screen.getByTestId(DATA_TEST_EMAIL);
    const password = screen.getByTestId(DATA_TEST_PASSWORD);
    const submit = screen.getByTestId(DATA_TEST_SUBMIT);
    userEvent.type(email, EMAIL_TEST);
    userEvent.type(password, '1234567');
    userEvent.click(submit);
    expect(localStorage.getItem('mealsToken')).toBe('1');
    expect(localStorage.getItem('cocktailsToken')).toBe('1');
  });
});
