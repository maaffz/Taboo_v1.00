import React from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
let height25 = height/4;
let height50 = height/2;

const stylesExt = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5, 
        justifyContent: "center", 
    //   backgroundColor: '#e83e8c',
    //    alignItems: 'center',
    //   height: '100%',
    },
    flex1: {
        flex: 1, 
        backgroundColor: '#e83e8c' , 
        // width: '100%',
        // height: '100%', 
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }, 
    flex2: {
        flex: 2, 
        color: '#e83e8c',
        fontWeight: 'bold',
        fontSize: 15,
        backgroundColor: 'white', 
        // width:'100%',
        //height: "50%", 
        alignItems: 'center',
        flexDirection: 'column',
    }, 
    flex2a: {
        flex: 5, 
        fontWeight: 'bold',
        fontSize: 15, 
        // width:'100%',
        //height: "50%", 
        // alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    }, 
    flex3: {
        flex: 1, 
        // backgroundColor: '#343a40', 
        // width:'100%', 
        //height: "25%", 
        alignItems: 'center',
        flexDirection: 'column',
    },
    login: {
        height: 40,
        // fontFamily: 'Copperplate',
        width: 170,
        //fontSize: 50,
        border: '1px gray',
        backgroundColor: 'white',
        margin: 5,
    },
    welcomeImage: {
        width: 80, 
        height: 90, 
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    aboutImage: {
        width: 200, 
        height: 200, 
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    RegisterInput: {
        // fontFamily: 'Copperplate',
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        borderRadius:  15,
        borderColor: '#e83e8c',
        padding: 10,
        color: '#e83e8c',
        textAlign: 'center',
      },
      loginButtons: {
        height: 60,
        // fontFamily: 'Copperplate',
        margin: 12,
        color: 'red',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        borderRadius:  15,
      },
      baseText: {
        // fontFamily: 'Copperplate',
        textAlign: 'center',
      },
      titleText: {
          fontSize: 20,
        //   fontFamily: 'Copperplate',
          fontWeight: 'bold',
          textAlign: 'center',
      },
      item: {
        // fontFamily: 'Copperplate',
        textAlign: 'center',
        padding: 10,
        //fontSize: 18,
        height: 44,
      },
});
export default stylesExt;