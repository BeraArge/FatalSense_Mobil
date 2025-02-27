import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./HomePage.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = ({ navigation, route }) => {
  const { userName, userSurname, ultrasonPregnancyWeek } = route.params || {};

  const [nameSurname, setNameSurname] = useState("");
  const [ultrasonPregnancy, setUltrasonPregnancy] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const storedNameSurname = await AsyncStorage.getItem("nameSurname");
        const storedPregnancyWeek = await AsyncStorage.getItem(
          "userUltrasonPregnancyWeek"
        );

        if (storedNameSurname || storedPregnancyWeek) {
          setNameSurname(storedNameSurname);
          setUltrasonPregnancy(storedPregnancyWeek);
        }
      } catch (error) {
        console.log("HOMEPAGE Veri okuma hatası:", error);
      }
    };

    getData();
  }, []);

  return (
    <LayoutBackground backgroundOption={3}>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={[styles.headerText, { fontStyle: "italic" }]}>
              {nameSurname || userName || userSurname
                ? `Hoşgeldiniz ${nameSurname}`
                : `Hoşgeldiniz ${userName} ${userSurname}`}
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.firstContainer}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate("FetalDevPage")}
              >
                <Image
                  style={styles.menuIcon}
                  source={require("../../../assets/appAssets/menuIcons/1.png")}
                />
                <Text style={styles.titleText}>{"Fetal Gelişim"}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  style={[styles.menuIcon, { width: 70, height: 130 }]}
                  source={require("../../../assets/appAssets/menuIcons/2.png")}
                />
                <Text style={styles.titleText}>{"Bebek Bakımı"}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("UpdatePassword")}
              >
                <LogoArea imageSource="logo" logoWidth={70} logoHeight={70} />
              </TouchableOpacity>
            </View>

            <View style={styles.thirdContainer}>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  style={[styles.menuIcon, { width: 90, height: 130 }]}
                  source={require("../../../assets/appAssets/menuIcons/3.png")}
                />
                <Text style={styles.titleText}>{"Doğum Sonrası Dönem"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate("FetalCounter")}
              >
                <Image
                  style={[styles.menuIcon, { width: 95, height: 110 }]}
                  source={require("../../../assets/appAssets/menuIcons/4.1.png")}
                />
                <Text style={styles.titleText}>{"Fetal Hareket Takibi"}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Text style={[styles.headerText]}>
              {ultrasonPregnancyWeek
                ? `Gebelikte ${ultrasonPregnancyWeek}. hafta`
                : `Gebelikte ${ultrasonPregnancy}. hafta`}
            </Text>
            <View style={styles.divider} />
          </View>
        </View>
      </SafeAreaView>
    </LayoutBackground>
  );
};

export default HomePage;
