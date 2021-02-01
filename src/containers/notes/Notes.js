import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import Note from '../../components/Note';
import MainHeader from '../../components/MainHeader';
import { useSelector } from 'react-redux';
import NoItems from '../../components/NoItems';

export default function Notes({ navigation, route }) {
  const notes = useSelector((state) => state.notes);
  const renderItem = ({ item }) => (
    <Note navigation={navigation} route={route} note={item} />
  );

  const content = notes?.length ? (
    <FlatList
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      style={styles.list}
    />
  ) : (
    <NoItems screen='notes' />
  );

  return (
    <Container style={styles.container}>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Notes' navigation={navigation} />
        {content}
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
    flex: 1,
  },
  list: {
    backgroundColor: 'white',
    flexGrow: 0,
    borderRadius: 20,
  },
});
