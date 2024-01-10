import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export default function menghitungpersegipanjang() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    let n1 = parseFloat(number1);
    let n2 = parseFloat(number2);
    let res = 0;

    switch (operation) {
      case '+':
        res = (1 / 2) * (n1 * n2);
        break;
    }

    setResult(res);
  };

  return (
    <View style={{backgroundColor: 'pink', flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        {' '}
        Menghitung Segitiga{' '}
      </Text>

      <View style={{padding: 20}}>
        <TextInput
          placeholder="Input Alas"
          keyboardType="numeric"
          value={number1}
          onChangeText={text => setNumber1(text)}
        />
        <TextInput
          placeholder="Input Tinggi"
          keyboardType="numeric"
          value={number2}
          onChangeText={text => setNumber2(text)}
        />

        <Button title="Hitung " onPress={calculate} />
        <Text
          style={{
            marginHorizontal: 100,
            justifyContent: 'center',
            marginStart: 0,
            paddingVertical: 20,
            fontSize: 40,
            fontWeight: 'bold',
          }}>
          {' '}
          Hasil {result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
