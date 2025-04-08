import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  Modal,
} from "react-native";
import styles from "./PersonalInfoForm.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";
import Input from "../../components/Input";
import { Colours, FontSize } from "../../constants/theme";
import Button from "../../components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomAlert from "../../components/CustomAlert";
import { useDispatch, useSelector } from "react-redux";
import { personalForm } from "../../redux/slices/personalFormSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalInfoForm = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.personal);
  const { userId } = route.params || {};

  const [nameSurname, setNameSurname] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bki, setBki] = useState("");
  const [periodDate, setPeriodDate] = useState(new Date());
  const [pregnancyWeek, setPregnancyWeek] = useState("");
  const [ultrasonPregnancyWeek, setUltrasonPregnancyWeek] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (data?.isSuccess === true) {
      navigation.navigate("HomePage", {
        ultrasonPregnancyWeek: ultrasonPregnancyWeek,
      });
    }
  }, [data]);

  // datetimepicker gösterme ve gebelik haftası hesaplama
  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      setPeriodDate(selectedDate);
      const weekDiff = Math.floor(
        (new Date() - selectedDate) / (1000 * 60 * 60 * 24 * 7)
      );
      setPregnancyWeek(weekDiff);
    }
    setShowPicker(false);
  };

  //bki hesaplama
  const calculateBKI = (w, h) => {
    const weightNum = parseFloat(w);
    const heightNum = parseFloat(h) / 100;

    if (weightNum && heightNum) {
      const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
      setBki(bmiValue);
    } else {
      setBki(null);
    }
  };

  // verileri gönderme
  const handleSend = async () => {
    if (
      !nameSurname ||
      !age ||
      !weight ||
      !height ||
      !periodDate ||
      !pregnancyWeek ||
      !ultrasonPregnancyWeek
    ) {
      setAlertMessage("Lütfen gerekli yerleri doldurunuz!");
      setShowAlert(true);
      return;
    }
    if (
      userId &&
      nameSurname &&
      age &&
      weight &&
      height &&
      periodDate &&
      pregnancyWeek &&
      ultrasonPregnancyWeek
    ) {
      try {
        await AsyncStorage.setItem(
          "userUltrasonPregnancyWeek",
          ultrasonPregnancyWeek ? ultrasonPregnancyWeek : ""
        );
        const changeDate = new Date(periodDate);
        const formattedDate = changeDate
          .toISOString()
          .split("T")[0]
          .replace(/-/g, ".");

        dispatch(
          personalForm({
            id: userId,
            yas: age,
            kilo: weight,
            boy: height,
            bKI: bki,
            sonAdet: formattedDate,
            aHaftalik: pregnancyWeek.toString(),
            uHaftalik: ultrasonPregnancyWeek,
          })
        );
      } catch (error) {
        console.log("PersonalInfo Form Page Hata oluştu:", error);
      }
    }
  };

  //console.log("PERSONALFORM PAGE USER: ", data?.data, "---------:", typeof height);

  return (
    <LayoutBackground backgroundOption={4}>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.bodyContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Adınız Soyadınız :"}</Text>
              <Input
                placeholder={"............."}
                value={nameSurname}
                keyboardType={"default"}
                onChangeText={setNameSurname}
              />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Yaşınız :"}</Text>
              <Input
                placeholder={"............."}
                value={age}
                keyboardType={"numeric"}
                onChangeText={setAge}
              />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Gebelik Öncesi Kilonuz :"}</Text>
              <Input
                placeholder={"............. kg"}
                value={weight}
                keyboardType={"numeric"}
                onChangeText={(value) => {
                  setWeight(value);
                  calculateBKI(value, height);
                }}
              />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Boyunuz :"}</Text>
              <Input
                placeholder={"............. cm"}
                value={height}
                keyboardType={"numeric"}
                onChangeText={(value) => {
                  setHeight(value);
                  calculateBKI(weight, value);
                }}
              />
            </View>

            {weight && height ? (
              <View
                style={[
                  styles.questionContainer,
                  { flexDirection: "row", paddingVertical: "1%" },
                ]}
              >
                <Text style={[styles.text, { color: Colours.darkGray }]}>
                  {"BKİ (Beden Kitle İndeksi) :  "}
                </Text>
                <Text
                  style={[
                    styles.text,
                    { color: Colours.themeRed, fontSize: FontSize.s16 },
                  ]}
                >
                  {`${bki}`}
                </Text>
              </View>
            ) : null}

            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Son Adet Tarihiniz :"}</Text>
              <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Input
                  placeholder={"Tarih Seç"}
                  value={periodDate.toLocaleDateString("tr-TR")}
                  editable={false}
                />
              </TouchableOpacity>
              {showPicker && (
                <DateTimePicker
                  value={periodDate}
                  mode="date"
                  display="default"
                  onChange={onChange}
                  maximumDate={new Date()}
                  locale="tr-TR" // Türkçe dil desteği ios için
                  textColor={Colours.themePink}
                />
              )}
            </View>

            {periodDate ? (
              <View
                style={[styles.questionContainer, { paddingVertical: "1%" }]}
              >
                {pregnancyWeek ? (
                  <Text style={[styles.text, { color: Colours.darkGray }]}>
                    {`Bebeğiniz, son adet tarihine göre `}
                    <Text
                      style={{
                        color: Colours.themeRed,
                        fontSize: FontSize.s18,
                      }}
                    >
                      {` ${pregnancyWeek}`}
                    </Text>
                    {` haftalıktır.`}
                  </Text>
                ) : null}
              </View>
            ) : null}

            <View style={styles.questionContainer}>
              <Text style={styles.text}>
                {"En Son Ultrasona Göre Gebelik Haftası :"}
              </Text>
              <Input
                placeholder={"............. hafta"}
                value={ultrasonPregnancyWeek}
                keyboardType={"numeric"}
                onChangeText={setUltrasonPregnancyWeek}
              />
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Button
              title={"Gönder"}
              onPress={handleSend}
              style={{ backgroundColor: Colours.darkPink }}
            />
          </View>

          <CustomAlert
            visible={showAlert}
            onClose={() => setShowAlert(false)}
            message={alertMessage}
            buttonText={"Tamam"}
          />
        </View>
      </SafeAreaView>
    </LayoutBackground>
  );
};

export default PersonalInfoForm;
