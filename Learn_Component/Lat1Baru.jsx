import { StyleSheet,Text,View,Button,TextInput, Alert ,TouchableOpacity,Image} from 'react-native';
import React , {useState} from 'react';

export default function LatTextInput_1() {
    const [nama, setNama]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [isPasswordVisible, setPasswordVisibilty]= useState(false);
    return (
        <View style ={{ backgroundColor: 'skyblue',flex:1}}>
<View style={styles.container}>
        <Image
        source={require('./images/bmln.jpg')}
        style={styles.Image}
        resizeMode='cover'
        />
        <Text style={{color: 'black',fontWeight:'bold',fontSize:20}}>Bagus Maulana</Text>
        </View>
 
 <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
 <Text>Nama Anda :</Text>
        <TextInput
        value={nama}
        onChangeText={setNama}
        placeholder='Input Nama Anda'
        style={{
            flexDirection: 'row',
            borderWidth : 1,
            borderColor : 'grey',
            padding: 8,
            marginBottom: 16,
        }}
        />
                <Text>Email :</Text>
        <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Input Email Anda'
        keyboardType='email-address'
        style={{
            flexDirection: 'row',
            borderWidth : 1,
            borderColor : 'grey',
            marginBottom: 16,
        }}
        />
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
        style={{flex: 1,padding: 5}}
        />
         <TouchableOpacity   
        onPress={()=>
            setPasswordVisibilty(prevVisibility=> !prevVisibility)
        }
        style={{padding:8}}>
            <Text>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>

        <Button
        title='kirimlahlai'
        onPress={()=>{
            Alert.alert('Terima Kasih',`Tuan : ${nama} \n Email: ${email} \n Terima Kasih Telah Mengisi Form`);
        }}
        />
      
 </View>
 </View>
        
        );
        }
        const styles=StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            Image:{
                width:200,
                height:200,
                borderRadius: 200/2,
                margin: 10,
            },
         });