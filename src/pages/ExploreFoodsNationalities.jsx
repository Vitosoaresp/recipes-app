import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardRecipesFoods from '../components/CardRecipesFoods';
import fetchByNationaLities from '../services/fetchByNationaLities';
import fetchAllNationaLities from '../services/fetchAllNationaLities';
import styles from '../modules/FoodsNationalities.module.css';

function ExploreFoodsNationalities() {
  const [loading, setLoading] = useState(true);
  const [nationalities, setNationalities] = useState([]);
  const [selectedNationalitie, setSelectedNationalitie] = useState('All');
  const [actualFoods, setActualFoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchNationalitie = async () => {
      const nationalitiesData = await fetchAllNationaLities();
      setNationalities(nationalitiesData);
    };
    fetchNationalitie();
    setLoading(false);
  }, []);

  useEffect(() => {
    const limitFoods = 12;
    const fetchFoods = async () => {
      const foodsData = await fetchByNationaLities(selectedNationalitie);
      setActualFoods(foodsData.slice(0, limitFoods));
    };
    fetchFoods();
  }, [selectedNationalitie]);

  const handleChange = ({ target: { value } }) => {
    setSelectedNationalitie(value);
  };

  return (
    <div>
      <Header title="Explore Nationalities" />
      {!loading && (
        <select
          className={ styles.select }
          data-testid="explore-by-nationality-dropdown"
          onChange={ handleChange }
          value={ selectedNationalitie }
        >
          <option
            data-testid="All-option"
            className={ styles.option }
          >
            All
          </option>

          {nationalities.map((nationalitie) => (
            <option
              key={ nationalitie.strArea }
              className={ styles.option }
              data-testid={ `${nationalitie.strArea}-option` }
            >
              {nationalitie.strArea}
            </option>
          ))}
        </select>
      )}

      { actualFoods.length < 1 || !actualFoods ? <h1>Loading...</h1>
        : (
          <div className="recipes-list">
            <CardRecipesFoods
              recipes={ actualFoods }
              dataTestid="recipe"
            />
          </div>
        )}
      <Footer />
    </div>
  );
}

export default ExploreFoodsNationalities;
