import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  let history = useHistory();

  const name = useSelector(state => state.usuario.name);
  const contador = useSelector(state => state.usuario.contador);
  const dispatch = useDispatch();

  const handleButton = () => {
    setTimeout(() => history.replace('/sobre'), 2000);
  }

  return (
    <div>
      <h4>Página HOME</h4>

      NOME: {name}<br />
      CONTAGEM: {contador}

      <br /><br />
      <button 
        onClick={() => dispatch({ type: 'SET_NAME', payload: { name: 'Matheus' } })}
      >
          Setar nome para Matheus
      </button>
      <button 
        onClick={(() => dispatch({ type: 'SET_CONTADOR' }))}
      >
        +1
      </button>
      <br /><br />

      <button onClick={handleButton}>Ir para página SOBRE</button>
    </div>
  );
}

export default Home;