import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import LatContact from './LatContact';
import AlbumFotoScreen from './AlbumFotoScreen';

const Tab = createBottomTabNavigator();

export default function Tugas5() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'; // Change this line
            } else if (route.name === 'Contact') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Album Bucin') {
              iconName = focused ? 'image' : 'image-outline'; // Change this line
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Contact" component={LatContact} />
        <Tab.Screen name="Album Bucin" component={AlbumFotoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
