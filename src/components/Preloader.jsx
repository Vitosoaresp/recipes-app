import React from 'react';
import gif from '../images/loading.gif';

export default function Preloader() {
  return (
    <div
      style={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      } }
    >
      <img src={ gif } alt="gif de carregando" width="100%" />
    </div>
  );
}
