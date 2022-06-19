import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image,Alert } from 'react-native';
import NavBar from './NavBar';
import stylesExt from './Styles';
import Register from './Register'; 
import axios from 'axios';
  
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useState(true);

    const loginHandle=()=>{
      const API_URL="http://192.168.0.13:8000/api/user/login/";
      console.log(API_URL)

      const user={
          email: username,
          password: password
      };
     
      console.log("email",user.email);
      console.log("password",user.password);
      
      axios.post(API_URL, user)
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
            <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('First')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Log In" onPress={() =>
          navigation.navigate('Login')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Welcome" onPress={() =>
          navigation.navigate('Welcome')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="About" onPress={() =>
          navigation.navigate('About')}/>
          </View>
            </View>
          </SafeAreaView>
    );
}

export default Login;