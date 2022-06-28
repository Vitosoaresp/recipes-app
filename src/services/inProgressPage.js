export const favoriteRecipe = (
  { strCategory, idMeal, strMeal, strMealThumb, strArea }, favoritos, setFavoritos,
) => {
  const favRecipeModel = {
    id: idMeal,
    type: 'food',
    nationality: strArea,
    category: strCategory,
    alcoholicOrNot: '',
    name: strMeal,
    image: strMealThumb,
  };
  const check = favoritos.find((recipeFav) => recipeFav.id === idMeal);
  if (check) {
    const remove = favoritos.filter((favRecipe) => favRecipe.id !== idMeal);
    setFavoritos([...remove]);
  } else {
    setFavoritos([...favoritos, { ...favRecipeModel }]);
  }
};

export const checkButton = (setbuttonDisabled) => {
  const buttons = document.querySelectorAll('input[type=checkbox]');
  const checkedButtons = document.querySelectorAll('input:checked');
  console.log(buttons.length);
  console.log(checkedButtons.length);
  if (checkedButtons.length === buttons.length) {
    setbuttonDisabled(false);
    return;
  }
  setbuttonDisabled(true);
};
