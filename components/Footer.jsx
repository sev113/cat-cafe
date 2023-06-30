import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.textStyle}>Good day starts with coffee and cat.</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    position: "absolute",
    bottom: 20,
  },
  textStyle: {
    color: "#FAF0E4",
    textTransform: "uppercase",
  },
});
