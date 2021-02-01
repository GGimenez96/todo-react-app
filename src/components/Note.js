import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, ListItem, Body, Right } from 'native-base';
import { useDispatch } from 'react-redux';
import { noteRemoved } from '../store/reducers/notesSlice';

export default function Note({ navigation, note }) {
  const dispatch = useDispatch();
  const removeNote = () => {
    dispatch(noteRemoved({ noteId: note.id }));
  };
  new Date().to;
  return (
    <ListItem iconRight>
      <Body>
        <TouchableOpacity
          onPressOut={() => {
            navigation.navigate('Create', { note });
          }}
        >
          <Text style={styles.title}>{note.title}</Text>
          <Text style={styles.date}>
            {new Date(note.updated).toLocaleString()}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {note.content}
          </Text>
        </TouchableOpacity>
      </Body>
      <Right>
        <TouchableOpacity onPressOut={removeNote}>
          <Icon name={'trash-outline'} />
        </TouchableOpacity>
      </Right>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 5,
  },
  date: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  content: {
    textAlign: 'justify',
  },
});
