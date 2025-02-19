import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styles from "./FetalDevPage.styles";
import LayoutBackground from "../../components/LayoutBackground";
import LogoArea from "../../components/LogoArea";

const FetalDevPage = () => {
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

  const subMenuItems = [
    "4.HAFTA",
    "5.HAFTA",
    "6.HAFTA",
    "7.HAFTA",
    "8.HAFTA",
    "9-12.HAFTALAR ARASI",
    "13-16.HAFTALAR ARASI",
    "17-20.HAFTALAR ARASI",
    "21-24.HAFTALAR ARASI",
    "25-28.HAFTALAR ARASI",
    "29-32.HAFTALAR ARASI",
    "33-36.HAFTALAR ARASI",
    "37-40.HAFTALAR ARASI",
    "GEBELİKTE AŞI UYGULAMALARI",
    "GEBELİKTE TEHLİKE BELİRTİLERİ",
    "KAYNAKÇA",
  ];

  return (
    <LayoutBackground backgroundOption={3}>
      <ScrollView style={{ flex: 1, marginTop: "20%", marginBottom: "5%" }}>
        <SafeAreaView style={styles.container}>
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

              <View style={styles.subMenuList}>
                {subMenuItems.map((list, index) => (
                  <TouchableOpacity key={index} style={styles.subMenuButton}>
                    <Text style={styles.subMenuText}>{list}</Text>
                  </TouchableOpacity>
                ))}
              </View>

            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LayoutBackground>
  );
};

export default FetalDevPage;
