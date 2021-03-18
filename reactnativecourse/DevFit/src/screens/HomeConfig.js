/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';

const Container = styled.SafeAreaView`
  flex: 1;
  margin: 0 30px;
`;

const Label = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const ListArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DayItem = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const DayItemText = styled.Text``;

const LevelItem = styled.TouchableHighlight`
  background-color: #eee;
  height: 30px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const LevelItemText = styled.Text``;

const ResetButton = styled.Button``;

const Page = (props) => {
  const toggleWorkoutDay = (d) => {
    let newWorkoutDays = [...props.workoutDays];

    if (newWorkoutDays.includes(d)) {
      if (newWorkoutDays.length === 1) {
        alert('Calma ae! Você tem que treinar pelo menos 1 dia.');
        return;
      }
      newWorkoutDays = newWorkoutDays.filter((i) => i !== d);
    } else {
      newWorkoutDays.push(d);
    }

    props.setWorkoutDays(newWorkoutDays);
  };

  const resetAction = () => {
    props.reset();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'StarterStack'})],
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <Container>
      <Label>Seu nome completo:</Label>
      <Input value={props.name} onChangeText={(e) => props.setName(e)} />

      <Label>Dias em que você treina: </Label>
      <ListArea>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(1)}
          style={
            props.workoutDays.includes(1) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(2)}
          style={
            props.workoutDays.includes(2) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>T</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(3)}
          style={
            props.workoutDays.includes(3) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(4)}
          style={
            props.workoutDays.includes(4) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>Q</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(5)}
          style={
            props.workoutDays.includes(5) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(6)}
          style={
            props.workoutDays.includes(6) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>S</DayItemText>
        </DayItem>
        <DayItem
          underlayColor="transparent"
          onPress={() => toggleWorkoutDay(0)}
          style={
            props.workoutDays.includes(0) ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <DayItemText>D</DayItemText>
        </DayItem>
      </ListArea>

      <Label>Seu nível:</Label>
      <ListArea>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('beginner')}
          style={
            props.level === 'beginner' ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <LevelItemText>Iniciante</LevelItemText>
        </LevelItem>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('intermediate')}
          style={
            props.level === 'intermediate' ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <LevelItemText>Intermediário</LevelItemText>
        </LevelItem>
        <LevelItem
          underlayColor="transparent"
          onPress={() => props.setLevel('advanced')}
          style={
            props.level === 'advanced' ? {backgroundColor: '#a5e8bc'} : {}
          }>
          <LevelItemText>Avançado</LevelItemText>
        </LevelItem>
      </ListArea>

      <Label>VOcê quer resetar tudo?</Label>
      <ResetButton title="Resetar Tudo" onPress={resetAction} />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: 'Configurações',
  };
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: (workoutDays) =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
    setLevel: (level) => dispatch({type: 'SET_LEVEL', payload: {level}}),
    reset: () => dispatch({type: 'RESET'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
