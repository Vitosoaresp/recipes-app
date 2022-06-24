// https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/ para pegar a data do dispositivo;
const currentDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

const objDoneRecipe = (finish, type, alcoholicOrNot) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (finish.length !== 0) {
    return [...doneRecipes, {
      id: type === 'food' ? finish[0].idMeal : finish[0].idDrink,
      type,
      nationality: type === 'food' ? finish[0].strArea : '',
      category: finish[0].strCategory,
      alcoholicOrNot,
      doneDate: currentDate(),
      name: type === 'food' ? finish[0].strMeal : finish[0].strDrink,
      image: type === 'food' ? finish[0].strMealThumb : finish[0].strDrinkThumb,
      tags: [finish[0].strTags],
    }];
  }
};

export const saveDoneRecipes = (apiFoodOrDrink, type, alcoholicOrNot, id) => {
  const finish = apiFoodOrDrink.filter((recipe) => (
    type === 'food'
      ? id === recipe.idMeal
      : id === recipe.idDrink));
  localStorage.setItem('doneRecipes', JSON.stringify(
    objDoneRecipe(finish, type, alcoholicOrNot),
  ));
};

const removeLastLetter = (innerText) => (
  innerText === 'Drinks'
    ? innerText.substring(0, innerText.length - 1) : innerText
);

export const getDoneRecipes = (target = 'All') => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const { innerText } = target;
  if (innerText === 'Food' || innerText === 'Drinks') {
    const filter = doneRecipes.filter(({ type }) => (
      type === removeLastLetter(innerText).toLowerCase()));
    return filter;
  }
  return doneRecipes;
};
