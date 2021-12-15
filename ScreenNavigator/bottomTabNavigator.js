import * as React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {AppStackNavigator} from './appStackNavigator';
import Settings from '../screens/Settings';
import Complaint from '../screens/addComplaintScreen'
import ViewComplaints from '../screens/yourComplaints'
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';



export const AppTabNavigator = createBottomTabNavigator({

  List: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Ionicons name="home" size={30}></Ionicons>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'green', inactiveTintColor: 'gray' },
      tabBarLabel: 'Dashboard',
    },
  },
  Profile: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Feather name="user" size={30}/>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'green', inactiveTintColor: 'gray' },
      tabBarLabel: '',
    },
  },
  Complaint: {
    screen: Complaint,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
         <Ionicons name="add" size={30}></Ionicons>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'green', inactiveTintColor: 'gray' },
      tabBarLabel: 'Add A Complaint',
    },
  },
ViewComplaint: {
    screen: ViewComplaints,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <View>
         <Ionicons name="document" size={30}></Ionicons>
        </View>
      ),
      tabBarOptions: { activeTintColor: 'green', inactiveTintColor: 'gray' },
      tabBarLabel: '   Your Complaints',
    },
  },
});
