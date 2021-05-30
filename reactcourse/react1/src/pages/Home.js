import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => history.replace('/sobre'), 2000);
  }

  return (
    <div>
      <h4>Página HOME</h4>
      <button onClick={handleButton}>Ir para página SOBRE</button>
    </div>
  );
}

export default Home;