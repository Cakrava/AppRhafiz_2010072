import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity 
   } from 'react-native';
import React , {useState} from 'react';


export default function LatMaskPassword() {
    const [password, setPassword]= useState('');
    const [isPasswordVisible, setPasswordVisibilty]= useState(false);
    return (
      <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
        <Text>Password:</Text>
        <View
        style={{
            flexDirection :'row',
            borderWidth : 1,
            borderColor :'gray',
            marginBottom : 16,
          }}>
        <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Enter your Password'
        secureTextEntry={!isPasswordVisible}
        style={{flex: 1,padding: 8}}
        />
        <TouchableOpacity   
        onPress={()=>
            setPasswordVisibilty(prevVisibility=> !prevVisibility)
        }
        style={{padding:8}}>
            <Text>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
}
 const styles=StyleSheet.create({});