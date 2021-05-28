import React from 'react';
import './App.css';

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
    nome:'Matheus',
    idade: 21,
  }

  let imagem = 'https://www.google.com/google.jpg';

  let user = {
    url: imagem,
    name: 'Matheus Barbosa',
  }

  return <div>
    <div>Meu nome é {usuario.nome} e tenho {usuario.idade} anos</div>
    <img src={imagem} />
    <BemVindo nome="Matheus" />
    <BemVindo nome="João" />
    <BemVindo nome="Maria" />

    <Avatar user={user} />

  </div>
};

export default App;