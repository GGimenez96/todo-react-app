import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon, ListItem, Left, Body } from 'native-base';

export default function TodoItem({ item }) {
  return (
    <ListItem icon>
      <Left>
        <TouchableOpacity>
          <Icon style={styles.checkIcon} name='ellipse-outline' />
        </TouchableOpacity>
      </Left>
      <Body>
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </Body>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  checkIcon: {
    color: 'gray',
  }
});
