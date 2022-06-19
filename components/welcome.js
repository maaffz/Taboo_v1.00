// import React from 'react';
// import { Button, Text, View, Image, TextInput, StyleSheet } from 'react-native';
// import styles from './Styles';

 
// export default function W() {
//     return (
//         <View style={[styles.container]}>
//             <View style={[styles.flex1]}>
//                 <Image source={require('../assets/Taboo_logo01.jpg')} style={{ width: 120, height: 120, alignSelf: 'center', top: 0, }} />
//             </View>
//             <View style={[styles.flex2]}>
//                 <View style={[styles.flex2a]} >
//                     <Image source={require('../assets/100_organic_cotton.jpg')} style={styles.welcomeImage} />
//                     <Image source={require('../assets/Australian.jpg')} style={styles.welcomeImage} />
//                     <Image source={require('../assets/Profits.jpg')} style={styles.welcomeImage} />
//                     <Image source={require('../assets/Sustainably.jpg')} style={styles.welcomeImage} />
//                 </View>
//             </View>
//             <View style={[styles.flex3]} >
//                 <Text>
//                     {/* <TextInput
//                         style={ [styles.login] }
//                         placeholder="Please type your username"
//                     ></TextInput>
//                     <TextInput
//                         style={ [styles.login] }
//                         placeholder="Please type your password"
//                     ></TextInput> */}
                    
//                     <Button style={styles.loginButtons}
//                         onPress={
//                             "Logging In"
//                         } 
//                         title="Log In" />
//                     <Button style={styles.loginButtons}
//                         onPress={
//                             "Register new user"
//                         } 
//                         title="Register" />
//                 </Text>
//             </View>
//         </View>
        
//     );
// }

// // const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       padding: 20 
// //     },
// //   });


//                 {/* <View>
//                 { <View style={ styles.flex1 } >
//                     { <Flex/> }
//                     <Image source={require('../assets/Taboo_logo01.jpg')} style={{ width: 150, height: 150, alignSelf: 'center', top: 25, }} />
//                 </View>
//                 <View style={ styles.flex2 } >
//                     { <Flex/> }
//                     <Text>
//                     <Image source={require('../assets/100_organic_cotton.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
//                     <Image source={require('../assets/Australian.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
//                     <Image source={require('../assets/Profits.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
//                     <Image source={require('../assets/Sustainably.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
//                     </Text>
//                 </View>
//                 <View style={ styles.flex3 }>
//                     <Text>
//                     <TextInput
//                         style={ styles.login }
//                         placeholder="Please type your username"
//                     /></Text>
//                     { <LogOrSign/> }
//                     <Text>
//                     <TextInput
//                         style={ styles.login }
//                         placeholder="Please type your password"
//                     /></Text>
//                     <Button style={stylesExt.loginButtons}
//           onPress={
//               "Logging In"

//           } 
//           title="Log In">
//         </Button>
//         <Button style={stylesExt.loginButtons}
//             onPress={
//                 "Register new user"

//             } 
//             title="Register">
//         </Button>
//                 </View> }
//             </View> */}

import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, Image,Alert } from 'react-native';
import NavBar from './NavBar';
import stylesExt from './Styles';
import Register from './Register'; 
import axios from 'axios';
  
const Welcome = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useState(true);

    const loginHandle=()=>{
      const API_URL="http://172.17.120.219:8000/api/user/login/";
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
              <NavBar />
            </View>
          </SafeAreaView>
    );
}

export default Welcome;