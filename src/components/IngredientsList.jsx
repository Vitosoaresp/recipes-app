// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import MyContext from '../context/Context';

// function IngredientsList({
//   ingredientsArray, idMeal, handleChangeFoods, check, setCheck }) {
//   const { inProgressRecipes } = useContext(MyContext);

//   return (
//     <ul>
//       {ingredientsArray.map((element, i) => {
//         if (element === null || element === '') {
//           return null;
//         }
//         if (inProgressRecipes.meals[`${idMeal}`] !== undefined) {
//           setCheck(inProgressRecipes.meals[`${idMeal}`].includes(i.toString()));
//         }
//         return (
//           <li
//             data-testid={ `${i}-ingredient-step` }
//             key={ i }
//           >
//             <label
//               htmlFor={ `${i}-ingredient` }
//             >
//               <input
//                 checked={ check }
//                 value={ i }
//                 onChange={ handleChangeFoods }
//                 type="checkbox"
//                 id={ `${i}-ingredient` }
//               />
//               {element}
//             </label>
//           </li>);
//       })}
//     </ul>
//   );
// }

// IngredientsList.propTypes = {
//   ingredientsArray: PropTypes.arrayOf(PropTypes.any).isRequired,
//   idMeal: PropTypes.string.isRequired,
//   handleChangeFoods: PropTypes.func.isRequired,
//   check: PropTypes.bool.isRequired,
//   setCheck: PropTypes.func.isRequired,
// };

// export default IngredientsList;
