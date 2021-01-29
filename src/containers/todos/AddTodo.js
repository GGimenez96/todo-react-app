import React, { useState } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  Icon,
} from 'native-base';
import { useDispatch } from 'react-redux';
import { todoAdded } from '../../store/reducers/todosSlice';

export default function AddTodo({ navigation }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const onTitleChanged = (text) => {
    setTitle(text);
  };
  const onSave = () => {
    if (title) {
      dispatch(todoAdded(title));
      setTitle('');
      navigation.navigate('Todos');
    }
  };
  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Form>
          <Item>
            <Icon name='ellipse-outline'></Icon>
            <Input
              type='text'
              id='todoTitle'
              name='todoTitle'
              value={title}
              onChangeText={onTitleChanged}
              placeholder='Next todo...'
            />
          </Item>
        </Form>
        <Button style={styles.button} block onPress={onSave}>
          <Text>Done</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: StatusBar.currentHeight || 20,
  },
  button: {
    marginTop: 20,
  },
});
