// import * as React from 'react';
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';


// import { Linking } from 'react-native-web';

// export default class LoginSignButton extends Component {

//    render() {
const NavBar = ({ navigation }) => {
        return (
             <View style={styles.container}>
              <View style={styles.container2}>
                <View style={styles.buttonContainer}>
                  <Button color= '#e83e8c' title="Home" onPress={() =>
                navigation.navigate('Home')}/>
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
             </View>
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

export default NavBar;
