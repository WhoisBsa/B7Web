import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TabAboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab About</Text>
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
