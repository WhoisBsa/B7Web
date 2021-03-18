import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const TabAboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
      <Button
        title="Ir para tela 2"
        onPress={() => navigation.navigate('TabHome2Screen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabAboutScreen;
