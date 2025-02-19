import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Colours, FontSize } from "../constants/theme";

const Button = ({ title, onPress, style = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.themeGreen,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: windowWidth / 1.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: Colours.white,
    fontSize: FontSize.s16,
    fontWeight: "bold",
  },
});

export default Button;
