import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import stylesExt from './Styles';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  
});

const useData=[
  {key: 'Track periods'},
  {key: 'Birth control'},
  {key: 'Manage your purchases'},
  {key: 'Display information about our products'},
  {key: 'Help you choose the best option'},
  {key: 'Access our blog'},
  {key: 'Shortcut to our podcast'},
  {key: 'Shortcut to our Spotify'},
];

const AppUseList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={useData}
        renderItem={({item}) => <Text style={stylesExt.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default AppUseList;