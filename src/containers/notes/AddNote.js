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
} from 'native-base';
import { useDispatch } from 'react-redux';
import { noteAdded, noteUpdated } from '../../store/reducers/notesSlice';

export default function AddNote({ route, navigation }) {
  const isEdit = route.params?.note ? true : false;
  const noteId = route.params?.note.id;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(isEdit ? route.params.note.title : '');
  const [content, setContent] = useState(
    isEdit ? route.params.note.content : ''
  );
  useEffect(() => {
    if (isEdit) {
      navigation.setOptions({ title: 'Edit note' });
    }
  }, [isEdit]);

  const onTitleChanged = (text) => {
    setTitle(text);
  };
  const onContentChanged = (text) => {
    setContent(text);
  };
  const onSave = () => {
    if (title && content) {
      if (isEdit) {
        dispatch(noteUpdated(title, content, noteId));
        navigation.navigate('Notes');
      } else {
        dispatch(noteAdded(title, content));
        navigation.navigate('Notes');
      }
    }
  };
  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <Form>
          <Item>
            <Input
              type='text'
              id='noteTitle'
              name='noteTitle'
              value={title}
              onChangeText={onTitleChanged}
              placeholder='Title'
              autoFocus
            />
          </Item>
          <Item>
            <Input
              type='text'
              id='noteContent'
              name='noteContent'
              value={content}
              onChangeText={onContentChanged}
              placeholder='Content'
              autoFocus
              multiline
              style={styles.contentInput}
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
  contentInput: {
    minHeight: 50,
    paddingVertical: 15,
  },
});
