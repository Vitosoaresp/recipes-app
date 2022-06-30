import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../modules/Profile.module.css';

function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Profile" />
      <div className={ styles.profile }>
        <h3 data-testid="profile-email">{email}</h3>
        <Link className={ styles.category } to="/done-recipes">
          <button
            className={ styles.buttonLink }
            type="button"
            data-testid="profile-done-btn"
          >
            Done Recipes
          </button>
        </Link>
        <Link className={ styles.category } to="/favorite-recipes">
          <button
            className={ styles.buttonLink }
            type="button"
            data-testid="profile-favorite-btn"
          >
            Favorite Recipes
          </button>
        </Link>
        <button
          className={ styles.category }
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}
Profile.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default Profile;
