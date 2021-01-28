import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todos from '../containers/Todos';
import Notes from '../containers/Notes';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Todos') {
            iconName = focused ? 'list-outline' : 'list';
          } else if (route.name === 'Notes') {
            iconName = focused ? 'pencil' : 'pencil-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Todos' component={Todos} />
      <Tab.Screen name='Notes' component={Notes} />
    </Tab.Navigator>
  );
}