import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('');
  const [response, setResponse] = useState([]);

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    search,
    setSearch,
    radio,
    setRadio,
    response,
    setResponse,
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
