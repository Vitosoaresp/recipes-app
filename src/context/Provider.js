import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const context = {
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <MyContext.Provider value={ context }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
