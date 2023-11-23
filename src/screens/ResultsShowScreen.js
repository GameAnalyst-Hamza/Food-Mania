import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { } from '@react-navigation/native';
import yelp from '../api/yelp';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

//import Map from '../screens/Map';

const ResultsShowScreen = ({ route, navigation }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;
  console.log(result);

  //console.log(result);

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ borderWidth: 1, borderColor: 'red' }}>
        <FlatList
          horizontal
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.headerstyle}>{result.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.detailstyle}>Catogry</Text>
          <Text style={styles.detailstyle}>Phone #</Text>
          <Text style={styles.detailstyle}>City</Text>
          <Text style={styles.detailstyle}>Address</Text>
          <Text style={styles.detailstyle}>Status</Text>
        </View>
        <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'black' }}>
          <Text style={styles.detailstyle2}>
            {result.categories.map((home) => (
              <Text keyExtractor={result.alias}>{home.alias}</Text>
            ))}
          </Text>
          <Text style={styles.detailstyle2}>{result.display_phone}</Text>
          <Text style={styles.detailstyle2}>{result.location.city}</Text>
          <Text style={styles.detailstyle2}>{result.location.address1}</Text>
          <Text style={styles.detailstyle2}>
            {result.hours.map((home) => (
              <Text keyExtractor={result.alias}>
                {home.is_open_now ? <Text>Open</Text> : <Text>Closed</Text>}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ borderBottomWidth: 1, borderBottomColor: '#FC4C4E' }}
          onPress={() =>
            navigation.navigate('Map', {
              lat: result.coordinates.latitude,
              long: result.coordinates.longitude,
            })
          }>
          <Text style={{ color: '#FC4C4E', fontSize: 18, fontWeight: 'bold' }}>
            Show On Map?
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
  headerstyle: {
    fontSize: 22,
    color: '#FC4C4E',
  },
  detailstyle: {
    fontSize: 20,
    color: '#FC4C4E',
    paddingBottom: 20,
  },
  detailstyle2: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 20,
  },
});
export default ResultsShowScreen;
