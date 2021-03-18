/* eslint-disable no-alert */
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {connect} from 'react-redux';
import {StackActions, NavigationActions} from 'react-navigation';
import {StatusBar} from 'react-native';

import ExerciseItem from '../components/ExerciseItem';

const Container = styled.ImageBackground`
  flex: 1;
  background-color: black;
  align-items: center;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  background-color: rgba(1, 59, 14, 0.9);
`;

const WorkoutHeader = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  height: 70px;
`;

const WorkoutTitle = styled.Text`
  flex: 1;
  color: white;
  font-size: 20px;
`;

const WorkoutClose = styled.TouchableHighlight`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const WorkoutCloseText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
`;

const WorkoutList = styled.FlatList`
  width: 90%;
  flex: 1;
`;

const Page = (props) => {
  let workout = props.navigation.state.params.workout;

  const [exercises, setExercises] = useState([...workout.exercises]);

  const checkAction = (item, index) => {
    let newExercises = [...exercises];

    if (!item.done) {
      newExercises[index].done = true;
    } else {
      newExercises[index].done = false;
    }
    setExercises(newExercises);

    checkWorkout();
  };

  const checkWorkout = () => {
    if (exercises.every((i) => i.done)) {
      alert('PARABÉNS!!! Você Finalizou o treino de hoje!');

      let today = new Date();
      let thisYear = today.getFullYear();
      let thisMonth = today.getMonth() + 1;
      let thisDay = today.getDate();
      thisMonth = thisMonth < 10 ? '0' + thisMonth : thisMonth;
      thisDay = thisDay < 10 ? '0' + thisDay : thisDay;
      let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

      props.addProgress(dFormated);
      props.setLastWorkout(workout.id);

      props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({routeName: 'AppTab'})],
        }),
      );
    }
  };

  return (
    <Container source={require('../assets/fitness.jpg')}>
      <StatusBar barStyle="light-content" />
      <SafeArea>
        <WorkoutHeader>
          <WorkoutTitle>{workout.name}</WorkoutTitle>
          <WorkoutClose
            onPress={() => props.navigation.goBack()}
            underlayColor="transparent">
            <WorkoutCloseText>X</WorkoutCloseText>
          </WorkoutClose>
        </WorkoutHeader>
        <WorkoutList
          data={exercises}
          renderItem={({item, index}) => (
            <ExerciseItem
              data={item}
              index={index}
              checkAction={() => checkAction(item, index)}
              keyExtractor={() => item.key.toString()}
            />
          )}
        />
      </SafeArea>
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    headerShown: false,
  };
};

const mapStateToProps = (state) => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
    lastWorkout: state.userReducer.lastWorkout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProgress: (date) => dispatch({type: 'ADD_PROGRESS', payload: {date}}),
    setLastWorkout: (id) => dispatch({type: 'SET_LASTWORKOUT', payload: {id}}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
