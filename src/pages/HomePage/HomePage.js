import React from "react";
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

const HomePage = ({navigation}) => {
  return (
    <LayoutBackground backgroundOption={3}>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <Text style={[styles.headerText, { fontStyle: "italic" }]}>
              Hoşgeldiniz Özlem Miğfer
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <View style={styles.firstContainer}>
              <TouchableOpacity style={styles.menuButton} onPress={() => navigation.navigate("FetalDevPage")}>
                <Image
                  style={styles.menuIcon}
                  source={require("../../../assets/appAssets/menuIcons/1.png")}
                />
                <Text style={styles.titleText}>Fetal Gelişim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  style={[styles.menuIcon, { width: 70, height: 130 }]}
                  source={require("../../../assets/appAssets/menuIcons/2.png")}
                />
                <Text style={styles.titleText}>Bebek Bakımı</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.secondContainer}>
              <LogoArea imageSource="logo" logoWidth={70} logoHeight={70} />
            </View>

            <View style={styles.thirdContainer}>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  style={[styles.menuIcon, { width: 90, height: 130 }]}
                  source={require("../../../assets/appAssets/menuIcons/3.png")}
                />
                <Text style={styles.titleText}>Doğum Sonrası Dönem</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton}>
                <Image
                  style={[styles.menuIcon, { width: 95, height: 110 }]}
                  source={require("../../../assets/appAssets/menuIcons/4.1.png")}
                />
                <Text style={styles.titleText}>Fetal Hareket Takibi</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.footerContainer}>
            <Text style={[styles.headerText]}>Gebelikte 10.haftanız</Text>
            <View style={styles.divider} />
          </View>
        </View>
      </SafeAreaView>
    </LayoutBackground>
  );
};

export default HomePage;
