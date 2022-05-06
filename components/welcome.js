import React from 'react';
import { Button, Text, View, Image, TextInput, StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';
import Flex from './Flex';
import styles from './Styles';
import { Dimensions } from "react-native";
import LogOrSign from './Login';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function Welcome() {
    return (
        <View>
            <View style={ styles.flex1 } >
                {/* <Flex/> */}
                <Image source={require('../assets/Taboo_logo01.jpg')} style={{ width: 150, height: 150, alignSelf: 'center', top: 25, }} />
            </View>
            <View style={ styles.flex2 } >
                {/* <Flex/> */}
                <Text>
                <Image source={require('../assets/100_organic_cotton.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
                <Image source={require('../assets/Australian.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
                <Image source={require('../assets/Profits.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
                <Image source={require('../assets/Sustainably.jpg')} style={{ width: 90, height: 100, alignSelf: 'center', }} />
                </Text>
            </View>
            <View style={ styles.flex3 }>
                <Text>LOGIN</Text>
                <LogOrSign/>
                <Text>PASSWORD</Text>
            </View>
            
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding: 20 
//     },
//   });