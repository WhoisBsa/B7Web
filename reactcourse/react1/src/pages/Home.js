import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props) {
  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => history.replace('/sobre'), 2000);
  }

  return (
    <div>
      <h4>Página HOME</h4>

      NOME: {props.name}<br />
      CONTAGEM: {props.contador}

      <br /><br />
      <button onClick={() => props.setName('Matheus')}>Setar nome para Matheus</button>
      <button onClick={() => props.increment()}>+1</button>
      <br /><br />

      <button onClick={handleButton}>Ir para página SOBRE</button>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    name: state.usuario.name,
    contador: state.usuario.contador,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
    increment: () => dispatch({ type: 'SET_CONTADOR'})
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Home);