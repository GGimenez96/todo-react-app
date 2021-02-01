import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import MainHeader from '../components/MainHeader';

export default function Notes() {
  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Notes' />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  content: {
    marginTop: StatusBar.currentHeight || 20,
  },
});
