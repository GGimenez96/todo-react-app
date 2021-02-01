import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Icon, View } from 'native-base';

export default function NoItems({ screen }) {
  let content =
    screen === 'todos' ? (
      <>
        <Icon style={styles.icon} name='happy-outline'></Icon>
        <Text style={styles.text}>Nothing to do today!</Text>
        <Text style={styles.text}>
          Use the button on the top right corner to add a task.
        </Text>
      </>
    ) : (
      <>
        <Icon style={styles.icon} name='document-outline'></Icon>
        <Text style={styles.text}>You don't have any notes.</Text>
        <Text style={styles.text}>
          Use the button on the top right corner to add one.
        </Text>
      </>
    );
  return <View style={styles.container}>{content}</View>;
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
