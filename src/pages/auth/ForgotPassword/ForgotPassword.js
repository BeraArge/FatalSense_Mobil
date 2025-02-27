import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
} from "react-native";
import styles from "./ForgotPassword.styles";
import LayoutBackground from "../../../components/LayoutBackground";
import LogoArea from "../../../components/LogoArea";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import KeyboardDismissView from "../../../components/KeyboardDismissView";
import CustomAlert from "../../../components/CustomAlert";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../redux/slices/forgotPasswordSlice";

const ForgotPassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.forgot);

  const [mail, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (data?.isSuccess === false) {
      setAlertMessage(data?.message);
      setShowAlert(true);
    }
    if (data?.isSuccess === true) {
      setAlertMessage(data?.message);
      setShowAlert(true);
    }
  }, [data]);

  const handleSubmit = () => {
    if (!mail) {
      setAlertMessage("Lütfen email adresinizi giriniz!");
      setShowAlert(true);
    }
    if (mail) {
      dispatch(forgotPassword({ username: mail }));
    }
  };

  // alert kapatmak
  const handleCloseAlert = () => {
    setShowAlert(false);
    if (data?.isSuccess === true) {
      navigation.navigate("LoginPage");
    }
  };

  return (
    <KeyboardDismissView style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={2} backButton={true}>
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.logoContainer}>
              <LogoArea
                imageSource="logotext"
                logoWidth={120}
                logoHeight={120}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.headerText}>{"Şifremi Unuttum"}</Text>
              <Input
                placeholder="Email"
                secureTextEntry={false}
                value={mail}
                keyboardType={"email-address"}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Gönder" onPress={handleSubmit} />
            </View>
          </View>

          <CustomAlert
            visible={showAlert}
            onClose={handleCloseAlert}
            message={alertMessage}
            buttonText={"Tamam"}
          />
        </SafeAreaView>
      </LayoutBackground>
    </KeyboardDismissView>
  );
};

export default ForgotPassword;
