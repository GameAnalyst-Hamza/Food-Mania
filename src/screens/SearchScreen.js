import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  //console.log(results);
  //<Text>we have found {results.length} results</Text>
  const filerResultsByPrice = (price) => {
    //price==='$' || '$$' || '$$$'
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filerResultsByPrice('$')}
          title="Cost Effective"
        />
        <ResultsList results={filerResultsByPrice('$$')} title="Bit Pricier" />
        <ResultsList results={filerResultsByPrice('$$$')} title="Big Spender" />
        <ResultsList results={filerResultsByPrice('$$$$')} title="Royal" />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
