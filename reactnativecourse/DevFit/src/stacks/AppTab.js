import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeStack from './HomeStack';
import WorkoutStack from './WorkoutStack';
import MyWorkoutsStack from './MyWorkoutsStack';

import CustomTabBar from '../components/CustomTabBar';

const AppTab = createBottomTabNavigator(
  {
    HomeStack,
    WorkoutStack: {
      screen: WorkoutStack,
      navigationOptions: {tabBarVisible: false},
    },
    MyWorkoutsStack,
  },
  {
    tabBarComponent: (props) => (
      <CustomTabBar
        {...props}
        items={[
          {
            type: 'regular',
            text: 'Início',
            icon: require('../assets/home.png'),
            route: 'HomeStack',
          },
          {
            type: 'big',
            icon: require('../assets/dumbbell.png'),
            route: 'WorkoutStack',
          },
          {
            type: 'regular',
            text: 'Meus Treinos',
            icon: require('../assets/myworkouts.png'),
            route: 'MyWorkouts',
          },
        ]}
      />
    ),
  },
  {
    defaultNavigationOptions: {
      cardStyle: {backgroundColor: 'white'},
    },
  },
);

export default AppTab;
