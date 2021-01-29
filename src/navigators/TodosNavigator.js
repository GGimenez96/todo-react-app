import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Todos from '../containers/todos/Todos';
import AddTodo from '../containers/todos/AddTodo';

const TodosStack = createStackNavigator();

export default function TodosNavigator() {
  return (
    <TodosStack.Navigator>
      <TodosStack.Screen
        name='Todos'
        options={{ headerShown: false }}
        component={Todos}
      />
      <TodosStack.Screen
        name='Create'
        options={{ title: 'Add todo' }}
        component={AddTodo}
      />
    </TodosStack.Navigator>
  );
}
