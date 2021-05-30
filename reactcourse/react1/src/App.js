import React, { useState } from 'react';
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

// function BemVindo(props) {
//   return <h1>Olá, {props.nome}!</h1>
// }

// function Avatar(props) {
//   return (
//     <div className="avatar">
//       <img src={props.user.url} alt={props.user.name} />
//       <spam>{props.user.name}</spam>
//     </div>
//   )
// }

// function App() {

//   let usuario = {
//     nome: 'Matheus',
//     idade: 21,
//   }

//   let imagem = 'https://www.google.com/google.jpg';

//   let user = {
//     url: imagem,
//     name: 'Matheus Barbosa',
//   }

//   return (
//     <div>
//       <div>Meu nome é {usuario.nome} e tenho {usuario.idade} anos</div>
//       <img src={imagem} />
//       <BemVindo nome="Matheus" />
//       <BemVindo nome="João" />
//       <BemVindo nome="Maria" />

//       <Avatar user={user} />

//       <Site>
//         <Title>Título bem legal</Title>
//       </Site>


//     </div>
//   )
// };

// function App() {

//   const [contador, setContador] = useState(0);

//   const incrementar = () => {
//     setContador(contador+1);
//   }

//   return (
//     <div>
//       <div>{contador} vezes</div>
//       <button onClick={incrementar}>Clique para aumentar</button>

//     </div>
//   )
// }


const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
`;

// function App() {

//   const [texto, setTexto] = useState('');

//   return (
//     <div>
//       <Input type="text" placeholder="Digite qualquer coisa" value={texto} onChange={(e) => setTexto(e.target.value)} />
//       <p>{texto.length} caracteres</p>
//     </div>
//   )
// }


// function App() {

//   const [email, setEmail] = useState('');
//   const [isLogged, setIsLogged] = useState(false);

//   return (
//     <div>
//       <Input type="text" placeholder="Digite um email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       {email.length > 0 && (
//         <p>{email.length} caractere{email.length !== 1 ? 's' : ''}</p>
//       )}

//       {isLogged ?
//         <button>Sair</button>
//         :
//         <button>Fazer Login</button>}
//     </div>
//   )
// }

function App() {
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState(10);

  return (
    <div>
      <h1>Calculadora de Gorjeta</h1>
      <p>Quanto deu a conta?</p>
      <Input type='number' value={conta} onChange={(e) => { setConta(e.target.value) }} />
      <p>Qual a porcentagem de gorjeta?</p>
      <Input type='number' value={gorjeta} onChange={(e) => { setGorjeta(e.target.value) }} />
      <hr />

      {conta.length > 0 && (
        <div>
          <p>Sub-total: {conta}</p>
          <p>Gorjeta ({gorjeta}%): R$ {(conta * (gorjeta / 100)).toFixed(2)}</p>
          <strong>Total: R$ {(conta * (gorjeta/100 + 1)).toFixed(2)}</strong>
        </div>
      )}
    </div>
  )
}
export default App;