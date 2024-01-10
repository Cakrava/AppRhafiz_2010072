import { StyleSheet,Text,View, TouchableOpacity,Alert } from 'react-native';
import React from 'react';

export default function LatTouch() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=>{
            Alert.alert('TouchableOpacity Pressed !');
        }}
        activeOpacity={0.7}>
            <View style={{backgroundColor : 'pink', padding: 10, borderRadius:5}}>
                <Text style={{color: 'black'}}>Tap Me</Text>
            </View>
        </TouchableOpacity>
        
      </View>
    );
}
 const styles=StyleSheet.create({});