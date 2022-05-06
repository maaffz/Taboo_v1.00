import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import Flex from './components/Flex';
import Welcome from './components/welcome';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function App() {
  return (
    <SafeAreaView>
      {/* style={styles.container} */}
      <View >
        <Text></Text>
        <StatusBar style="auto" />
        <Welcome />
      </View >
    </SafeAreaView>
    
  );
}
