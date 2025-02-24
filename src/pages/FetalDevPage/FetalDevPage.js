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
import styles from "./FetalDevPage.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";
import fetalDevelopmentData from "../../utils/fetalDevelopmentData";
import { FontSize, Colours } from "../../constants/theme";

const FetalDevPage = () => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const itemsPart1 = [
    "Gebelikte izlemler Sağlık Bakanlığı’nın Doğum Öncesi Bakım Yönetim Rehberi’ne göre yapılır. İzlem sırasında fizik muayene, eğitim ve danışmanlık ile bazı laboratuvar testleri yapılır.",
    "Sağlıklı bir gebelik geçirilmesi için en az 4 kez sağlık kontrolüne gidilmesi önerilir. (Annenin gebeliğe bağlı bir şikayeti varsa veya sağlık personeli bir risk saptamışsa daha sık aralıklarla ve daha çok sayıda izlem yapılır.)",
  ];

  const checkupStages1 = [
    "1. izlem: Gebeliğin ilk 14 haftası içinde",
    "2. izlem: 18-24. haftalar arasında",
    "3. izlem: 30-32. haftalar arasında",
    "4. izlem: 36-38. haftalar arasında olması önerilmektedir.",
  ];

  const itemsPart2 = [
    "Gebeliğin oluşumundan 12. haftaya (3. Ay) kadar anne karnındaki bebeğe EMBRİYO 12. haftadan sonra ise FETÜS adı verilir.",
    "Gebelik planlayan her kadının gebelikten en az 1 ay önce başlamak üzere 400-800 mikro gr/gün folik asit kullanması uygundur. Folik asit, bebeklerin beyin ve omurilik gelişiminde önemli rol oynar.",
  ];

  const handleSelectWeek = (week) => {
    console.log("FETALDEVPAGE Seçilen Hafta:", week);
    setSelectedWeek(week);
    setModalVisible(true); // Modal'ı açmak için
  };

  // Hafta seçenekleri
  const subMenuItems = Object.keys(fetalDevelopmentData);

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
                <Text style={styles.headerText}>GEBELİKTE İZLEM</Text>
                {itemsPart1.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}

                <Text style={styles.subHeader}>Kontroller :</Text>
                {checkupStages1.map((stage, index) => (
                  <View key={index} style={styles.subListItem}>
                    <View style={styles.smallBullet} />
                    <Text style={styles.text}>{stage}</Text>
                  </View>
                ))}

                <Text
                  style={[
                    styles.subHeader,
                    { textAlign: "center", marginTop: "10%" },
                  ]}
                >
                  {
                    "GEBELİK HAFTALARINA GÖRE FETÜSÜN GELİŞİMİ VE ANNEDE GÖRÜLEN DEĞİŞİKLİKLER"
                  }
                </Text>
                {itemsPart2.map((item, index) => (
                  <View key={index} style={styles.listItem}>
                    <View style={styles.bullet} />
                    <Text style={styles.text}>{item}</Text>
                  </View>
                ))}

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
                      {fetalDevelopmentData[selectedWeek].image ? (
                        <Image
                          source={fetalDevelopmentData[selectedWeek].image}
                          style={styles.weekImage}
                          resizeMode="contain"
                        />
                      ) : null}

                      <FlatList
                        data={fetalDevelopmentData[selectedWeek].sections}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        ListFooterComponent={<View style={{ height: 200 }} />}
                        renderItem={({ item }) => (
                          console.log(
                            "---------------------------->",
                            item.description
                          ),
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

export default FetalDevPage;
