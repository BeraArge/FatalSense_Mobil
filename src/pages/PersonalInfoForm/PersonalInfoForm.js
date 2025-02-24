import React, { useState } from "react";
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

const PersonalInfoForm = ({ navigation }) => {
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

  // datettimepicker gösterme ve gebelik haftası hesaplama
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

  const handleSend = () => {
    if (!nameSurname || !age || !weight || !height || !periodDate) {
      setShowAlert(true);
      return;
    }
    navigation.navigate("HomePage");
  };

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
                onChangeText={setNameSurname}
              />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Yaşınız :"}</Text>
              <Input
                placeholder={"............."}
                value={age}
                onChangeText={setAge}
              />
            </View>
            <View style={styles.questionContainer}>
              <Text style={styles.text}>{"Gebelik Öncesi Kilonuz :"}</Text>
              <Input
                placeholder={"............. kg"}
                value={weight}
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
              </View>
            ) : null}

            <View style={styles.questionContainer}>
              <Text style={styles.text}>
                {"En Son Ultrasona Göre Gebelik Haftası :"}
              </Text>
              <Input
                placeholder={"............. hafta"}
                value={ultrasonPregnancyWeek}
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
            message={"Lütfen tüm alanları doldurun!"}
          />
        </View>
      </SafeAreaView>
    </LayoutBackground>
  );
};

export default PersonalInfoForm;
