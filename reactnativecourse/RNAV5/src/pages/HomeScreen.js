import React, {useState, useLayoutEffect} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const navigation = useNavigation();

  const handelSobreClick = () => {
    navigation.navigate('About');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: count,
    });
  }, [count]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="+1" onPress={handleHeaderPlus} />,
    });
  }, []);

  const handleHeaderPlus = () => {
    setCount((c) => c + 1);
  };

  // const handelSobreClick = () => {
  //   navigation.navigate('About', {name});
  // };

  return (
    <View style={styles.container}>
      <Text>Qual seu nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(t) => setName(t)}
      />
      <Button title="Enviar" onPress={handelSobreClick} />

      <Button
        title="BG Khaki"
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: 'khaki',
            },
          })
        }
      />

      <Button
        title="BG Orange"
        onPress={() =>
          navigation.setOptions({
            headerStyle: {
              backgroundColor: 'orange',
            },
          })
        }
      />

      <Button title="+1" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 40,
    fontSize: 15,
    backgroundColor: '#ddd',
  },
});

export default HomeScreen;
