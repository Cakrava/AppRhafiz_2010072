// AlbumFotoScreen.js
import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';

const data = [
  {id: '1', source: require('./img/bmln2.jpg')},
  {id: '2', source: require('./img/bmln1.jpg')},
  {id: '3', source: require('./img/bmln3.jpg')},

  // Add more data as needed
];

const AlbumFotoScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        numColumns={3} // Sesuaikan jumlah kolom sesuai kebutuhan
        renderItem={({item}) => (
          <Image
            source={item.source ? item.source : {uri: item.uri}}
            style={styles.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6d6a6e',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
  },
});

export default AlbumFotoScreen;
