//import react from 'react';
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image } from 'react-native';
import stylesExt from './Styles';
//import * as React from 'react';
import RegButton from './RegisterButton';
import First from './First';

const Register = ({navigation}) => {
    const [name, onChangeName] = React.useState("Full Name");
    const [email, onChangeEmail] = React.useState("E-mail");
    const [password, onChangePassword] = React.useState("Password");
    const [phoneNumber, onChangeNumber] = React.useState("Phone Number");
    const [passworwChk, onCheckPassword] = React.useState("Please type your password again");
    useState(true);
  
    return (
      <SafeAreaView style={[stylesExt.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "column"
      }]}>
        <View style={{ flex: 2, backgroundColor: '#F479B0', alignItems: 'center' }}>
          <View style={stylesExt.flex2a} >
            <Image source={require('../assets/Taboo_logo01.jpg')} style={{ width: 120, height: 120, alignSelf: 'center' }} />
          </View>
        </View>
        <View style={{ flex: 4, backgroundColor: 'white', alignItems: 'center' }}>
          <TextInput
            style={stylesExt.RegisterInput}
            onChangeName={onChangeName}
            value={name}
          />
          <TextInput
            style={stylesExt.RegisterInput}
            onChangeEmail={onChangeEmail}
            value={email}
          />
          <TextInput
            style={stylesExt.RegisterInput}
            onChangeText={onChangeNumber}
            value={phoneNumber}
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <TextInput
            style={stylesExt.RegisterInput}
            onChangePassword={onChangePassword}
            value={password}
          />
          <TextInput
            style={stylesExt.RegisterInput}
            onCheckPassword={onCheckPassword}
            value={passworwChk}
          />
          <Text>Please read our privacy policy and terms of use first.</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: '#F9D9E6' }} >
          <RegButton />
        </View>
      </SafeAreaView>
    );
  };
  export default Register;