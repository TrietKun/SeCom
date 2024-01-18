import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Login from '../screens/Login';
import TabHome from './tab';
import Intro from '../screens/Intro';
import Home from '../screens/Home';
import Header from '../screens/HeaderStack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    
    screenOptions={{headerShown : true}}>
      <Stack.Screen name="Intro" component={TabHome} options={{header: props => <Header {...props} />}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabHome" component={TabHome} />
    </Stack.Navigator>
  );
}

export default MyStack;