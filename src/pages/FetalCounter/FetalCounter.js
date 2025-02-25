import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
} from "react-native";
import styles from "./FetalCounter.styles";
import LayoutBackground from "../../components/LayoutBackground";
import CustomAlert from "../../components/CustomAlert";

const FetalCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [fetalCount, setFetalCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Süre - sayaç sıfırlama
  const handleResetTimer = () => {
    setSeconds(0);
    setFetalCount(0);
  };

  // Fetal hareket sayısı arttırma
  const handleCounter = () => {
    setFetalCount((count) => count + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <LayoutBackground backgroundOption={3} backButton={true}>
        <ScrollView
          style={{
            flex: 1,
            marginTop: Platform.OS === "ios" ? "28%" : "20%",
            marginBottom: "5%",
          }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{"FETAL HAREKET SAYACI"}</Text>
                <View style={styles.divider} />
              </View>

              <View style={styles.bodyContainer}>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    style={styles.counterButton}
                    onPress={handleCounter}
                  >
                    <Text style={styles.counterText}>
                      {fetalCount > 0 ? `${fetalCount}` : "BAŞLA"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.timerButtonContainer}>
                  <TouchableOpacity
                    style={styles.timerButton}
                    onPress={isRunning ? handleStopTimer : handleResetTimer}
                  >
                    <Text style={styles.timerButtonText}>
                      {"Sayacı Sıfırla"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.resultContainer}>
                  <Text style={styles.resultText}>{`Fetal Hareket: ${fetalCount}`}</Text>
                </View>
              </View>

              <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.allResultButton} onPress={() => setShowResult(true)}>
                  <Text style={[styles.timerButtonText]}>
                    {"Tüm Sonuçları Gör"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* <CustomAlert
          message={"Lütfen önce süreyi başlatınız!"}
          buttonText={"Tamam"}
          visible={showAlert}
          onClose={() => setShowAlert(false)}
        /> */}

        <CustomAlert
          message={`${fetalCount}`}
          buttonText={"Kapat"}
          visible={showResult}
          onClose={() => setShowResult(false)}
        />
      </LayoutBackground>
    </View>
  );
};

export default FetalCounter;
