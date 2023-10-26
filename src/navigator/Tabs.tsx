/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigations } from './Navigations';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor:'white',
    }}
    screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#5856D6',
        tabBarLabelStyle:{
            marginBottom:(Platform.OS === 'ios') ? 0 : 10,
        },
        tabBarStyle:{
            position:'absolute',
            backgroundColor:'rgba(255,255,255,0.92)',
            borderWidth:0,
            elevation:0,
            height:(Platform.OS === 'ios') ? 80 : 60,
        },
    }}>
      <Tab.Screen
        name="HomeScreen"
        component={Navigations}
        options={{
            tabBarLabel:'Listado',
            tabBarIcon:({color}) => (
                <Icon
                    color={color}
                    size={20}
                    name="list-outline"
                />
            ),
        }}
         />
      <Tab.Screen
        name="SearchScreen"
        component={tab2Screen}
        options={{
            tabBarLabel:'Buscar',
            tabBarIcon:({color}) => (
                <Icon
                    color={color}
                    size={20}
                    name="search-outline"
                />
            ),
        }}
        />
    </Tab.Navigator>
  );
};
