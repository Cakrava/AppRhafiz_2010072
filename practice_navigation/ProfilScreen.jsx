import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
export default function ProfilScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('./img/avatar16.png')} // Gantilah URL dengan URL gambar profil Anda
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>My Name Is Rhafiz</Text>
        <Text style={styles.profileBio}>Hello Guys</Text>
      </View>
      <View style={styles.profileStats}>
        <View style={styles.statsItem}>
          <Text style={styles.statsCount}>150</Text>
          <Text style={styles.statsLabel}>Postingan</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsCount}>1M</Text>
          <Text style={styles.statsLabel}>Pengikut</Text>
        </View>
        <View style={styles.statsItem}>
          <Text style={styles.statsCount}>300</Text>
          <Text style={styles.statsLabel}>Mengikuti</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 16,
    color: 'gray',
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
