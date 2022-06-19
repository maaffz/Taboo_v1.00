//import React from "react";
import { Button, StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import stylesExt from "./Styles";
// import Login from "./Login";
// import Register from "./Register";
// import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

const First = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, backgroundColor: "#F479B0", alignItems: 'center' }}>
      <View style={stylesExt.flex2a} >
        <Image source={require('../assets/Taboo_logo01.jpg')} style={{ width: 120, height: 120, alignSelf: 'center' }} />

      </View>
        
      </View>
      <View style={{ flex: 4, backgroundColor: "#fff" }} >
        <View style={ stylesExt.flex3} >
          <Text style={stylesExt.titleText} >
            SOCIALLY CONSCIOUS PERIOD CARE
          </Text>
        </View>
        <View style={stylesExt.flex2a} >
          
          <Image source={require('../assets/100_organic_cotton.jpg')} style={stylesExt.welcomeImage} />
          <Image source={require('../assets/Australian.jpg')} style={stylesExt.welcomeImage} />
          <Image source={require('../assets/Profits.jpg')} style={stylesExt.welcomeImage} />
          <Image source={require('../assets/Sustainably.jpg')} style={stylesExt.welcomeImage} />
          
        </View>
        <View style={ stylesExt.flex3} >
          <Text style={stylesExt.baseText}>
            Organic, Sustainable & Reliable
          </Text>
          <Text style={stylesExt.titleText} >
            PERIOD PRODUCTS
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#F9D9E6" }} >
        {/* <LoginSignButton /> */}
        <View style={styles.container2}>
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('First')}/>
          </View> */}
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

export default First;