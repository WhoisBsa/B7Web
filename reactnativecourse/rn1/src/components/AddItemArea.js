import React, {useState} from 'react';
import styled from 'styled-components/native';
// import 'react-native-get-random-values';
// import {v4 as uuid} from 'uuid';

const AdditemArea = styled.View`
  background-color: #ccc;
  padding: 10px;
`;

const AddItemInput = styled.TextInput`
  background-color: #fff;
  font-size: 15px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

export default (props) => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    // if (item.trim()) {
    //   let items = [...props.items];
    //   items.push({
    //     id: uuid(),
    //     task: item.trim(),
    //     done: false,
    //   });
    //   props.setItems(items);
    // }
    // setItem('');

    if (item.trim()) {
      props.onAdd(item);
      setItem('');
    }
  };

  return (
    <AdditemArea>
      <AddItemInput
        placeholder="Digite um novo item..."
        value={item}
        onChangeText={(e) => setItem(e)}
        onSubmitEditing={handleSubmit}
        returnKeyType="send"
      />
    </AdditemArea>
  );
};
