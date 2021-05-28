import React from 'react';

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
    <>
      <img src={props.url} alt={props.name} />
      <spam>{props.name}</spam>
    </>
  )
}

function App() {

  let usuario = {
    nome:'Matheus',
    idade: 21,
  }

  let imagem = 'https://www.google.com/google.jpg';

  return <div>
    <div>Meu nome é {usuario.nome} e tenho {usuario.idade} anos</div>
    <img src={imagem} />
    <BemVindo nome="Matheus" />
    <BemVindo nome="João" />
    <BemVindo nome="Maria" />

    <Avatar url={imagem} name="Google" />

  </div>
};

export default App;