import React from 'react';
import Home from '../screens/Home';
import Bio from '../screens/Bio';
import Chat from '../screens/Chat';
import Conversation from '../screens/Conversation';
import VideoCall from '../screens/VideoCall';
import EditProfile from '../screens/EditProfile';
import Test from '../screens/Test';


import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faComment, faUser, faPhone , faCamera} from '@fortawesome/free-solid-svg-icons';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: { backgroundColor: '#3c3c3c' },      
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: '#808080',
      tabBarIndicatorStyle: {
        backgroundColor: '#808080',
        height: 3,
      },
       
      }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} size={25} color={color} />
            ),
            tabBarShowLabel: false,
            }}
        />
        <Tab.Screen 
            name="Chat" 
            component={Chat} 
            options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesomeIcon icon={faComment} size={25} color={color} />
                ),
                tabBarShowLabel: false,
            }}
        />
        <Tab.Screen 
            name="Bio" 
            component={Bio} 
            options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesomeIcon icon={faUser} size={25} color={color} />
                ),
                tabBarShowLabel: false,
            }}
        />
           {/* <Tab.Screen 
            name="VideoCall" 
            component={VideoCall} 
            options={{
                tabBarIcon: ({ color }) => (
                  <FontAwesomeIcon icon={faPhone} size={25} color={color} />
                ),
                tabBarShowLabel: false,
            }}
        /> */}
      <Tab.Screen
        name="Test"
        component={Test}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCamera} size={25} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;