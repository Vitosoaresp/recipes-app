import React, { useContext } from 'react';
import { MdFoodBank } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';
import styles from '../modules/Login.module.css';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(MyContext);

  const validationLogin = () => {
    const MIN_PASSWORD = 5;
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
    <div className={ styles.loginContainer }>
      <form className={ styles.form }>
        <span className={ styles.title }>
          FAÇA SEU LOGIN
          <MdFoodBank />
        </span>
        <input
          value={ email }
          type="email"
          placeholder="Digite seu e-mail"
          data-testid="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          value={ password }
          type="password"
          placeholder="Digite sua senha"
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
    </div>

  );
}

export default Login;
