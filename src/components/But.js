import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
const But = ({ text, onPress }) => {
  console.log(text);
  return (
    <TouchableOpacity style={styles.btnstyle} onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    borderRadius: 25,
    marginHorizontal: 40,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'white',
    flex: 1,
  },
  btnstyle: {
    flex: 1,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default But;
