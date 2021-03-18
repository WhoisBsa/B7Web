import React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

function CustomTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        let label = route.name;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        }

        const isFocused = state.index === index;

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        if (route.name === 'TabHome') {
          return (
            <TouchableHighlight
              style={styles.middleTab}
              onPress={handleTabPress}>
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}>
                {label}
              </Text>
            </TouchableHighlight>
          );
        } else {
          return (
            <TouchableHighlight
              style={styles.tab}
              onPress={handleTabPress}
              underlayColor="transparent">
              <Text
                style={[styles.label, isFocused ? styles.labelFocused : null]}>
                {label}
              </Text>
            </TouchableHighlight>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'khaki',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  middleTab: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    marginTop: -20,
    borderRadius: 35,
    backgroundColor: 'khaki',
  },
  label: {
    fontSize: 16,
    color: 'yellowgreen',
  },
  labelFocused: {
    fontSize: 16,
    color: 'dodgerblue',
  },
});

export default CustomTabBar;
