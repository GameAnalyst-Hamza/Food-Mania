import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="e.g Italian, Burger, Sushi"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
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
    borderBottomWidth: 2,
    borderColor: '#FC4C4E',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: '#FC4C4E',
  },
});

export default SearchBar;
