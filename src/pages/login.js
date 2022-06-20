import React, { useContext } from 'react';
import MyContext from '../context/Context';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(MyContext);
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
      >
        Enter

      </button>
    </form>
  );
}

export default Login;
