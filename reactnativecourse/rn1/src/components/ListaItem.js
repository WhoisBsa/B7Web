import React from 'react';
import styled from 'styled-components/native';

const Item = styled.TouchableHighlight`
  flex-direction: row;
  background-color: #eee;
  height: 50px;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const ItemText = styled.Text`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
`;

const ItemCheck = styled.Text`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 5px solid #ccc;
  background-color: ${(props) => (props.done ? '#ccc' : 'transparent')};
`;

export default (props) => {
  return (
    <Item onPress={props.onPress} underlayColor="#DDD" activeOpacity={1}>
      <>
        <ItemText>{props.data.task}</ItemText>
        <ItemCheck done={props.data.done} />
      </>
    </Item>
  );
};
