import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import MainHeader from '../components/MainHeader';

export default function Notes() {
  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Notes' />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: StatusBar.currentHeight || 20,
  },
});
