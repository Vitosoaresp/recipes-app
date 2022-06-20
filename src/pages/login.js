import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(MyContext);

  const validationLogin = () => {
    const MIN_PASSWORD = 6;
    const passwordCheck = password.length > MIN_PASSWORD;
    console.log(passwordCheck);
    const emailCheck = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
    console.log(emailCheck);
    if (passwordCheck && emailCheck) {
      return false;
    }
    return true;
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
      >
        Enter

      </button>
    </form>
  );
}

export default Login;
