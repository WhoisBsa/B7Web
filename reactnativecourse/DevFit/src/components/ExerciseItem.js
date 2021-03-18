import React from 'react';
import styled from 'styled-components/native';

import UseMuscleImage from '../components/UseMuscleImage';

const ExerciseItemArea = styled.View`
  height: 50px;
  flex-direction: row;
  margin-bottom: 10px;
`;

const ExerciseMuscleArea = styled.View`
  width: 50px;
  height: 50px;
  background-color: #ffcc98;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ExerciseMuscleImage = styled.Image`
  width: 35px;
  height: 35px;
`;

const ExerciseInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
  flex: 1;
`;

const ExerciseName = styled.Text`
  font-size: 15px;
  color: #fff;
`;

const ExerciseDetails = styled.Text`
  font-size: 12px;
  color: #999;
`;

const ExerciseCheck = styled.TouchableHighlight`
  width: 60px;
  justify-content: center;
  align-items: center;
`;

const ExerciseDone = styled.Image`
  width: 40px;
  height: 40px;
`;

const ExerciseUnDone = styled.View`
  width: 40px;
  height: 40px;
  border: 5px solid #fff;
  border-radius: 20px;
`;

const ExerciseCount = styled.View`
  width: 25px;
  justify-content: center;
`;

const ExerciseCountText = styled.Text`
  font-size: 17px;
  color: #fff;
`;

export default (props) => {
  return (
    <ExerciseItemArea>
      <>
        <ExerciseCount>
          <ExerciseCountText>{props.index + 1}.</ExerciseCountText>
        </ExerciseCount>
        <ExerciseMuscleArea>
          <ExerciseMuscleImage source={UseMuscleImage(props.data.muscle)} />
        </ExerciseMuscleArea>

        <ExerciseInfo>
          <ExerciseName>{props.data.name}</ExerciseName>
          <ExerciseDetails>
            {`${props.data.sets} séries - ${props.data.reps} rep ${
              props.data.load ? `- ${props.data.load}kg` : ''
            }`}
          </ExerciseDetails>
        </ExerciseInfo>
        <ExerciseCheck onPress={props.checkAction} underlayColor="transparent">
          {props.data.done ? (
            <ExerciseDone source={require('../assets/check-white.png')} />
          ) : (
            <ExerciseUnDone />
          )}
        </ExerciseCheck>
      </>
    </ExerciseItemArea>
  );
};
