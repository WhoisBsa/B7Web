// eslint-disable-next-line no-unused-vars
import React, {Component, useState, useEffect} from 'react';
import {Platform, Dimensions, Alert, Modal, StatusBar} from 'react-native';
import {Text, TextInput, View, SafeAreaView, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

/*
const TextoInicial = () => {
  return <Text>Texto 1</Text>;
};
*/

/*
function TextoInicial() {
  return <Text>Texto 2</Text>;
}
*/

/*
class TextoInicial extends Component {
  render() {
    return <Text>Texto 3</Text>;
}
*/

/*
const TextoInicial = () => {
  return (
    <SafeAreaView>
      <Text>Texto 4</Text>
      <Text>ALALALAA</Text>
      <Text>ALALALAA</Text>
      <Text>ALALALAA</Text>
      <Text>ALALALAA</Text>
      <Text>ALALALAA</Text>
      <Text>ALALALAA</Text>
    </SafeAreaView>
  );
};
*/

/*
const Page = styled.SafeAreaView`
  flex: 1;
`;

const Quadrado = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.cor};
  border-radius: 50px;
`;

const Header = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 200px
  background-color: #EEE;
`;

export default () => {
  return (
    <Page>
      <Header>
        <Quadrado cor="pink" />
        <Quadrado cor="khaki" />
        <Quadrado cor="dodgerblue" />
        <Quadrado cor="yellowgreen" />
        <Quadrado cor="pink" />
        <Quadrado cor="khaki" />
        <Quadrado cor="dodgerblue" />
        <Quadrado cor="yellowgreen" />
        <Quadrado cor="pink" />
        <Quadrado cor="khaki" />
        <Quadrado cor="dodgerblue" />
        <Quadrado cor="yellowgreen" />
        <Quadrado cor="pink" />
        <Quadrado cor="khaki" />
        <Quadrado cor="dodgerblue" />
        <Quadrado cor="yellowgreen" />
      </Header>
    </Page>
  );
};
*/

/*
const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`;

const Quadrado = styled.View`
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 3px dashed #000;
  margin-top: 30px;
`;

const Hello = (props) => {
  const [name, setName] = useState('Matheus');
  const [mostrar, setMostrar] = useState(false);

  const handleCLick = () => {
    setMostrar(!mostrar);
  };

  return (
    <View>
      <Input value={name} onChangeText={(t) => setName(t)} />

      <Button
        title={mostrar ? 'Ocultar Nome' : 'Mostrar Nome'}
        onPress={handleCLick}
      />

      {mostrar && (
        <Quadrado>
          <Text>Seu nome é:</Text>
          <Text>{name}</Text>
        </Quadrado>
      )}
    </View>
  );
};
*/

/*
const HeaderText = styled.Text`
  font-size: 25px;
  margin-top: 20px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;

const CalcButton = styled.Button`
  margin-top: 10px;
`;

const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

const PctArea = styled.View`
  flex-direction: row;
  margin: 30px;
  width: 50%;
  justify-content: space-between;
`;

const PctItem = styled.Button``;

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if (nBill) {
      setTip((pct / 100) * nBill);
    }
  };

  useEffect(() => {
    calc();
  }, [pct]);

  return (
    <Page>
      <HeaderText>Calculadora de Gorjeta</HeaderText>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={(n) => setBill(n)}
      />
      <PctArea>
        <PctItem title="05%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>
      <CalcButton title={`Calcular (${pct}%)`} onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {tip.toFixed(2)} {pct}%
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};
*/

/*
const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  border: 1px solid #000;
`;

const Logo = styled.View`
  width: 100px;
  height: 100px;
  background-color: #000;
  margin-bottom: 20px;
`;

const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  background-color: ${Platform.OS === 'ios' ? '#00FF00' : '#0000FF'};
  justify-content: center;
  align-items: center;
`;

export default () => {
  useEffect(() => {
    alert('SO: ' + Platform.Version);
  });

  return (
    <Page>
      <KeyboardArea behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Logo></Logo>
        <Input />
      </KeyboardArea>
    </Page>
  );
};
*/

/*
export default () => {
  useEffect(() => {
    // let {width, height} = Dimensions.get('window');
    // alert(width.toFixed(2) + 'x' + height.toFixed(2));

    Alert.alert('TITULO', 'mensagem qualquer', [
      {text: 'Concordo', onPress: () => console.log('Apertou em concordo')},
      {
        text: 'Não concordo',
        onPress: () => console.log('Apertou em não concordo'),
        style: 'cancel',
      },
    ]);

    // Alert.alert(
    //   'My title',
    //   'My Alert Msg',
    //   [
    //     {text: 'Ask me later', onPress: () => console.log('Ask me later')},
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   {cancelable: false},
    // );
  }, []);

  return <Page></Page>;
};
*/

/*
import Header from './src/components/Header';

const Page = styled.SafeAreaView`
  flex: 1;
`;

export default () => {
  return (
    <Page>
      <Header />
    </Page>
  );
};
*/

/*
import {Image} from 'react-native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default () => {

  const [status, setStatus] = useState('');

  return (
    <Page>
      <Image
        source={require('./src/images/logo-red.png')}
        style={{width: 200, height: 200}}
        resizeMode="cover"
      />
      <Image
        source={{uri: 'https://www.google.com.br/google.jpg'}}
        style={{width: 200, height: 200}}
        resizeMode="cover"
        defaultSource={require('./src/images/placeholder.png')}
        onLoadStart={() => setStatus('Carregando...')}
        onLoadEnd={() => setStatus('Carregou!')}
        onError={(e) => alert(e.nativeEvent.error)}
      />
      <Text>{status}</Text>
    </Page>
  );
};
*/

/*
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Subtitle,
  Spinner,
  Content,
} from 'native-base';

const Page = styled.SafeAreaView`
  flex: 1;
`;

export default () => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>AMPORAL</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Spinner color="dodgerblue" />
      </Content>
    </Container>
  );
};
*/


import lista from './src/lista';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import {SwipeListView} from 'react-native-swipe-list-view';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;

export default () => {
  const [items, setItems] = useState(lista);

  const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
      id: uuid(),
      task: txt.trim(),
      done: false,
    });
    setItems(newItems);
  };

  const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };

  const deletItem = (index) => {
    let newItems = [...items];
    newItems = newItems.filter((it, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({index, item}) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        renderHiddenItem={({index}) => (
          <ListaItemSwipe onDelete={() => deletItem(index)} />
        )}
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
};

/*
import AsyncStorage from '@react-native-community/async-storage';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
`;


const Input = styled.TextInput`
  font-size: 15px;
  border: 1px solid #000;
  height: 50px;
  width: 90%;
  padding: 10px;
`;

const Salvar = styled.Button``;

const NameArea = styled.View`
  padding: 20px;
  background-color: #ccc;
  width: 100%;
`;

const Nome = styled.Text`
  font-size: 18px;
`;

export default () => {
  const [nome, setNome] = useState('');
  const [novoNome, setNovoNome] = useState('');

  const handleSave = async () => {
    if (novoNome) {
      await AsyncStorage.setItem('@nome', novoNome);
      setNome(novoNome);
      setNovoNome('');
    }
  };

  const getNome = async () => {
    const n = await AsyncStorage.getItem('@nome');
    setNome(n);
  };

  useEffect(() => {
    getNome();
  }, []);

  return (
    <Page>
      <Input
        placeholder="Qual seu nome?"
        value={novoNome}
        onChangeText={(e) => setNovoNome(e)}
      />
      <Salvar title="Salvar" onPress={handleSave} />
      <NameArea>
        <Nome>Olá {nome}</Nome>
      </NameArea>
    </Page>
*/

/*
const Box = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const BoxBody = styled.View`
  width: 90%;
  height: 200px;
  border-radius: 10px;
  background-color: #fff;
`;

const Botao = styled.Button``;

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Page>
      <Botao title="Mostrar Modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <Box>
          <BoxBody>
            <Botao
              title="Fechar Modal"
              onPress={() => setModalVisible(false)}
            />
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
};
*/

/*
export default () => {
  return (
    <Page>
      <StatusBar barStyle="dark-content" backgroundColor="yellowgreen"  />
    </Page>
  );
};
*/
