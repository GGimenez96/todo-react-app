import React from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import { Container, Content } from 'native-base';
import TodoItem from '../components/TodoItem';
import MainHeader from '../components/MainHeader';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function Todos() {
  const renderItem = ({ item }) => <TodoItem item={item} />;

  return (
    <Container>
      <Content padder contentContainerStyle={styles.content}>
        <MainHeader title='Todos' />
        <FlatList
          data={DATA}
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
