import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import Cat from "./Cat";

const { width, height } = Dimensions.get("window");

const Cafe = () => {
  return (
    <View style={styles.cafeWrapper}>
      <Text style={styles.heading}> 😺 Cat Cafe 😼</Text>
      <Text style={styles.subHeading}>Feed Us, Human.</Text>
      {/* <TextInput
        style={styles.input_style}
        placeholder="What is your name, cat?"
        onChangeText={setName}
      /> */}
      <Cat name="Pochi" />
      <Cat name="Millie" />
      <Cat name="Milo" />
    </View>
  );
};

export default Cafe;

const styles = StyleSheet.create({
  input_style: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 10,
    paddingEnd: 10,
    width: 180,
    height: 30,
    borderWidth: 1,
    borderColor: "#999",
  },
  heading: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 30,
    marginTop: 30,
  },
  subHeading: {
    textAlign: "center",
    fontSize: 15,
    marginBottom: 30,
  },
  cafeWrapper: {
    width: width * 0.7,
    backgroundColor: "#FAF0E4",
    position: "absolute",
    top: 130,
    padding: 8,
    borderRadius: 10,
  },
});
