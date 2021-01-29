import React, { useState, useEffect } from 'react';
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
import { todoAdded, todoUpdated } from '../../store/reducers/todosSlice';

export default function AddTodo({ route, navigation }) {
  const isEdit = route.params?.item ? true : false;
  const todoId = route.params?.item.id;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(isEdit ? route.params.item.title : '');
  useEffect(() => {
    if (isEdit) {
      navigation.setOptions({ title: 'Edit todo' });
    }
  }, [isEdit]);

  const onTitleChanged = (text) => {
    setTitle(text);
  };
  const onSave = () => {
    if (title) {
      if (isEdit) {
        dispatch(todoUpdated(title, todoId));
        navigation.navigate('Todos');
      } else {
        dispatch(todoAdded(title));
        navigation.navigate('Todos');
      }
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
              autoFocus
            />
          </Item>
          <Button
            style={styles.button}
            block
            onPress={onSave}
            disabled={!title}
          >
            <Text>Done</Text>
          </Button>
        </Form>
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
