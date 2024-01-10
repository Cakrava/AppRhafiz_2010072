import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';
import dataMhs from './DataMhs.json';

export default function LatFlatlist1() {
  const [refreshing, setrefreshing] = useState(false);
  const [data, setData] = useState(dataMhs);

  const onRefresh = React.useCallback(() => {
    setrefreshing(true);
    setTimeout(() => {
      const newData = [
        ...data,
        {nim: '2010072', nama: 'Bagus Maulana'},
        {nim: '2010033', nama: 'Cymadani'},
        {nim: '2110035', nama: 'Congek'},
      ];
      setData(newData);
      setrefreshing(false);
    }, 2000);
  }, [data]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.nim}</Text>
            <Text style={styles.titlenama}>{item.nama}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#190842',
    padding: 10,
    paddingLeft: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFDD',
  },
  titlenama: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2D9FF',
  },
});
