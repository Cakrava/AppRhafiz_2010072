import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import {apiUrl, apiImage} from '../config';
import defaultAvatar from '../img/avatar15.png';
import ActionButton from './ActionButton';
import {useNavigation} from '@react-navigation/native';

const DetailMatakuliah = ({route}) => {
  const {kdmatkul2020009} = route.params;
  const [matakuliah_2020009, setMatakuliah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const goToPageFormUpload = () => {
    navigation.navigate('FormUpload', {
      kdmatkul2020009: kdmatkul2020009,
      foto: matakuliah_2020009.foto_thumb,
    });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${apiUrl}matakuliah/${kdmatkul2020009}`,
          );
          const json = await response.json();
          setMatakuliah(json);
        } catch (error) {
          setError('Tidak dapat memuat data');
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    });
    return unsubscribe;
  }, [navigation, kdmatkul2020009]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        {matakuliah_2020009 && (
          <Card>
            <Avatar
              size="xlarge"
              rounded
              source={
                matakuliah_2020009.foto
                  ? {uri: `${apiImage}${matakuliah_2020009.foto_thumb}`}
                  : defaultAvatar
              }
              containerStyle={styles.avatarContainer}
              onPress={goToPageFormUpload}
            />
            <Card.Title style={styles.title}>
              {matakuliah_2020009.kdmatkul2020009}
            </Card.Title>
            <Card.Divider />
            <Text style={styles.detail}>Nama Matakuliah:</Text>
            <Text style={styles.detailData}>
              {matakuliah_2020009.namamat2020009}
            </Text>
            <Text style={styles.detail}>SKS:</Text>
            <Text style={styles.detailData}>
              {matakuliah_2020009.sks2020009}
            </Text>
          </Card>
        )}
        <ActionButton kdmatkul2020009={matakuliah_2020009.kdmatkul2020009} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  avatarContainer: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
    color: '#ccd',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailData: {
    fontSize: 18,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default DetailMatakuliah;
