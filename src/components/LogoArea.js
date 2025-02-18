import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Colours, FontSize } from "../constants/theme"; // Renkleri burada ayarlayabilirsiniz

const LogoArea = ({ style = {}, title }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require("../../assets/appAssets/logo.png")}
        style={styles.logo}
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
    width: 100, // Logo genişliği
    height: 100, // Logo yüksekliği
    marginBottom: 5, // Başlık ve logoyu ayıran boşluk
  },
  title: {
    fontSize: FontSize.s24,
    fontWeight: "bold",
    color: Colours.black, // Rengi theme'den çekebilirsiniz
  },
});

export default LogoArea;
