import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

const hundredItems = Array.from({length: 100}, (_, i) => i);

export default () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <FlatList
        inverted
        data={hundredItems}
        renderItem={({item}) => <Text style={styles.text}>Item #{item}</Text>}
      />
      <TextInput style={styles.input} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    width: '100%',
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  input: {
    height: 50,
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
