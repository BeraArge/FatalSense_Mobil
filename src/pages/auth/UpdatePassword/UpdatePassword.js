import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./UpdatePassword.styles";
import LayoutBackground from "../../../components/LayoutBackground";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import CustomAlert from "../../../components/CustomAlert";
import KeyboardDismissView from "../../../components/KeyboardDismissView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword, clearMessage } from "../../../redux/slices/updatePasswordSlice";

const UpdatePassword = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.uPassword);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [againNewPassword, setAgainNewPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // alert message control
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

  // veri gönderme
  const handleUpdatePassword = async () => {
    const userId = await AsyncStorage.getItem("userId");
    //console.log("UPDATEPASSWORD USERID: ",userId);

    if (!oldPassword || !newPassword || !againNewPassword) {
      setAlertMessage("Lütfen gerekli yerleri doldurunuz!");
      setShowAlert(true);
      return;
    }
    if (userId && oldPassword && newPassword && againNewPassword) {
      try {
        dispatch(
          updatePassword({
            userid: userId,
            password: oldPassword,
            newpassword: newPassword,
            newrepassword: againNewPassword,
          })
        );
        
      } catch (error) {
        console.log("UpdatePassword Page Hata oluştu:", error);
      }
    }
  };

  //alert kapat
  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage("");
    setOldPassword("");
    setNewPassword("");
    setAgainNewPassword("");
    if (data?.isSuccess === true) {
      navigation.navigate("HomePage");
    }
  };

  return (
    <KeyboardDismissView style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={3} backButton={true}>
        <SafeAreaView style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.headerContainer}>
              <Text style={[styles.headerText]}>{`Şifremi Güncelle`}</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.bodyContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>{"Eski Şifreniz :"}</Text>
                <Input
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  editable={true}
                  keyboardType={"default"}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>{"Yeni Şifreniz :"}</Text>
                <Input
                  value={newPassword}
                  onChangeText={setNewPassword}
                  editable={true}
                  keyboardType={"default"}
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>{"Yeni Şifreniz Tekrar :"}</Text>
                <Input
                  value={againNewPassword}
                  onChangeText={setAgainNewPassword}
                  editable={true}
                  keyboardType={"default"}
                  secureTextEntry={true}
                />
              </View>
            </View>

            <View style={styles.footerContainer}>
              <Button title={"Güncelle"} onPress={handleUpdatePassword} />
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

export default UpdatePassword;
