import React, {useState, useEffect} from 'react';
import {Alert, FlatList, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Page, Header, Input, Texto, Botao} from '../layout/HomeStyle';
import {v4 as uuid} from 'uuid';

const HomeStyle = () => {
  const [ingredientes, setIngredientes] = useState([]);
  const [ingrediente, setIngrediente] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (ingrediente.trim()) {
      let aux = [...ingredientes];
      aux.push({
        id: uuid(),
        ig: ingrediente,
      });
      setIngrediente('');
      setIngredientes(aux);
    } else {
      Alert.alert('Campo vazio!', 'Por favor, preencha todos os campos.');
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Botao title="Adicionar" onPress={handleSubmit} />,
    });
  }, [ingrediente]);

  return (
    <Page>
      <StatusBar backgroundColor="#333" />
      <Header>Faça um Bolo</Header>
      <Input
        placeholder="Digite um ingrediente"
        value={ingrediente}
        onChangeText={(i) => setIngrediente(i)}
        returnKeyType="send"
        onSubmitEditing={handleSubmit}
      />
      <FlatList
        data={ingredientes}
        renderItem={({item}) => <Texto>{item.ig}</Texto>}
        keyExtractor={(item) => item.id}
      />
    </Page>
  );
};

export default HomeStyle;
