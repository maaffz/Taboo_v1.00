// import /*React,*/ { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native-web';
// import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import First from './First';

// export default class AboutNavgButton extends Component {

//    render() {
  const AboutNavgButton = ({ navigation }) => {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="MAIN" onPress={() =>
                navigation.navigate('First')}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="MORE INFO" onPress={() =>
                navigation.navigate(Linking.openURL('https://tabooau.co/pages/our-story'))}/>
              </View>
            </View>
        );
    };
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
});
export default AboutNavgButton;