import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Icon, View } from 'native-base';

export default function NoItems() {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name='happy-outline'></Icon>
      <Text style={styles.text}>Nothing here!</Text>
      <Text style={styles.text}>Use the button on the top right corner.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
  },
  icon: {
    fontSize: 100,
  },
});
