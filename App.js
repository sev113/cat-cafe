import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import Cafe from "./components/Cafe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/564x/c9/47/b9/c947b9b278bde3cd154b62673ac4bb26.jpg",
      }}
      resizeMode="cover"
      style={styles.bgStyle}
    >
      <View style={styles.container}>
        <Cafe />
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  bgStyle: {
    flex: 1,
    justifyContent: "center",
  },
});
