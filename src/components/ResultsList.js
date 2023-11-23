import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.conatainer}>
      <View style={styles.conatiner2}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.CountStyle}>({results.length})</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Results', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  conatainer: {
    marginBottom: 10,
  },
  conatiner2: {
    flexDirection: 'row',
  },
  CountStyle: {
    fontSize: 18,
    color: '#CCCCCC',
  },
});

export default ResultsList;
