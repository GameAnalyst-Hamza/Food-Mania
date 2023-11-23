import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        <Icon name="star" style={styles.iconStyle} />
        {result.rating}/5, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  conatiner: {
    marginLeft: 15,
  },
  iconStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#FC4C4E',
  },
});

export default ResultsDetail;
