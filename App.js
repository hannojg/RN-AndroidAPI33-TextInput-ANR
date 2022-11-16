import React from 'react';
import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
// import EditTextView from './EditTextView';

// Already ~8 children are enough to cause the issue
const hundredItems = Array.from({length: 100}, (_, i) => i);

const renderItem = ({item}) => (
  <View
    style={{
      transform: [
        {
          matrix: scaleYInvertedMatrix,
        },
      ],
    }}>
    <Text style={styles.text}>Item #{item}</Text>
  </View>
);

// THIS MATRIX, ALTHOUGH CORRECT, DOESN'T WORK
// const scaleYInvertedMatrix = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// THIS ONE DOES:
const scaleYInvertedMatrix = [
  // seems to work
  -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1,
];

// scaleYInvertedMatrix to transform operations:
// scaleX(-1) scaleY(-1) translate(0, 0)

// The inverted prop adds a style to the FlatList as array,
// and somehow thats causing the issue i believe. When not setting
// the inverted prop, the issue is not present.
const App = () => {
  return (
    <View style={styles.flex1}>
      <FlatList
        data={hundredItems}
        renderItem={renderItem}
        style={{
          transform: [
            {
              matrix: scaleYInvertedMatrix,
            },
          ],
        }}
      />
      <TextInput style={styles.input} />
    </View>
  );
};

export default App;

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
