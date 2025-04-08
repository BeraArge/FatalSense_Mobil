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
import styles from "./BabyCarePage.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";
import { babyCareData, babyCareData1 } from "../../utils/babyCareData";
import { FontSize, Colours } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const BabyCarePage = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const itemsPart1 = [
    "Doğumdan sonraki ilk 4 hafta yenidoğan dönemini kapsamaktadır.",
  ];

  const checkupStages1 = [
    "2500-4000 gr. ağırlığında doğan,",
    "Dış ortama uyun yeteneği iyi olan,",
    "Doğumsal anomali ve hastalık belirtileri göstermeyen bebek olarak tanımlanır.",
  ];

  const handleSelectWeek = (week) => {
    //console.log("BABYCAREDATA Seçilen Başlık:", week);
    setSelectedWeek(week);
    setModalVisible(true); // Modal'ı açmak için
  };

  // Hafta seçenekleri
  const subMenuItems = Object.keys(babyCareData);
  const subMenuItems1 = Object.keys(babyCareData1);

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
                <Text style={styles.headerText}>BEBEK BAKIMI & EMZİRME</Text>
                <Text
                  style={[
                    styles.subHeader,
                    {
                      textAlign: "left",
                      marginTop: "2%",
                      color: Colours.themeBlue,
                    },
                  ]}
                >
                  {"BEBEK BAKIMI"}
                </Text>

                <Text style={styles.subHeader}>Sağlıklı Yenidoğan :</Text>
                {checkupStages1.map((stage, index) => (
                  <View key={index} style={styles.subListItem}>
                    <View style={styles.smallBullet} />
                    <Text style={styles.text}>{stage}</Text>
                  </View>
                ))}

                {itemsPart1.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}

                <View style={styles.divider} />

                {/* İÇERİK BUTTONS */}
                <View style={styles.subMenuList}>
                  {subMenuItems.map((week, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.subMenuButton}
                      onPress={() => handleSelectWeek(week)}
                    >
                      <Text style={styles.subMenuText}>{week}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={styles.divider} />
                <View style={[styles.divider, { margin: 0 }]} />

                <Text
                  style={[
                    styles.subHeader,
                    {
                      textAlign: "left",
                      marginTop: "5%",
                      color: Colours.themeBlue,
                    },
                  ]}
                >
                  {"EMZİRME"}
                </Text>

                <View style={styles.subMenuList}>
                  {subMenuItems1.map((week, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.subMenuButton,
                        { backgroundColor: '#faf1ed' },
                      ]}
                      onPress={() => handleSelectWeek(week)}
                    >
                      <Text
                        style={[
                          styles.subMenuText,
                          { color: Colours.themeBlue },
                        ]}
                      >
                        {week}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View style={{marginVertical: '3%'}}>
                  <Text style={[styles.warnText, {color: Colours.themeGreen}]}>{'EMZİRMEYE DOĞUMU TAKİBEN 1 SAAT İÇİNDE BAŞLAYIN !!!'}</Text>
                  <Text style={[styles.warnText, {color: Colours.themeRed}]}>{'İLK 6 AY SADECE ANNE SÜTÜ VERİN !!!'}</Text>
                  <Text style={[styles.warnText, {color: Colours.themePurple}]}>{'6. AYDAN İTİBAREN HEKİMİNİZLE GÖRÜŞEREK UYGUN TAMAMLAYICI BESİNLERE BAŞLAYIN !!!'}</Text>
                  <Text style={[styles.warnText, {color: Colours.themeOrange}]}>{'2 YAŞ VE ÖTESİNE KADAR TAMAMLAYICI GIDALARLA BERABER ANNE SÜTÜNE DEVAM EDİN !!!'}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* BUTTON İÇERİK BOTTOMSHEET */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  {selectedWeek && (
                    <View style={styles.bottomSheetContent}>
                      <Text style={styles.sheetTitle}>{selectedWeek}</Text>
                      {babyCareData[selectedWeek]?.image ||
                      babyCareData1[selectedWeek]?.image ? (
                        <Image
                          source={
                            babyCareData[selectedWeek]?.image ||
                            babyCareData1[selectedWeek]?.image
                          }
                          style={styles.weekImage}
                          resizeMode="contain"
                        />
                      ) : null}

                      <FlatList
                        data={[
                          ...(babyCareData[selectedWeek]?.sections || []),
                          ...(babyCareData1[selectedWeek]?.sections || []),
                        ]}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        ListFooterComponent={<View style={{ height: 200 }} />}
                        renderItem={({ item }) => (
                          (
                            <View style={styles.section}>
                              {item.description ? (
                                <Text
                                  style={[
                                    styles.coverLetter,
                                    { paddingTop: 12 },
                                  ]}
                                >
                                  {item.description}
                                </Text>
                              ) : null}

                              {item.title ? (
                                <Text style={styles.sectionTitle}>
                                  {item.title}
                                </Text>
                              ) : null}

                              {item.image ? (
                                <Image
                                  source={item.image}
                                  style={styles.tableImage}
                                  resizeMode="contain"
                                />
                              ) : null}

                              {item.image1 ? (
                                <Image
                                  source={item.image1}
                                  style={styles.tableImage1}
                                  resizeMode="contain"
                                />
                              ) : null}

                              {Array.isArray(item.content) &&
                              item.content.length > 0
                                ? item.content.map((text, idx) => (
                                    <Text key={idx} style={styles.listContent}>
                                      • {text}
                                    </Text>
                                  ))
                                : null}

                              {item.coverLetter ? (
                                <Text style={styles.coverLetter}>
                                  {item.coverLetter}
                                </Text>
                              ) : null}

                              {Array.isArray(item.contentEnd) &&
                              item.contentEnd.length > 0
                                ? item.contentEnd.map((text, idx) => (
                                    <Text
                                      key={idx}
                                      style={[
                                        styles.listContent,
                                        {
                                          fontWeight: "bold",
                                          fontSize: FontSize.s15,
                                        },
                                      ]}
                                    >
                                      • {text}
                                    </Text>
                                  ))
                                : null}

                              {item.coverLetter2 ? (
                                <Text
                                  style={[
                                    styles.coverLetter,
                                    { paddingTop: 12 },
                                  ]}
                                >
                                  {item.coverLetter2}
                                </Text>
                              ) : null}

                              {item.image2 ? (
                                <Image
                                  source={item.image2}
                                  style={styles.tableImage2}
                                  resizeMode="contain"
                                />
                              ) : null}
                            </View>
                          )
                        )}
                      />
                    </View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </LayoutBackground>
    </View>
  );
};

export default BabyCarePage;
