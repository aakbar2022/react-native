import React from "react";
import { Image, Text, View } from "react-native";

const CatApp = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};

export default CatApp;
