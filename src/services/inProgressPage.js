// import { meal, drink } from './mockReturnApi';

// export const handleChangeFoods = ({ target }) => {
//   const {
//     idMeal,
//   } = meal;

//   const recipeProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
//   const { meals } = recipeProgress;
//   console.log(target.checked);
//   if (!target.checked) {
//     return;
//   }
//   if (Object.keys(meals).length === 0) {
//     localStorage
//       .setItem('inProgressRecipes', JSON
//         .stringify(
//           { ...recipeProgress, meals: { [idMeal]: [target.value] } },
//         ));
//     return;
//   }
//   const recipe = meals[idMeal];
//   localStorage
//     .setItem('inProgressRecipes', JSON
//       .stringify(
//         { ...recipeProgress, meals: { [idMeal]: [...recipe, target.value] } },
//       ));
// };

// export const handleChangeDrinks = ({ target }) => {
//   const {
//     idDrink,
//   } = drink;

//   const recipeProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
//   const { cocktails } = recipeProgress;
//   console.log(target.checked);
//   if (!target.checked) {
//     return;
//   }
//   if (Object.keys(cocktails).length !== 0) {
//     console.log('entrou no if');
//     const recipe = cocktails[idDrink];
//     console.log(recipe);
//     localStorage
//       .setItem('inProgressRecipes', JSON
//         .stringify(
//           { ...recipeProgress, cocktails: { [idDrink]: [...recipe, target.value] } },
//         ));
//     return;
//   }
//   localStorage
//     .setItem('inProgressRecipes', JSON
//       .stringify(
//         { ...recipeProgress, cocktails: { [idDrink]: [target.value] } },
//       ));
// };
