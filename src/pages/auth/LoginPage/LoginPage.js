import React, { useState, useCallback, useEffect } from "react";
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
import CustomAlert from "../../../components/CustomAlert";
import {useDispatch, useSelector} from 'react-redux';
import { login } from "../../../redux/slices/loginSlice";

const LoginPage = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, error} = useSelector((state) => state.auth);

  const [mail, setEmail] = useState("ozlemhayalkurun@gmail.com");
  const [password, setPassword] = useState("123");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //console.log("LOGIN PAGE USER: ", user?.data?.updatedProfile); 

  useEffect(() => {
    if (error) {
      setAlertMessage(error);
      setShowAlert(true);
    }
    if(user?.isSuccess === false){
      setAlertMessage(user.message);
      setShowAlert(true);
    }
    if(user?.isSuccess === true && user?.data?.updatedProfile){
      navigation.navigate("HomePage",{ userName: user?.data?.name, userSurname: user?.data?.surname });
    }
    if(user?.isSuccess === true && !user?.data?.updatedProfile){
      navigation.navigate("PersonalInfoForm", { userId: user?.data?.id });
    }
  }, [error, user]);

  const handleSubmit = useCallback(() => {
    if(!mail || !password){
      setAlertMessage('Lütfen gerekli yerleri doldurunuz!');
      setShowAlert(true);
    }
    else{
      //console.log("loginnnnnnn giriş yappppp");
      dispatch(
        login({
          userName: mail,
          password: password,
        }),
      );
    }
  }, [dispatch, mail, password]);

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
                keyboardType={"email-address"}
                onChangeText={setEmail}
              />
              <Input
                placeholder="Parola"
                secureTextEntry={true}
                value={password}
                keyboardType={"default"}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.passwordContainer} onPress={() => navigation.navigate("ForgotPassword")}>
                <Text style={styles.passwordText}>{"Şifremi Unuttum"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <Button title="Giriş Yap" onPress={handleSubmit} />
            </View>
          </View>
        </SafeAreaView>
        <CustomAlert 
            visible={showAlert}
            onClose={() => setShowAlert(false)}
            message={alertMessage}
            buttonText={'Tamam'}
          />
      </LayoutBackground>
    </KeyboardDismissView>
  );
};

export default LoginPage;
