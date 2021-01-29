import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import TodoItem from '../../components/TodoItem';
import MainHeader from '../../components/MainHeader';
import { useSelector } from 'react-redux';
import NoItems from '../../components/NoItems';

export default function Todos({ navigation, route }) {
  const todos = useSelector((state) => state.todos);
  const renderItem = ({ item }) => (
    <TodoItem navigation={navigation} route={route} item={item} />
  );

  const content = todos?.length ? (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  ) : (
    <NoItems />
  );

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Todos' navigation={navigation} />
        {content}
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: StatusBar.currentHeight || 20,
    flex: 1,
  },
});
