// https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/ para pegar a data do dispositivo;
const currentDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

// eslint-disable-next-line import/prefer-default-export
export const objDoneRecipe = (finish, type, alcoholicOrNot) => {
  if (finish.length !== 0) {
    return ({
      id: type === 'food' ? finish.idMeal : finish.idDrink,
      type,
      nationality: type === 'food' ? finish.strArea : '',
      category: finish.strCategory,
      alcoholicOrNot,
      doneDate: currentDate(),
      name: type === 'food' ? finish.strMeal : finish.strDrink,
      image: type === 'food' ? finish.strMealThumb : finish.strDrinkThumb,
      tags: [finish.strTags],
    });
  }
};
