import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa tela de receitas feitas', () => {
  const DRINK_TEST = 'drinks-bottom-btn';
  test('Testa se os icones estão corretos', () => {
    renderWithRouter(<App />);
    const imgDrinkIcon = screen.getByTestId(DRINK_TEST);
    expect(imgDrinkIcon).toBeDefined();
  });
});
