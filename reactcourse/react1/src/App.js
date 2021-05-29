import React from 'react';
// import './App.css';

import styled from 'styled-components';

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #0f0;
`;

const Title = styled.h1`
  color:#f00;
  font-size:18px;
`;

// class App extends React.Component {
//   render() {
//     return <h1>Testando 1, 2, 3...</h1>
//   }
// }

function BemVindo(props) {
  return <h1>Olá, {props.nome}!</h1>
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.user.url} alt={props.user.name} />
      <spam>{props.user.name}</spam>
    </div>
  )
}

function App() {

  let usuario = {
    nome: 'Matheus',
    idade: 21,
  }

  let imagem = 'https://www.google.com/google.jpg';

  let user = {
    url: imagem,
    name: 'Matheus Barbosa',
  }

  return (
    <div>
      <div>Meu nome é {usuario.nome} e tenho {usuario.idade} anos</div>
      <img src={imagem} />
      <BemVindo nome="Matheus" />
      <BemVindo nome="João" />
      <BemVindo nome="Maria" />

      <Avatar user={user} />

      <Site>
        <Title>Título bem legal</Title>
      </Site>


    </div>
  )
};

export default App;