import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

export default function MainHeader({ navigation, title }) {
  const handleCreate = () => {
    navigation.navigate('Create');
  };

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <Button icon transparent onPress={handleCreate}>
        <Icon name='create-outline' />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    paddingHorizontal: 10,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
