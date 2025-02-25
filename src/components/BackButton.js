import React from "react";
import { TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Colours } from "../constants/theme";

const BackButton = React.memo(({ style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.goBack()}
    >
      <MaterialIcons name="chevron-left" size={50} color={Colours.themeBlue} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: 5,
    top: Platform.OS === "ios" ? 40 : 20,
    zIndex: 1000,
    paddingVertical: 10,
  },
});

export default BackButton;
