import { StyleSheet,Text, View } from 'react-native';
import React from 'react';

export default function LatFlex() {
    return (
      <View style={{flex:1 , flexDirection:'row'}}>
        <View style={{flex: 1, backgroundColor :'black'}} />
        <View style={{flex: 2, backgroundColor : 'pink'}}/>
      </View>
    );
}
 const styles=StyleSheet.create({});