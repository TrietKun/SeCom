import React from 'react';
import Home from '../screens/Home';
import Bio from '../screens/Bio';
import Chat from '../screens/Chat';
import Conversation from '../screens/Conversation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome,faComment, faUser } from '@fortawesome/free-solid-svg-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faHome} size={size} color={color} />
            ),
            tabBarShowLabel: false,
            }}
        />
        <Tab.Screen 
            name="Chat" 
            component={Chat} 
            options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faComment} size={size} color={color} />
                ),
                tabBarShowLabel: false,
            }}
        />
        <Tab.Screen 
            name="Bio" 
            component={Conversation} 
            options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faUser} size={size} color={color} />
                ),
                tabBarShowLabel: false,
            }}
        />
        
    </Tab.Navigator>
  );
}

export default MyTabs;