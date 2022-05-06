import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
let height25 = height/4;
let height50 = height/2;

const styles = StyleSheet.create({
    container: {
      flex0: 1,
      backgroundColor: '#e83e8c',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flex1: {
        flex: 1, 
        backgroundColor: "white" , 
        width: '100%',
        height: height25, 
        alignItems:'center',
        
    }, 
    flex2: {
        flex: 1, 
        backgroundColor: "#e83e8c", 
        width:'100%',
        height: height50, 
        alignItems:'center'
    }, 
    flex3: {
        flex: 1, 
        backgroundColor: "#007aff", 
        width:'100%', 
        height: height25, 
        alignItems:'center'
    },
});
export default styles;