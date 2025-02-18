import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./LoginPage.styles";
import LayoutBackground from "../../../components/LayoutBackground";
import LogoArea from "../../../components/LogoArea";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

const LoginPage = () => {
  return (
    <LayoutBackground backgroundOption={2}>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.logoContainer}>
            <LogoArea/>
          </View>
          <View style={styles.inputContainer}>
            {/* <Text>Giriş Yap</Text> */}
            <Input placeholder="Email" />
            <Input placeholder="Password" secureTextEntry />
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Login" />
          </View>
        </View>
      </SafeAreaView>
    </LayoutBackground>
  );
};

export default LoginPage;
