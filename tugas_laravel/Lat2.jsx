import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Matkul from './DataMatakuliah/Matkul';
import Dosen from './DataDosen/Dosen';
import Mahasiswa from './DataMahasiswa/Mahasiswa';
import Icon from 'react-native-vector-icons/Ionicons';
import NavMahasiswa from './DataMahasiswa/NavMahasiswa';
import NavDosen from './DataDosen/NavDosen';
import NavMatkul from './DataMatakuliah/NavMatkul';

const Tab = createBottomTabNavigator();
export default function Lat2() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Mahasiswa') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Dosen') {
              iconName = focused ? 'body' : 'body-outline';
            } else if (route.name === 'Matkul') {
              iconName = focused ? 'book' : 'book-outline';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#850909',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen
          name="Mahasiswa"
          component={NavMahasiswa}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Dosen"
          component={NavDosen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Matkul"
          component={NavMatkul}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
