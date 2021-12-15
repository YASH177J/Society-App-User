import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import StudentListScreen from '../screens/homeScreen';

export const AppStackNavigator = createStackNavigator(
  {
    StudentListScreen: {
      screen: StudentListScreen,
      navigationOptions: { headerShown: false },
    },
  },
  {
    initialRouteName: 'StudentListScreen',
  }
);
