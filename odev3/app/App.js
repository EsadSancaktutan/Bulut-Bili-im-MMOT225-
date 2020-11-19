import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';

function Item({
  title,
  onChange
}) {
  return (
    <View style={{padding: 10}}>
      <Text>{title}</Text>
      <TextInput 
        onChangeText={onChange}
        style={{
          borderColor: 'black',
          borderWidth: 2,
          fontSize: 16
        }}
      />
    </View>
  )
}

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    pass: "",
    passAgain: ""
  });
  const [success, setSuccess] = useState(false);

  const save = () => {
    if (Object.values(form).includes("")) {
      Alert.alert('Tüm alanları doldurun.');
    } else {
      setSuccess(true);
    }
  }

  return (
    <>
      {!success ? <View>
        <Text style={{
          textAlign: 'center',
          fontSize: 25
        }}>Kayıt Uygulaması</Text>
        <Item 
          title="Ad"
          onChange={value => setForm({...form, firstname: value})}
        />
        <Item 
          title="Soyad"
          onChange={value => setForm({...form, lastname: value})}
        />
        <Item 
          title="Yaş"
          onChange={value => setForm({...form, age: value})}
        />
        <Item 
          title="E-posta adresi"
          onChange={value => setForm({...form, email: value})}
        />
        <Item 
          title="Şifre"
          onChange={value => setForm({...form, pass: value})}
        />
        <Item 
          title="Şifre tekrar"
          onChange={value => setForm({...form, passAgain: value})}
        />
        <Button 
          title="Kayıt Ol"
          onPress={save}
        />
      </View>
      : 
        <Text style={{
          textAlign: 'center',
          fontSize: 16
        }}>Kayıt başarılı. {form.firstname} {form.lastname}</Text>
      }
    </>
  )
}

export default App;