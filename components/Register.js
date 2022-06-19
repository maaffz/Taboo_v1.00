//import react from 'react';
import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image, StyleSheet } from 'react-native';
import stylesExt from './Styles';
//import * as React from 'react';
import RegButton from './RegisterButton';
import Home from './Home';

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
          <View style={styles.container2}>
            <View style={styles.buttonContainer}>
              <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('Home')}/>
            </View>
            <View style={styles.buttonContainer}>
              <Button color= '#e83e8c' title="Log In / Register" onPress={() => navigation.navigate('Login')}/>
            </View>
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Welcome" onPress={() =>
          navigation.navigate('Welcome')}/>
          </View> */}
            <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="About" onPress={() =>
          navigation.navigate('About')}/>
            </View>
              {/* <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="LOG IN" onPress={() =>
                navigation.navigate('Login')}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="About" onPress={() =>
                navigation.navigate('About')}/>
              </View> */}
            </View>
        </View>
      </SafeAreaView>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 5,
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
  });
  
  export default Register;