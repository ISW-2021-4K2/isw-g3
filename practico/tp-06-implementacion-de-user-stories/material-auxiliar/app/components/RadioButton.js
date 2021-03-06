import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function RadioButton({ active }) {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {active && <View style={styles.active}></View>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 25,
    width: 25,
    backgroundColor: colors.c4,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  inner: {
    height: 20,
    width: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    height: 10,
    width: 10,
    backgroundColor: colors.c4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RadioButton;
