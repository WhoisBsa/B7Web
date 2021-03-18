/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 50px;
`;

const HeaderText = styled.Text`
  font-size: 15px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const LevelArea = styled.View`
  width: 100%;
`;

const BoldText = styled.Text`
  font-weight: bold;
`;

const NextButton = styled.Button``;

const Page = (props) => {
  let funnyPhrase = '';

  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
      break;
    case 2:
      funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias dá pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser TOP!';
      break;
    case 5:
      funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!';
      break;
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo...';
      break;
    case 7:
      funnyPhrase = 'Wooow! Todo dia?! WTF?!';
      break;
  }

  const setMyLevel = (l) => {
    props.setLevel(l);
    props.navigation.setParams({level: l});
  };

  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <HeaderText>
        <BoldText>Qual seu nível hoje?</BoldText>
      </HeaderText>

      <LevelArea>
        <DefaultButton
          bgcolor={props.level === 'beginner' ? '#a5e8bc' : false}
          onPress={() => setMyLevel('beginner')}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Iniciante / Um frango</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.level === 'intermediate' ? '#a5e8bc' : false}
          onPress={() => setMyLevel('intermediate')}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Intermediário / Me viro bem</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.level === 'advanced' ? '#a5e8bc' : false}
          onPress={() => setMyLevel('advanced')}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Avançado / Primo do The Rock</Text>
        </DefaultButton>
      </LevelArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert('Você precisa escolher uma opção.');
      return;
    }

    navigation.navigate('StarterRecommendations');
  };

  return {
    title: '',
    headerRight: () => <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = (state) => {
  return {
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLevel: (level) => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
