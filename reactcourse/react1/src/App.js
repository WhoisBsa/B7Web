import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
// import './App.css';

import styled from 'styled-components';
import Modal from './components/Modal';
import SearchBox from './components/SearchBox';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Categoria from './pages/Categoria';

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

// function App() {
//   const [conta, setConta] = useState('');
//   const [gorjeta, setGorjeta] = useState(10);

//   return (
//     <div>
//       <h1>Calculadora de Gorjeta</h1>
//       <p>Quanto deu a conta?</p>
//       <Input type='number' value={conta} onChange={(e) => { setConta(e.target.value) }} />
//       <p>Qual a porcentagem de gorjeta?</p>
//       <Input type='number' value={gorjeta} onChange={(e) => { setGorjeta(e.target.value) }} />
//       <hr />

//       {conta.length > 0 && (
//         <div>
//           <p>Sub-total: {conta}</p>
//           <p>Gorjeta ({gorjeta}%): R$ {(conta * (gorjeta / 100)).toFixed(2)}</p>
//           <strong>Total: R$ {(conta * (gorjeta/100 + 1)).toFixed(2)}</strong>
//         </div>
//       )}
//     </div>
//   )
// }

// function App() {
//   const [contagem, setContagem] = useState(0);

//   useEffect(() => {
//     document.title = `Contagem: ${contagem}`;
//   }, [contagem])

//   return (
//     <div>
//       <h1>Contagem: {contagem}</h1>
//       <button onClick={() => setContagem(contagem + 1)}>Aumentar Número</button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>

//       <SearchBox frasePadrao="Faça sua busca..." />

//       <SearchBox frasePadrao="Digite seu nome" />

//       <SearchBox />

//     </div>
//   )
// }

// function App() {
//   const [searchText, setSearchText] = useState('');
//   const handleSearchInput = (novoTexto) => {
//     setSearchText(novoTexto);
//   }

//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>

//       <SearchBox
//         frasePadrao="Faça sua busca..."
//         onChangeText={handleSearchInput}
//       />

//       <SearchBox
//         frasePadrao={searchText}
//       />

//       <hr />

//       <p>Testo procurado: {searchText}</p>
//     </div>
//   )
// }

// function App() {
//   const [searchText, setSearchText] = useState('');
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList([
//       { title: 'Comprar o bolo', done: false },
//       { title: 'Comer bolo', done: false },
//       { title: 'Beber água', done: true },
//     ]);
//   }, []);

//   const addItem = (newItem) => {
//     setList([...list, { title: newItem, done: false }]);
//   }

//   const handleToggleDone = (index) => {
//     let newList = [...list];
//     newList[index].done = !newList[index].done;
//     setList(newList);
//   }

//   return (
//     <div>
//       <h1>Lista de Tarefas</h1>

//       <SearchBox
//         frasePadrao="Adicionar item"
//         onEnter={addItem}
//       />

//       <hr />

//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>
//             {item.done
//               ? <p><del>{item.title}</del></p>
//               : <p>{item.title}</p>
//             }
//             <button onClick={() => handleToggleDone(index)}>
//               {item.done ? 'Desmarcar' : 'Marcar'}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState(localStorage.getItem('name'));

//   useEffect(() => {
//     localStorage.setItem('name', name);
//   }, [name])

//   return (
//     <div>
//         <input 
//           type="text" 
//           value={name} onChange={(e) => setName(e.target.value)}
//         />
//     </div>
//   )
// }

// function App() {
//   const [modalVisible, setModalVisible] = useState(false)

//   return (
//     <div>
//       <button onClick={() => setModalVisible(true)}>Abrir Modal</button>
//       <Modal visible={modalVisible} setVisible={setModalVisible}>
//         <h1>Testando 1, 2, 3...</h1>
//       </Modal>
//     </div>
//   )
// }

const isLogged = false;

const PrivateRoute = ({ children, ...rest}) => {
  return (
    <Route {...rest}>
      {isLogged ? children : <Redirect to="/login"/>} 
    </Route>
  );
}

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Meu Site Legal</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </nav>
      </header>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        {/* <Route path="/sobre" >
          {isLogged ? <Sobre /> : <Redirect to="/login" />}
        </Route> */}

        <PrivateRoute path="/sobre" >
          <Sobre />
        </PrivateRoute>

        <Route path="*">
          <h4>Página não encontrada!</h4>
        </Route>
      </Switch>
      <hr />
      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  )
}

export default App;