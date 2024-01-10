import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('./img/bmln3.jpg')} // Gantilah URL dengan URL gambar profil Anda
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Bagus Maulana</Text>
        <Text style={styles.profileBio}>2010072</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6d6a6e',
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Setengah dari lebar/tinggi gambar
  },
  profileName: {
    fontSize: 20,
    color: '#ffff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 16,
    color: '#ffff',
    marginTop: 5,
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '80%',
  },
  statsItem: {
    alignItems: 'center',
  },
  statsCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 16,
    color: 'gray',
  },
});
export default function App() {
  return <HomeScreen />;
}
