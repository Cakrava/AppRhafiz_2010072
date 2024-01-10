import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Alert,
  View,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {apiUrl} from '../config';

export default function FormEdit({route}) {
  const {kdmatkul2010072} = route.params;
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState('');

  const [namaMatkul, setNamaMatkul] = useState('');
  const [sKs, setsKs] = useState('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${kdmatkul2010072}`);
        const response = await fetch(`${apiUrl}matakuliah/${kdmatkul2010072}`);
        const json = await response.json();
        setNamaMatkul(json.namamat2010072);
        setsKs(json.sks2010072);
      } catch (error) {
        setError('Tidak dapat memuat data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [kdmatkul2010072]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  const submitForm = async () => {
    setIsSaving(true);
    setValidationErrors({});

    const formData = {
      namamat2010072: namaMatkul,
      sks2010072: sKs,
      _method: 'PUT',
    };

    try {
      const response = await fetch(`${apiUrl}matakuliah/${kdmatkul2010072}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();

        // Handle validation errors
        if (response.status === 422) {
          let errors = {};
          Object.keys(data.errors).forEach(key => {
            errors[key] = data.errors[key][0]; // Ambil hanya pesan pertama untuk setiap field
          });
          setValidationErrors(errors);
        } else {
          setValidationErrors({});
          throw new Error(
            data.message || 'Terjadi kesalahan saat meng-update data.',
          );
        }
      }

      setIsSaving(false);

      // Jika tidak ada error, maka tampilkan pesan sukses
      Alert.alert('Success', 'Data matakuliah ini berhasil di-Update', [
        {
          text: 'Ok',
          onPress: () =>
            navigation.navigate('DetailMatkul', {
              kdmatkul2010072: kdmatkul2010072,
            }),
        },
      ]);
    } catch (error) {
      // Handle failure
      setIsSaving(false);
      Alert.alert('Error', error.toString());
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <Input
        placeholder="Kode"
        value={kdmatkul2010072}
        disabled={true}
        placeholderTextColor="#888"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={<Icon name="user-circle" size={24} color="black" />}
      />

      <Input
        placeholder="Nama Matakuliah"
        value={namaMatkul}
        onChangeText={setNamaMatkul}
        placeholderTextColor="#888"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        leftIcon={<Icon name="book" size={24} color="black" />}
        errorMessage={validationErrors.namamat2010072}
      />
      <Input
        placeholder="SKS"
        value={sKs}
        onChangeText={setsKs}
        leftIcon={<Icon name="bookmark" size={24} color="black" />}
        placeholderTextColor="#888"
        inputContainerStyle={styles.inputContainer}
        inputStyle={styles.inputText}
        errorMessage={validationErrors.sks2010072}
        keyboardType="number-pad"
      />

      <Button
        title="Update Data"
        onPress={submitForm}
        buttonStyle={styles.submitButton}
        titleStyle={styles.submitTitle}
        loading={isSaving}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 30,
  },
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  inputContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    paddingLeft: 10,
  },
  inputText: {
    color: '#000',
  },
  pickerContainer: {
    marginBottom: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#427D9D',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  submitTitle: {
    color: '#fff', //warna text tombol
  },
  dateContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  dateDisplay: {
    fontSize: 16,
    marginTop: 10,
  },
});
