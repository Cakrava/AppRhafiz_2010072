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
        res = n1 * n2;
        break;
      case '-':
        res = 2 * (n1 + n2);
        break;
    }

    setResult(res);
  };

  return (
    <View style={{backgroundColor: 'skyblue',flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 20}}>
        {' '}
        Menghitung Persegi Panjang{' '}
      </Text>

      <View style={{padding: 20}}>
        <TextInput
          placeholder="Input Angka Panjang"
          keyboardType="numeric"
          value={number1}
          onChangeText={text => setNumber1(text)}
        />
        <TextInput
          placeholder="Input Angka Lebar"
          keyboardType="numeric"
          value={number2}
          onChangeText={text => setNumber2(text)}
        />
        <Picker
          selectedValue={operation}
          onValueChange={itemValue => setOperation(itemValue)}>
          <Picker.Item label="Luas" value="+" />
          <Picker.Item label="Keliling" value="-" />
        </Picker>

        <Button title="Hitung" onPress={calculate} />
        <Text
          style={{
            marginHorizontal: 50,
            justifyContent: 'center',
            marginStart: 0,
            paddingVertical: 20,
            fontSize: 20,
          }}>
          {' '}
          Hasil {result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
