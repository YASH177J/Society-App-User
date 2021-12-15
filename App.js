import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './screens/loginScreen';
import { AppTabNavigator } from './ScreenNavigator/bottomTabNavigator';
import SignUpScreen from './screens/signUpScreen';


export default function App() {
  return <AppContainer />;
} 

const switchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignUpScreen },
  Tabs: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
