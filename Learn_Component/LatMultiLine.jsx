import { StyleSheet,View,TextInput, Text } from 'react-native';
import React , {useState} from 'react';

export default function LatMultiLine() {
    const [catatan, setCatatan]= useState('');
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
        <Text>catatan:</Text>
        <TextInput
        value={catatan}
        onChangeText={setCatatan}
        placeholder='Tulis Apa Yang Kamu Rasakan Saat Ini....'
        multiline={true}
        numberOfLines={4}
        style={{
            borderWidth : 1,
            borderColor : 'grey',
            padding: 8,
            textAlignVertical: 'top',
            marginBottom: 16,
        }}
        />
        </View>
    );
}
 const styles=StyleSheet.create({});