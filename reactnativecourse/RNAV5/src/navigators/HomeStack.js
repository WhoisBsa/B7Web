import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabHome2Screen from '../pages/TabHome2Screen';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="TabHomeScreen" component={TabHomeScreen} />
    <MainStack.Screen name="TabHome2Screen" component={TabHome2Screen} />
  </MainStack.Navigator>
);
