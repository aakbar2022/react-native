import { StyleSheet, TouchableOpacity } from "react-native";

import CatApp from "@/components/Cat";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("test")}
        style={{ borderColor: "black", borderWidth: 1, padding: 10 }}
      >
        <Text>Content Screen</Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <CatApp />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
