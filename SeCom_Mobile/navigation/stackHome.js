import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Login from '../screens/Login';
import TabHome from './tab';
import Intro from '../screens/Intro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabHome" component={TabHome} />
    </Stack.Navigator>
  );
}

export default MyStack;