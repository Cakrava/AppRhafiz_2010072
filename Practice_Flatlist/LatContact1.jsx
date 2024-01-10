import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import dataContact from './DataContact.json';

export default function LatContact1() {
  const images = {
    avatar1: require('./img/avatar14.png'),
    avatar2: require('./img/avatar13.png'),
    avatar3: require('./img/avatar12.png'),
    avatar4: require('./img/avatar11.png'),
    avatar5: require('./img/avatar15.png'),
    avatar6: require('./img/avatar16.png'),
    avatar7: require('./img/avatar15.png'),
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.header, color: 'black' }}>List Data Contact</Text>
      <FlatList
        data={dataContact}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              source={images[item.img.split('.')[0]]}
              style={styles.circle}
            />
            <View style={styles.TextContainer}>
              <Text style={styles.number}>{item.nohp}</Text>
              <Text style={styles.nama}>{item.nama}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 10,
  },
  header: {
    fontSize: 24,
    textAlign:'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'transparent',
    marginRight: 10,
  },
  TextContainer: {
    flex: 1,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'pink',
  },
  nama: {
    fontSize: 14,
    color: 'pink',
  },
});
