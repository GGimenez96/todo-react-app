import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, ListItem, Left, Body, Right } from 'native-base';
import { useDispatch } from 'react-redux';
import { markedAsDone, todoRemoved } from '../store/reducers/todosSlice';

export default function TodoItem({ item }) {
  const dispatch = useDispatch();
  const markAsDone = () => {
    dispatch(markedAsDone({ todoId: item.id }));
  };
  const removeTodo = () => {
    dispatch(todoRemoved({ todoId: item.id }));
  };
  return (
    <ListItem icon>
      <Left>
        <TouchableOpacity onPressOut={markAsDone}>
          <Icon
            style={styles.checkIcon}
            name={item.done ? 'checkmark-circle-outline' : 'ellipse-outline'}
          />
        </TouchableOpacity>
      </Left>
      <Body>
        <TouchableOpacity>
          <Text style={item.done ? styles.done : null}>{item.title}</Text>
        </TouchableOpacity>
      </Body>
      <Right>
        <TouchableOpacity onPressOut={removeTodo}>
          <Icon name={'trash-outline'} />
        </TouchableOpacity>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  checkIcon: {
    color: 'gray',
  },
  done: {
    textDecorationLine: 'line-through',
  },
});
