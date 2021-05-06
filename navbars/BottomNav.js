import  React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import PasswordReset from '../screens/PasswordReset'


const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="PasswordReset" component={PasswordReset} />
    </Tab.Navigator>
  );
}