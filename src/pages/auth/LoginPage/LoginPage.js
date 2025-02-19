import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import styles from "./LoginPage.styles";
import LayoutBackground from "../../../components/LayoutBackground";
import LogoArea from "../../../components/LogoArea";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import KeyboardDismissView from "../../../components/KeyboardDismissView";

const LoginPage = () => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardDismissView style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={2}>
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.logoContainer}>
              <LogoArea imageSource="logotext" logoWidth={120} logoHeight={120}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerText}>Giriş Yap</Text>
              <Input
                placeholder="Email"
                secureTextEntry={false}
                value={mail}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Parola"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.passwordContainer}>
                <Text style={styles.passwordText}>Şifremi Unuttum</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Giriş Yap" />
            </View>
          </View>
        </SafeAreaView>
      </LayoutBackground>
    </KeyboardDismissView>
  );
};

export default LoginPage;
