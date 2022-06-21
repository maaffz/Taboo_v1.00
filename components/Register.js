import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image,Alert, StyleSheet,Linking } from 'react-native';
import stylesExt from './Styles';
import axios from 'axios';
import { Register_URL } from '../service/connect';
import { ScrollView } from 'react-native';
  
const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
  
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    useState(true);
    const connectUrl=()=>{
      const privacyURL = "https://tabooau.co/policies/privacy-policy";
      const openUrl= Linking.canOpenURL(privacyURL);
      
      if (openUrl){
         Linking.openURL(privacyURL)
      }
      else{
        console.log("Website cannot be reached, please try again later")
      }
    }
    const tOSUrl=()=>{
      const termsOfServiceURL = "https://tabooau.co/policies/terms-of-service";
      const openUrl= Linking.canOpenURL(termsOfServiceURL);
      
      if (openUrl){
         Linking.openURL(termsOfServiceURL)
      }
      else{
        console.log("Website cannot be reached, please try again later")
      }
    }

    const registerHandle=()=>{
      // const API_URL="http://192.168.0.13:8000/api/user/login/";
      
      console.log(Register_URL)
      // Alert.alert('username',email);

      const user={
          email: email,
          username: email,
          first_name: name,
          phone : phone,
          password: password
      };
      const user1=JSON.stringify(user);
      console.log(user1)
      // console.log(username)
       // console.log(REGISTER_URL);
		  axios.post(Register_URL, user)
		  .then(res => {
			  console.log(res.status);

			if (res.status === 200) {
				// console.log(res);
				Alert.alert(
                    'User created successfully',
                    'Now go login',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                    {cancelable: true},
                  );	navigation.navigate('Login');
			}
		  })
		  .catch(err => {
			console.log(err);
			Alert.alert(
                    'Error',
                    'Please make sure you fill everything',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                    {cancelable: true},
                  );
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
              <ScrollView>
              
                
                <TextInput
                  style={stylesExt.RegisterInput}
                  onChangeText={(val) => setName(val)}
                  value={name}
                  placeholder="Please enter your name"
                />
                <TextInput
                  style={stylesExt.RegisterInput}
                  onChangeText={(val) => setPhone(val)}
                  value={phone}
                  placeholder="Please enter your phone"
                  keyboardType='numeric'
                />
                <TextInput
                  style={stylesExt.RegisterInput}
                  onChangeText={(val)=>setEmail(val)}
                  value={email} placeholder="Please enter your email"
                  keyboardType='email-address'
                />
                <TextInput
                  style={stylesExt.RegisterInput}
                  onChangeText={(val) => setPassword(val)}
                  value={password}
                  placeholder="Please enter your password"
                  secureTextEntry
                />
                
                <Text style={stylesExt.baseText} alignItems= 'center'>
                  To register for an account, you agree to our terms of service and privacy policy.
                  {"\n"}{"\n"}
                  {"\n"}{"\n"}
                </Text>

                <Button color= '#e83e8c' width={350} borderRadius={15} title="Privacy Policy (opens on a navigator)" onPress={() =>connectUrl()}/> 

                <Button color= '#e83e8c' width={350} borderRadius={15} title="Terms of Service (opens on a navigator)" onPress={() =>tOSUrl()}/> 

                <Text>
                  {"\n"}{"\n"}
                  {"\n"}{"\n"}
                </Text>

                <Button color= '#e83e8c' width={350} borderRadius={15} title="I agree with the Terms of Service and Privacy Policy, Register my account." onPress={() =>registerHandle()}/> 

                <Text>
                  {"\n"}{"\n"}
                  {"\n"}{"\n"}
                  {"\n"}{"\n"}
                </Text>

            </ScrollView>
          </View>
          <View style={{ flex: 1, backgroundColor: '#F9D9E6' }} >
            <View style={styles.container2}>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('Home')}/>
              </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Login" onPress={() =>
          navigation.navigate('Login')}/>
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

export default Register;