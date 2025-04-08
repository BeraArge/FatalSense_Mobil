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
import styles from "./PostpartumPage.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";
import postpartumData from "../../utils/postpartumData";
import { FontSize, Colours } from "../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const PostpartumPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const itemsPart1 = [
    "Doğumdan sonraki ilk 6 hafta süren dönem  (42 gün) dönem, lohusalık dönemi olarak tanımlanır.",
    "Ülkemizde doğum yapan kadınların doğum sonrası dönemde üçü hastanede, üçü evde veya sağlık kuruluşunda olmak üzere altı kez izleminin yapılması, normal doğum sonrası 24 saat, sezaryen sonrası 48 saat hastanede takip edilmesi gerekmektedir.",
  ];

  const handleSelectWeek = (week) => {
    //console.log("POSPARTUMPAGE Seçilen başlık:", week);
    setSelectedWeek(week);
    setModalVisible(true); // Modal'ı açmak için
  };

  // Hafta seçenekleri
  const subMenuItems = Object.keys(postpartumData);

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
                <Text style={styles.headerText}>LOHUSALIK</Text>
                {itemsPart1.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}

                <Text
                  style={[
                    styles.subHeader,
                    { textAlign: "center", marginTop: "10%" },
                  ]}
                >
                  {
                    "DOĞUM SONU DÖNEMDE VÜCUDUMDA NE GİBİ DEĞİŞİKLİKLİKLER OLACAK?"
                  }
                </Text>

                <View style={styles.divider} />

                {/* HAFTA BUTTONS */}
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
                      {postpartumData[selectedWeek].image ? (
                        <Image
                          source={postpartumData[selectedWeek].image}
                          style={styles.weekImage}
                          resizeMode="contain"
                        />
                      ) : null}

                      <FlatList
                        data={postpartumData[selectedWeek].sections}
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
                                    {
                                      bottom: 25,
                                      fontWeight: 600,
                                    },
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

                              {item.coverLetter ? (
                                <Text style={styles.coverLetter}>
                                  {item.coverLetter}
                                </Text>
                              ) : null}

                              {Array.isArray(item.content) &&
                              item.content.length > 0
                                ? item.content.map((text, idx) => (
                                    <Text key={idx} style={styles.listContent}>
                                      • {text}
                                    </Text>
                                  ))
                                : null}

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

                              {item.image ? (
                                <Image
                                  source={item.image}
                                  style={styles.tableImage}
                                  resizeMode="contain"
                                />
                              ) : null}

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

                              {item.coverLetter3 ? (
                                <Text
                                  style={[
                                    styles.coverLetter,
                                    {
                                      paddingTop: 12,
                                      color: Colours.themeRed,
                                      textAlign: "center",
                                    },
                                  ]}
                                >
                                  {item.coverLetter3}
                                </Text>
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

export default PostpartumPage;
