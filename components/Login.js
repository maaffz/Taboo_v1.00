import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image,Alert, StyleSheet } from 'react-native';
import stylesExt from './Styles';
import axios from 'axios';
import { LogIn_URL } from '../service/connect';
  
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useState(true);

    const loginHandle=()=>{
      // const API_URL="http://192.168.0.13:8000/api/user/login/";
      // console.log(API_URL)
      console.log(LogIn_URL);

      const user={
          email: username,
          password: password
      };
     
      console.log("email",user.email);
      console.log("password",user.password);
      
      axios.post(LogIn_URL, user)
      .then( (response) => {
        if (response.status ===200){
          const token=response.data.token[0];
          Alert.alert("My Token",token)
          console.log('tk',response.data.token[0])
        }
      })
      .catch( (error) => {
        console.log(error);
      });
    }

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
                onChangeText={(val)=>setUsername(val)}
                value={username} placeholder="Please enter your email"
                keyboardType='email-address'
              />
              <TextInput
                style={stylesExt.RegisterInput}
                onChangeText={(val) => setPassword(val)}
                value={password}
                placeholder="Please enter your password"
                secureTextEntry
              />

        <Button color= '#e83e8c' width={350} borderRadius={15} title="LOG IN" onPress={() =>loginHandle()}/> 

              {/* <Button color= '#e83e8c' width={350} borderRadius={15} title="LOG IN" onPress={() =>
                navigation.navigate(Login)}/> */}
          </View>
          <View style={{ flex: 1, backgroundColor: '#F9D9E6' }} >
            <View style={styles.container2}>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('Home')}/>
              </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Register a new account" onPress={() =>
          navigation.navigate('Register')}/>
          </View>
                {/* <View style={styles.buttonContainer}>
                  <Button color= '#e83e8c' title="Welcome" onPress={() =>
          navigation.navigate('Welcome')}/>
                </View> */}
                <View style={styles.buttonContainer}>
                  <Button color= '#e83e8c' title="About" onPress={() =>
          navigation.navigate('About')}/>
                </View>
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

export default Login;