import React, { useContext } from 'react';
import { MdFoodBank } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/Context';
import styles from '../modules/Login.module.css';
import bgLogin from '../images/backgroundLogin.jpg';

function Login() {
  const history = useHistory();
  const { email, setEmail, password, setPassword } = useContext(MyContext);
  // const [isVisible, setIsVisible] = useState(false);

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
    localStorage.setItem('doneRecipes', JSON.stringify([]));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  };

  return (
    <div className={ styles.loginContainer }>
      <div className={ styles.img }>
        <img src={ bgLogin } alt="Imagem de um lanche" />
      </div>
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
        <div className={ styles.pass }>
          <input
            value={ password }
            type="password"
            placeholder="Digite sua senha"
            data-testid="password-input"
            onChange={ ({ target }) => setPassword(target.value) }
          />

        </div>

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
