import React from 'react';
import {Text, SafeAreaView, StyleSheet, VirtualizedList} from 'react-native';
import EditTextView from './EditTextView';

const hundredItems = Array.from({length: 100}, (_, i) => i);

const renderItem = ({item}) => <Text style={styles.text}>Item #{item}</Text>;

// The inverted prop adds a style to the FlatList as array,
// and somehow thats causing the issue i believe. When not setting
// the inverted prop, the issue is not present.
export default () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <VirtualizedList
        inverted
        // NOTE: this doesn't crash
        // style={{
        //   transform: [
        //     {
        //       scaleY: -1,
        //     },
        //   ],
        // }}
        // contentContainerStyle={{
        //   transform: [
        //     {
        //       scaleY: -1,
        //     },
        //   ],
        // }}
        data={hundredItems}
        getItemCount={() => hundredItems.length}
        getItem={(data, index) => data[index]}
        keyExtractor={item => item.toString()}
        renderItem={renderItem}
      />
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
});
