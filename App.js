import { StatusBar } from 'expo-status-bar';
import MyStack from './components/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
//import React from 'react';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, SafeAreaView } from 'react-native-web';
import First from './components/First';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';

// var width = Dimensions.get('window').width; //full width
// var height = Dimensions.get('window').height; //full height
const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="Home" component={Welcome} 
        options={{ title: 'Welcome' }}
        /> */}
        <Stack.Screen name="Home" component={First} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="About" component={About} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <About />
    // </View>
  );
};
export default App;

