import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
const Input = ({ placeholder, iconName, pass, onChangeText, value }) => {
  console.log(placeholder);
  return (
    <View style={styles.backgroundStyle}>
      <Icon name={iconName} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        //autoCorrect={false}
        style={styles.inputStyle}
        placeholder={placeholder}
        secureTextEntry={pass}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    height: 60,
    borderRadius: 25,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'white',
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: 'white',
  },
});

export default Input;
