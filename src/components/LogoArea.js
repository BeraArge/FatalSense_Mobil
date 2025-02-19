import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Colours, FontSize } from "../constants/theme";

const LogoArea = ({ style = {}, title, imageSource = 'logoText', logoWidth = 120, logoHeight = 120 }) => {

  const logoImage = imageSource === 'logo' 
    ? require("../../assets/appAssets/logo.png") 
    : require("../../assets/appAssets/logoText.png");

  return (
    <View style={[styles.container, style]}>
      <Image
        source={logoImage}
        style={[styles.logo, { width: logoWidth, height: logoHeight }]}
        resizeMode="contain"
      />

      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
  },
  title: {
    fontSize: FontSize.s24,
    fontWeight: "bold",
    color: Colours.black, 
  },
});

export default LogoArea;
