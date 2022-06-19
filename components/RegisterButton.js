import { Component, useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native-web';
import First from './First';
import Register from './Register';
import * as React from 'react';
// export default class RegButton extends Component {

//    render() {
  const RegButton =({ navigation }) => {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="REGISTER" onPress={() =>
                navigation.navigate(Linking.openURL('https://tabooau.co/account/login'))} />
              </View>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="CANCEL" onPress={() =>
                navigation.navigate('First')} />
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

export default RegButton;
