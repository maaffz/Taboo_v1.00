//import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from "react-native";
import stylesExt from "./Styles";
import { ScrollView } from 'react-native';
import * as React from 'react';
import UseList from "./UseList";
// import { NavigationContainer } from '@react-navigation/native';
// import Home from "./Home";
// import { Link } from "@react-navigation/native";

const About = ({ navigation }) => {
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
        <View style={stylesExt.flex2a} >
          <ScrollView>
            <Text style={stylesExt.baseText} alignItems= 'center'>
              <Text style={stylesExt.titleText}>WHO'S BEHIND TABOO?</Text>
              {"\n"}It all began in 2016 when co-founders Eloise and Isobel attended a school conference and left inspired to establish a business that enabled Australian customers to eradicate period poverty, through the simple action of shopping for their personal period products. {"\n"}{"\n"}
              
              {/* </Text> */}
              <Text style={stylesExt.titleText}>TABOO'S PURPOSE</Text>
              {/* <Text> */}
              {"\n"}To eradicate global period poverty and improve menstrual well-being. {"\n"}{"\n"}
              <Text style={stylesExt.titleText}>TABOO'S MISSION</Text>
              {"\n"}To sell period products in Australia, with all company profits, education initiatives and advocacy efforts dedicated to eradicating period poverty through systematic and social change. {"\n"}{"\n"}
              <Text style={stylesExt.titleText}>TABOO'S VISION</Text>
              {"\n"}For menstruation to be understood as a respected and supported human experience that does not suppress anyone’s access to equal opportunity and rights. {"\n"}{"\n"}
              <Text style={stylesExt.titleText}>WHAT TO EXPECT FROM THIS APP</Text>
              {"\n"}This App was created to help you :{"\n"}
              <UseList />
               {"\n"}{"\n"}
            </Text>
            <Image source={require('../assets/whos_behind_600x.jpg')} style={stylesExt.aboutImage} />
          </ScrollView>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#F9D9E6" }} >
        <View style={styles.container2}>
        <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Home" onPress={() =>
          navigation.navigate('Home')}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Log In" onPress={() =>
          navigation.navigate('Login')}/>
          </View>
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="Welcome" onPress={() =>
          navigation.navigate('Welcome')}/>
          </View> */}
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="About" onPress={() =>
          navigation.navigate('About')}/>
          </View> */}
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="MAIN PAGE" onPress={() =>
                navigation.navigate('Home')} />
          </View> */}
          {/* <View style={styles.buttonContainer}>
            <Button color= '#e83e8c' title="MORE INFO" onPress={() =>
                navigation.navigate(Linking.openURL('https://tabooau.co/pages/our-story'))} />
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

export default About;