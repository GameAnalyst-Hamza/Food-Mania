import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const Map = ({ navigation, route }) => {
  const { lat } = route.params;
  const { long } = route.params;
  console.log(lat);
  console.log(long);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0002,
        longitudeDelta: 0.0002,
      }}>
      <MapView.Marker
        coordinate={{ latitude: lat, longitude: long }}
        title={'title'}
        description={'description'}
      />
    </MapView>
  );
};
const styles = StyleSheet.create({
  map: {
    height: '100%',
    borderWidth: 4,
  },
});
export default Map;
