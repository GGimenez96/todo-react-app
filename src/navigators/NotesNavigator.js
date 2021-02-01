import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Notes from '../containers/notes/Notes';
import AddNote from '../containers/notes/AddNote';

const NotesStack = createStackNavigator();

export default function NotesNavigator() {
  return (
    <NotesStack.Navigator>
      <NotesStack.Screen
        name='Notes'
        options={{ headerShown: false }}
        component={Notes}
      />
      <NotesStack.Screen
        name='Create'
        options={{ title: 'Add note' }}
        component={AddNote}
      />
    </NotesStack.Navigator>
  );
}
