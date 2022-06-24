import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testa tela de receitas feitas', () => {
  const DRINK_TEST = 'drinks-bottom-btn';
  const EXPLORE_TEST = 'explore-bottom-btn';
  const FOOD_TEST = 'food-bottom-btn';

  let historyMock;

  beforeEach(() => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    historyMock = history;
  });

  test('Testa se os icones estão na tela', () => {
    const imgDrinkIcon = screen.getByTestId(DRINK_TEST);
    const imgExploreTest = screen.getByTestId(EXPLORE_TEST);
    const imgFoodTest = screen.getByTestId(FOOD_TEST);

    expect(imgDrinkIcon).toBeDefined();
    expect(imgExploreTest).toBeDefined();
    expect(imgFoodTest).toBeDefined();
  });

  test('Testa se os icones estão corretos', () => {
    const imgDrinkIcon = screen.getByTestId(DRINK_TEST);
    const imgExploreTest = screen.getByTestId(EXPLORE_TEST);
    const imgFoodTest = screen.getByTestId(FOOD_TEST);

    expect(imgDrinkIcon).toHaveAttribute('src', 'drinkIcon.svg');
    expect(imgExploreTest).toHaveAttribute('src', 'exploreIcon.svg');
    expect(imgFoodTest).toHaveAttribute('src', 'mealIcon.svg');
  });

  test('Testa se ao clicar no imgDrink é redirecionado para página correta', () => {
    const imgDrinkIcon = screen.getByTestId(DRINK_TEST);
    userEvent.click(imgDrinkIcon);
    const { pathname } = historyMock.location;
    expect(pathname).toBe('/drinks');
  });

  test('Testa se ao clicar no imgExplore é redirecionado para página correta', () => {
    const imgExploreTest = screen.getByTestId(EXPLORE_TEST);
    userEvent.click(imgExploreTest);
    const { pathname } = historyMock.location;
    expect(pathname).toBe('/explore');
  });

  test('Testa se ao clicar no imgFood é redirecionado para página correta', () => {
    const imgFoodTest = screen.getByTestId(FOOD_TEST);
    userEvent.click(imgFoodTest);
    const { pathname } = historyMock.location;
    expect(pathname).toBe('/foods');
  });
});
