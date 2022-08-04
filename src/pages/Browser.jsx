import { Hamburger, Martini } from 'phosphor-react';
import React, { useContext, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesRow from '../components/RecipesRow';
import MyContext from '../context/Context';
import styles from '../modules/Browser.module.css';
import Preloader from '../components/Preloader';

export default function Browser() {
  const [typeSelected, setTypeSelected] = useState('Meals');
  const { data } = useContext(MyContext);

  const { Foods, Drinks } = data;
  return (
    <>
      <Header title={ typeSelected } />
      <main>
        <nav className={ styles.nav }>
          <button
            type="button"
            className={
              `${styles.navButton} ${typeSelected === 'Meals' && styles.activeBtn} `
            }
            onClick={ () => setTypeSelected('Meals') }
          >
            <Hamburger
              size={ 20 }
              color={ typeSelected === 'Meals' ? '#f3820a' : '#d5d5d6' }
              weight="bold"
            />
            Meals
          </button>
          <button
            type="button"
            className={
              `${styles.navButton} ${typeSelected === 'Drinks' && styles.activeBtn} `
            }
            onClick={ () => setTypeSelected('Drinks') }
          >
            <Martini
              size={ 20 }
              color={ typeSelected === 'Drinks' ? '#f3820a' : '#d5d5d6' }
              weight="bold"
            />
            Drinks
          </button>
        </nav>
        <div className={ styles.recipes }>
          { Foods === undefined
          || Foods.length === 0 ? <Preloader /> : null }
          { typeSelected === 'Meals' && (
            Foods && Foods.map(({ slug, meals: recipes }) => (
              <div className={ styles.containeRecipes } key={ slug }>
                <h2 className={ styles.titleCategory }>{ slug }</h2>
                <div className={ styles.carrousel }>
                  { recipes.meals.map(
                    (recipe) => (
                      <RecipesRow
                        key={ recipe.idMeal }
                        recipes={ recipe }
                        type="meal"
                      />
                    ),
                  ) }

                </div>
              </div>
            ))
          )}
          { typeSelected === 'Drinks' && (
            Drinks && Drinks.map(({ slug, drinks: recipes }) => (
              <div className={ styles.containeRecipes } key={ slug }>
                <h2 className={ styles.titleCategory }>{ slug }</h2>
                <div className={ styles.carrousel }>
                  { recipes.drinks.map(
                    (recipe) => (
                      <RecipesRow
                        key={ recipe.idDrink }
                        recipes={ recipe }
                        type="drink"
                      />
                    ),
                  ) }

                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
