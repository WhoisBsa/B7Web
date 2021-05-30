import React from 'react';
import { connect } from 'react-redux';

function Login(props) {

  return (
    <div>
      <h4>Página LOGIN</h4>
      

      O nome é: {props.name}
      <br /><br />
      <button onClick={() => props.setName('João')}>Trocar nome para Jõao</button>
    </div>
  );
}

const mapStateToProps = (state) => (
  {
    name: state.usuario.name,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Login);