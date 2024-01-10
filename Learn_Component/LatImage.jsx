import { StyleSheet,View, Image } from 'react-native';
import React from 'react';

export default function LatImage() {
    return (
      <View style={styles.container}>
        <Image
        source={{uri : 'https://images.unsplash.com/photo-1690323402873-c75ab1a38354?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://pin.it/eljMTGDhttps://unsplash.com/photos/a-long-pier-with-a-city-in-the-background-UQE_GN9GqyQ'}}
        style={styles.Image}
        />
        <Image
        source={require('./images/sila.jpg')}
        style={styles.Image}
        resizeMode='center'
        />
      </View>
    );
}
 const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    Image:{
        width:200,
        height:200,
        borderRadius: 200/2,
        margin: 10,
    },
 });