import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(MyContext);

  const validationLogin = () => {
    const MIN_PASSWORD = 6;
    const passwordCheck = password.length > MIN_PASSWORD;
    const emailCheck = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (passwordCheck && emailCheck) {
      return false;
    }
    return true;
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <form>
      <input
        value={ email }
        type="email"
        data-testid="email-input"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <input
        value={ password }
        type="password"
        data-testid="password-input"
        onChange={ ({ target }) => setPassword(target.value) }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ validationLogin() }
        onClick={ handleClick }
      >
        Enter

      </button>
    </form>
  );
}

export default Login;
