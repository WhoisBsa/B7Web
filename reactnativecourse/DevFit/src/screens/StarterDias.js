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

const BoldText = styled.Text`
  font-weight: bold;
`;

const DaysArea = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const NextButton = styled.Button``;

const Page = (props) => {
  let firstName = props.name.split(' ')[0];

  const toggleDay = (d) => {
    let newWorkoutDays = [...props.workoutDays];

    if (!props.workoutDays.includes(d)) {
      // inserir
      newWorkoutDays.push(d);
    } else {
      // remover
      newWorkoutDays = newWorkoutDays.filter((i) => i !== d);
    }

    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({workoutDays: newWorkoutDays});
  };

  return (
    <Container>
      <HeaderText>
        Opa, <BoldText>{firstName}</BoldText>, tudo bem?
      </HeaderText>
      <HeaderText>
        Quais <BoldText>dias da semana</BoldText> você pretende treinar?
      </HeaderText>

      <DaysArea>
        <DefaultButton
          bgcolor={props.workoutDays.includes(1) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(1)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Segunda</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(2) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(2)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Terça</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(3) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(3)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Quarta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(4) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(4)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Quinta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(5) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(5)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Sexta</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(6) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(6)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Sábado</Text>
        </DefaultButton>
        <DefaultButton
          bgcolor={props.workoutDays.includes(0) ? '#a5e8bc' : false}
          width={'100%'}
          onPress={() => toggleDay(0)}
          style={{marginBottom: 20}}
          underlayColor="#ccc">
          <Text>Domingo</Text>
        </DefaultButton>
      </DaysArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      alert('Você precisa treinar pelo menos 1 dia!');
      return;
    }

    navigation.navigate('StarterNivel');
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
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: (workoutDays) =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
