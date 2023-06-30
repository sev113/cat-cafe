import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = (props) => {
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => props.setIsHungry(false)}
      disabled={!props.isHungry}
    >
      <Text>
        {props.isHungry
          ? "Click to pour me some milk, please!"
          : "Thank you, Sev   😸"}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "lightblue",
    paddingTop: 5,
    paddingBottom: 5,
    paddingStart: 10,
    paddingEnd: 10,
    marginTop: 3,
    borderRadius: 5,
  },
});
