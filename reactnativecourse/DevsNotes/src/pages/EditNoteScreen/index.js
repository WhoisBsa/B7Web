import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage,
  DeleteButton,
  DeleteButtonText,
} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {Alert} from 'react-native';

export default () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new');

  const navigation = useNavigation();
  const route = useRoute();
  const dispath = useDispatch();
  const list = useSelector((state) => state.notes.list);

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova Anotação' : 'Editar Anotação',
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, title, body]);

  const handleCloseButton = () => {
    navigation.goBack();
  };

  const handleSaveButton = () => {
    if (title && BodyInput) {
      if (status === 'edit') {
        dispath({
          type: 'EDIT_NOTE',
          payload: {key: route.params.key, title, body},
        });
      } else {
        dispath({
          type: 'ADD_NOTE',
          payload: {title, body},
        });
      }
      navigation.goBack();
    } else {
      Alert.alert(
        'Campos vazios!',
        'Por favor, preencha o título e o corpo de sua nova anotação.',
      );
    }
  };

  const handleDeleteButton = () => {
    dispath({
      type: 'DELL_NOTE',
      payload: {key: route.params.key},
    });
    navigation.goBack();
  };

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={(e) => setTitle(e)}
        placeholder="Digite o título da anotação"
        placeholderTextColor="#ccc"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={(e) => setBody(e)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#ccc"
        multiline={true}
        textAlignVertical="top"
      />
      {status === 'edit' && (
        <DeleteButton underlayColor="#ff0000" onPress={handleDeleteButton}>
          <DeleteButtonText>Excluir Anotação</DeleteButtonText>
        </DeleteButton>
      )}
    </Container>
  );
};
