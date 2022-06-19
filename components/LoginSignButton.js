import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Login from './Login';
import Register from './Register';

// export default class LoginSignButton extends Component {

//    render() {
const LoginSignButton = ({ navigation }) => {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="LOG IN" onPress={() =>
                navigation.navigate('Login')}/>
              </View>
              <View style={styles.buttonContainer}>
                <Button color= '#e83e8c' title="REGISTER" onPress={() =>
                navigation.navigate('Register')}/>
              </View>
            </View>
        );
};
// const ProfileScreen = ({ navigation, route}) => {
//   return <Text></Text>
// };



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

export default LoginSignButton;
