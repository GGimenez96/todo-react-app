import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import TodoItem from '../../components/TodoItem';
import MainHeader from '../../components/MainHeader';
import { useSelector } from 'react-redux';

export default function Todos({ navigation }) {
  const todos = useSelector((state) => state.todos);
  const renderItem = ({ item }) => <TodoItem item={item} />;

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Todos' navigation={navigation} />
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: StatusBar.currentHeight || 20,
  },
});
