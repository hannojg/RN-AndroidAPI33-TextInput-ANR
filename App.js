import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import EditTextView from './EditTextView';

// Already ~8 children are enough to cause the issue
const hundredItems = Array.from({length: 100}, (_, i) => i);

const renderItem = ({item}) => <Text style={styles.text}>Item #{item}</Text>;

// The inverted prop adds a style to the FlatList as array,
// and somehow thats causing the issue i believe. When not setting
// the inverted prop, the issue is not present.
export default () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.list}>
        {hundredItems.map(item => (
          <View key={item} style={styles.item}>
            {renderItem({item})}
          </View>
        ))}
      </View>
      <EditTextView style={styles.input} />
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
  list: {
    flex: 1,
    transform: [{rotate: '180deg'}],
  },
  item: {
    transform: [{rotate: '180deg'}],
  },
});
