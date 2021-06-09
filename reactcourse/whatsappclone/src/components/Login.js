import React from 'react';
import './Login.css';
import Api from '../Api';


export default function Login({onReceive}) {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert('Erro')
    }
  };

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Entrar com o Facebook</button>
    </div>
  )
};