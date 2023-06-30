import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Button from "./Button";

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.catStyle}>
      <Text>
        I am <Text style={{ color: "blue" }}>{props.name}</Text> and I am
        <Text style={{ color: "blue" }}> {isHungry ? "hungry" : "full"}</Text>
      </Text>
      <Button isHungry={isHungry} setIsHungry={setIsHungry} />
    </View>
  );
};

export default Cat;

const styles = StyleSheet.create({
  catStyle: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 10,
    paddingEnd: 10,
  },
});
