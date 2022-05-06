import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#e83e8c" }} >
          <Text></Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "white" }}>
          <Text></Text>
      </View>
      <View style={{ flex: 3, backgroundColor: "#e83e8c" }}>
          <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, justifyContent: "center", 
  },
});

export default Flex;