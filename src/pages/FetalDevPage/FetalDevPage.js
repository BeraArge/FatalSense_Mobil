import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
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
      <ScrollView style={{
        flex: 1,
        marginTop: Platform.OS === "ios" ? "28%" : "20%",
        marginBottom: "5%",
      }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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

              <View style={styles.subMenuList}>
                {subMenuItems.map((list, index) => (
                  <TouchableOpacity key={index} style={styles.subMenuButton}>
                    <Text style={styles.subMenuText}>{list}</Text>
                  </TouchableOpacity>
                ))}
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutBackground>
  );
};

export default FetalDevPage;

// bottomsheet de gösterilecek veriler
const fetalDevelopmentData = {
  "4.HAFTA": {
    image: require("../../assets/fetal_week_4.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Beyin farklılaşır.",
          "Kol ve bacaklar daha fazla gelişir.",
          "28.günde kalp atımı başlar. (4-6.hafta arasıdır. Gebeden gebeye değişiklik gösterir.)",
          "Ağız boşluğu - yemek borusu ve soluk borusu arasında bölme septum şekillenir."
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        coverLetter: [
          "Gebeliğin 4.haftası erken dönem gebelik kapsamında değerlendirildiği için anne adayları vücutlarında belirgin bir farklılık hissetmeyebilir. Hatta bazı anne adayları henüz gebe olduklarının farkında bile olmayabilir."
        ],
        content: [
          "4 haftalık gebelikte anne, gebelikle ilgili çoğu belirtiyi – hafif de olsa – hissetmeye başlar:",
          "Memeler büyür ve meme uçları daha da belirginleşir.",
          "Memelerde sızı veya hassaslık meydana gelebilir.",
          "Anne adayının, çeşitli yiyecek ve içeceklere karşı hassasiyeti artabilir.",
          "Aşerme, 4. haftadan itibaren artış gösterir.",
          "Aşerme sonucunda anne birkaç kilo alabilir.",
          "Sık idrara çıkma görülebilir.",
          "Midede ekşime, hazımsızlık, sık mide bulantısı ve bitkinlik görülebilir.",
          "Ayrıca yerleşme kanaması olarak tabir edilen hafif bir kanama görülebilir ancak yoğun ve uzun süreli görülmesi hâlinde doktora başvurulmalıdır.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Alkol ve sigara kullanımı varsa bu alışkanlıklar da derhal sonlandırılmalıdır.",
          "Kesinlikle sigara içmemelidir ve içilen ortamda kalınmamalıdır.",
          "Sağlıklı beslenme - sık sık beslenmek.",
          "İyi bir uyku düzeni - aralıklı dinlenmeyi sağlama.",
          "Bol sıvı alımı önemlidir.",
        ],
      },
      {
        title: "Gebelik Döneminde Uzak Durulması Gereken Besinler",
        content: [
          "Kafein ve alkol,",
          "İşlenmiş ve paketli gıdalar,",
          "Pastörize edilmemiş süt ürünleri,",
          "Doktorun bilgisini ileteceği deniz ürünleri, suşi, midye hamilelik döneminde uzak durulması gereken besinler arasındadır.",
        ],
      },
    ],
  },
  "5.HAFTA": {
    image: require("../../assets/fetal_week_5.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Kalp düzenli ritmik çarpmaya başlar.",
          "Kalpte yapısal değişiklikler oluşur.",
          "Kaslar oluşmaya başlar.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        coverLetter: ["Gebeliğin 5. haftası erken dönem gebelik kapsamında değerlendirildiği için anne adayları vücutlarında belirgin bir farklılık hissetmeyebilir. Hatta bazı anne adayları henüz gebe olduklarının farkında bile olmayabilir."],
        content: [
          "Gebelikte yaşanan hormonal değişimler cildinizin yapısını da etkileyebilir. Bunun sonucunda akne ve sivilce gibi cilt problemleri yaşanabilir. Gebelik sonrasında kendiliğinden geçen bu durum oldukça normal sayılır.",
          "Bazı kadınların gebelikte 5. hafta belirtileri arasında ağızda metalik tat, aşırı tükürük salgısı ve koku almada yüksek hassasiyet olduğu da bilinir.",
          "Bazı yiyeceklerin tadından ve kokusundan tiksinme de bu dönemde sıkça görülen belirtiler arasındadır.",
        ],
        coverLetter2: [
          "Bunlar, gebelik hormonlarının sebep olduğu durumlardır. Gebelikte yaşanan bu değişiklikler uyum için zamana ihtiyaç vardır."
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Az az sık sık az beslenme düzenine dikkat edilmelidir.",
          "Bol sıvı tüketilmelidir.",
          "Vitamin desteği ve folik asit düzenli olarak kullanılmalıdır.",
        ],
      },
    ],
  },
  "6.HAFTA": {
    image: require("../../assets/fetal_week_6.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Fetüsün baş yapıları daha gelişmiştir ve gövde daha düzdür.",
          "Üst ve alt çeneler tanınabilir ve dış burun oluşur.",
          "Üst dudak mevcuttur ve damak gelişir.",
          "Kulaklar gelişmeye devam eder.",
          "Kollar göğüs boyunca karın tarafına doğru uzanmaya başlar, her iki kol ve bacakta perdeli olsalar da parmaklar vardır.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Gebelikte herkesin deneyimi farklıdır.",
          "Yaşanan hormonal değişimlere bağlı olarak hassaslaşan meme uç kısımları belirgin hale gelir ya da meme ucu çevresinde bulunan cildin rengi koyulaşmaya başlar.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Dengeli ve yeterli beslenme önemlidir. Az az ve sık sık olacak şekilde beslenme programı oluşturulmalıdır.",
          "Vitamin desteği ve folik asit düzenli olarak kullanılmalıdır.",
          "Bol sıvı tüketilmelidir.",
        ],
      },
    ],
  },
  "7.HAFTA": {
    image: require("../../assets/fetal_week_7.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Embriyonun başı yuvarlaktır ve neredeyse dikleşir.",
          "Gözler, birbirine daha yakın konuma yaklaşmıştır ve göz kapakları oluşmaya başlar.",
          "Ağız içerisinde dil gelişmektedir.",
          "Diyafram, göğüs boşluğunu karından ayırmaya başlar.",
          "Boşaltım ve genital sistem kör bir kese ile biten bir tüp şeklindeyken ayrı yapılar olarak ayrılmaya başlar.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "7. haftada halsizlik ve enerji düşüklüğü, sürekli uyku hali gibi sorunlar bu hafta için oldukça doğaldır.",
          "Gebelikte diş ve diş eti problemlerinin görülme sıklığı artar.",
          "Doktorunuza danışmadan kesinlikle ilaç kullanmamak, 7. haftalık gebelikte annenin dikkat etmesi gerekenler arasında ilk sırada yer alır.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Halsizlik ve enerji düşüklüğü için sürekli dinlenme halinde olmak yerine açık havaya çıkmak, yürüyüş veya doktorunuzun uygun göreceği küçük egzersizler yapmak bu sorunla mücadele açısından oldukça etkilidir.",
          "Diş eti sorunları için ağız hijyenine özen gösterilmelidir. Diş temizliğinde yumuşak bir fırça ve diş ipi kullanmalı, bir şeyler yiyip içtikten sonra ağız içi su ile çalkalanmalıdır.",
          "C vitamini içeriği yüksek sebze ve meyve tüketimini (yeşil yapraklı sebzeler, turunçgiller vb.) artırılmalıdır.",
          "Vitamin desteği ve folik asit düzenli olarak kullanılmalıdır.",
          "Bol sıvı tüketilmelidir.",
          "Sağlıklı beslenmek, hem anne sağlığı hem de bebeğin sağlıklı büyüme ve gelişimi açısından çok önemlidir.",
          "Bu haftada merak edilen bir diğer konu ise cinselliktir. Sağlıklı bir şekilde ilerleyen ve risk bulunmayan gebeliklerde, çiftlerin cinsel ilişkiye girmeleri konusunda bir sakınca yoktur. Fakat riskli gebeliklerde ya da cinsel organlara ilişkin hassasiyet hissetme gibi durumlarda doktora danışılması ve hekimin önerileri doğrultusunda hareket edilmesi daha sağlıklı olacaktır.",
        ],
      },
    ],
  },
  "8.HAFTA": {
    image: require("../../assets/fetal_week_8.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Embriyoda insan şekli belirginleşmiştir ve tüm sistemlerde gelişmeler devam etmektedir.",
          "Kulaklar son şekillerine yaklaşmıştır.",
          "Göz kapakları henüz örtülmemiştir.",
          "El ve ayak parmakları kısadır ama belirgindir.",
          "Dış üreme bölgesi farklılaşmaya başlar ancak erkek ve dişi özellikleri döllenmeden sonraki 10 haftaya kadar farklı değildir.",
          "Fetal bağırsak çok hızlı büyüdüğü için karın öne doğru şişkindir.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Bel bölgesi kalınlaşmaya başlar.",
          "Rahim (uterus) 8. haftada iri bir portakal büyüklüğüne ulaşır.",
          "Uterusun zaman zaman büyümesinden kaynaklı olarak karın ağrısı hissedilmesi de beklenen durumlar arasındadır.",
          "Sabah bulantıları, bu dönemde yoğun olarak görülür.",
          "Memeler daha hassas ve duyarlı olabilir.",
          "Özellikle hormonal dalgalanmalardan dolayı anne adayının psikolojik durumu zaman zaman değişebilir.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Bu sürecin daha kolay atlatılabilmesi için anne adayının çevresinden de destek alması faydalı olur. Böylece psikolojik değişiklikler ile baş etmek daha kolay hale gelir.",
          "Bulantı-kusmaların azalması için; sabahları yataktan kalkmadan önce tuzlu bir şeyler atıştırmak, sık aralıklarla ve az miktarda yemek, kızartmalardan, yağlı ve aşırı baharatlı yiyeceklerden kaçınmak, asitli içeceklerden kaçınmak, çay kahve tüketimini azaltmak etkili olabilir.",
          "Vitamin desteği ve folik asit düzenli olarak kullanılmalıdır.",
          "Bol sıvı tüketilmelidir.",
          "8 haftalık gebelikte beslenme rutinine iyi demir kaynakları olan kırmızı et, tahıllar, kuru bakliyatlar, yumurta ve yeşil sebzeler eklenebilir. Gerekirse doktor tavsiyesi ile takviye alınabilir.",
        ],
      },
    ],
  },
  "9-12.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_9_12.png"),
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "Fetüs yaklaşık olarak bir çilek boyutundadır ve günden güne kilo almaya başlamıştır. Kilosu yaklaşık 2,-3 gram iken boyu 2,2 ile 2,5 cm aralığındadır.",
          "9.hafta itibariyle fetal baş, baş-popo uzunluğunun yarısı kadardır.",
          "Fetal DNA testi, anne kanında bulunan bebeğe ait DNA parçalarını inceleyerek, bebekte Down sendromu, trizomi 18, trizomi 13 ve cinsiyet kromozomu gibi patolojik veya genetik sorunlar olup olmadığını belirlemek için yapılan bir tarama testidir. Test gebeliğin 10. haftasından itibaren yapılabilir.",
          "Yüz, 10. haftada insan yüzü şeklini almıştır.",
          "Dış üreme organları, 12. haftaya kadar farklılaşır ve ayırt edilebilir hale gelir.",
          "İdrar üretimi 9-12 hafta arasında başlar.",
          "İlk fetal hareketler gerçekleşir ancak annenin algılayamayacağı kadar hafiftir.",
          "Göz kapakları yaklaşık 10.haftada kapanır ve yaklaşık 28.haftaya kadar tekrar açılmaz.",
          "Dudakların emme refleksini düşündüren bazı refleks hareketleri 12.hafta itibariyle gözlemlenebilir.",
          "Bacaklar kollardan daha kısa ve daha az gelişmiştir.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Yorgunluk, ilk üç aylık gebeliğin normal bir belirtisidir. Kadınlar, akşam erken saatlerde kendini yorgun hissedebilir ve gece erken uyumak isteyebilir. Yorgunluk, hormon seviyelerinin düzene girdiği 12.-14.haftalardan itibaren azalmaya başlar.",
          "Gebelik boyunca cildin daha fazla yağ üretmesi normaldir ve cilt üzerinde sivilceler oluşabilir. Bazı kadınlarda ise cilt normalden daha kuru olabilir.",
          "Gebelik hormonu olan insan koryonik gonadotropin (hCG) seviyeleri, 2-3 günde bir ikiye katlanır ve 9.hafta itibarıyla zirveye çıkar. Hormonlar nedeniyle kadınlar normalden daha sık tuvalete gitme ihtiyacı hissedebilir.",
          "Bu haftalarda karın ağrısı, idrar yaparken yanma veya batma hissine neden oluyorsa ve çok sık idrara çıkma ihtiyacı duyuluyorsa, enfeksiyon olasılığı da olabilir. İdrar yolu enfeksiyonları gebelikte daha sık görülür. Bu tür şikayetler varsa ihmal etmeden doktora gidilmelidir. (Diğer haftalar içinde geçerlidir, bu şikayetler durumunda doktora gidilmelidir.)",
          "Annede duygu durum bozuklukları olabilir. Hormonların değişimi ile birlikte hassas, kırılgan bir ruh hali, nedensiz ağlama krizleri, sinirlenme ve kaygı yaşanabilir.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Cilt problemleri için hızlı kilo alımından kaçınmak yüzde leke oluşmasını önlemek için güneş kremleri ve şapka kullanmak etkili olacaktır.",
          "Sık idrara çıkma ve idrar kaçırma sorunları için; çay ve kahve tüketimini azaltmak, uyumadan önce sıvı alımını azaltmak, hijyene dikkat etme önemlidir. Gün içinde sıvı alımını kısıtlamamalıdır.",
          "Düzenli yürüyüş yapılması annede iyilik duygusunu arttırarak, fiziksel yakınmaları azaltır. Gebelik süresince ağır egzersizlerden ve temas sporlarından (voleybol, basketbol vb.) kaçınmak gerekir.",
          "Sık sık az miktarda yemek yenmelidir.",
          "Verilen vitamin ilaçları düzenli kullanılmalıdır.",
          "Kanama, lekelenme durumlarında hızlı bir şekilde doktora gidilmelidir.",
        ],
      },
    ],
  },
  "13-16.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_13_16.png"),
    description: [
      "Gebelikte ikili test genellikle gebeliğin 11-14 haftaları arasında yapılır.",
      "Doktorların genellikle 16. haftadan itibaren önerdikleri üçlü ya da dörtlü testler bu dönemde yapılır.",
    ],
    sections: [
      {
        title: "Fetal Büyüme ve Gelişme",
        content: [
          "Fetüs 6.5-8 cm uzunluğunda ve yaklaşık 13-20 gram ağırlığındadır. Bu haftadaki bir bebek genellikle bir limon büyüklüğündedir.",
          "Fetüsün başında ince saçlar (lanugo: Fetal vücudunu kaplayan ince tüyler) görülmeye başlar.",
          "Cilt şeffaftır ve kan damarları açıkça görülebilir.",
          "Aktif fetal hareketler mevcuttur, fetüs uzar, kollar ve bacaklar hareketlenir.",
          "Fetüs emme hareketi yapmaya, amniyotik mayiyi yutmaya ve bağırsaklarda mekonyum üretmeye başlar.",
          "Akciğerleri ve ter bezleri gelişmeye başlar.",
          "Karaciğer ve pankreas çalışmaya başlar.",
          "Kas dokusu ve vücut iskeleti gelişir, bu da fetüsün vücut pozisyonunda daha düz olmasına neden olur.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Anne adayının karnı yavaş yavaş büyümeye başlamakla birlikte dışarıdan bakıldığında hala belli olmayabilir.",
          "Bu dönemde memelerde hassasiyet artabilir.",
          "Karın kaslarında 13.haftadan itibaren ağrılar hissedebilir. ",
          "Bu dönemde vajinal akıntılar artabilir. Akıntıda koku, kaşıntı ve pis koku gibi belirtiler yaşandığında doktora bilgi vermek gerekir.",
          "Bu haftalarda anne adayının vücudunda koyu lekeler çıkabilir. Lekeler genellikle geçicidir ve büyük bir çoğunluğu doğum sonrası geçmektedir.",
          "Mide bulantısı ve kusmalar azaldığı için anne adayında iştah artışı görülebilir.",
          "Aynı şekilde memelerde büyüme, saç ve cilt daha parlak bir hal alır. Bazı anne adaylarının cildinde yağlanma ve sivilce de görülebilir.",
          "Gebeliğin 15. haftasında bazı anne adayları idrar yolu enfeksiyonu yaşayabilirler.",
          "16.gebelik haftasından itibaren demir desteğine başlanmalıdır.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Anne adayı ağır kaldırmaktan kaçınmalıdır.",
          "Çok uzun seyahatlerde bulunmamak gerekir.",
          "Herhangi bir risk yoksa hafif egzersizler (yürüyüş, yüzme) yapmaya devam edebilir. Ağır spor ve egzersizlerden kaçınılmalıdır.",
          "Eğer normalden daha fazla idrara çıkma ihtiyacı duyar fakat idrar yapamıyorsanız idrara çıkarken yanma hissediyor veya ateşiniz varsa enfeksiyon riski olabilir. Bu durumda doktorunuza hemen başvurmanız önemlidir.",
          "Stresten uzak durmak gerekir.",
          "Gebelikte dişler çürümeye meyilli olduğu için diş sağlığına dikkat edilmeli ve kontroller sık sık yapılmalı ve ağız hijyenine önem verilmedir.",
          "Protein ağırlıklı beslenmeye özen gösterilmelidir.",
        ],
      },
    ],
  },
  "17-20.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_17_20.png"),
    sections: [
      {
        title: "Fetal Büyüme ve Gelişme",
        content: [
          "17 haftalık gebelikte fetüs yaklaşık 11-13 cm boyunda ve 100-150 gram ağırlığındadır.",
          "20 haftalık gebelikte ise fetüs yaklaşık 21 cm boyunda ve 350 gram ağırlığındadır.",
          "Fetal hareketler hissedilir. (Gebeden gebeye fark eder.)",
          "Yağlı, peynir benzeri bir sekresyon olan (verniks caseosa), cildin her yerini kaplamıştır.",
          "Kaşlar ve kirpikler belirginleşir.",
          "Fetüsün karaciğeri demir depolamaya başlar.",
          "Kemik iliğinde artma vardır.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Daha önceki aylarda hissedilen stres ve sıkıntılar azalmaya başlar.",
          "Gebeliğin 17. haftasından itibaren vajinal akıntılar artabilir.",
          "Bu haftalarda özellikle bacaklarda görülen kramplar artabilir.",
          "Cilt parlaklığı artarken saçlar gürleşerek rengi koyulaşabilir.",
          "Sindirim problemleri ile birlikte şişkinlik hissi görülebilmektedir.",
          "Memeler büyümeye devam eder ve eskisinden çok daha hassastır.",
          "Burun mukozası ile ilgili semptomlar, gebeliğin 19. haftası civarında ortaya çıkabilir. Anne adayının kan hacmi artar, bu da burun mukozasının şişmesine ve burun tıkanıklığına neden olabilir. Bu belirtiler soğuk algınlığı anlamına gelmemektedir.",
          "Bazı gebelerde hormonlardaki değişimler, cilt kuruluğuna veya tırnakların zayıflamasına neden olabilir.",
          "Bu haftalarda vücutta şişlikler ve ödem görülebilir.",
          "Bebeğin ve uterusun büyümesi ile birlikte anne adayının bel oyuğu öne doğru, sırt ise geriye doğru giderek omurga şekli değişmeye başlar. Bundan dolayı anne adayında hafif paytak ördek vari yürüme başlayabilir.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Vajinal akıntıda artma görülebilir. Vajinal enfeksiyon gelişmemesi için; pamuklu iç çamaşırı kullanmak, iç çamaşırını sık değiştirmek, vajinal duş yapmamak ve tampon kullanmamak önemlidir.",
          "Bu haftalarda karın çatlakları az da olsa başlayabilir. Karın çatlaklarını önlemek için uygun kremler ve yağlar kullanılabilir.",
          "Ağır kaldırmamaktan ve uzanarak iş yapmaktan kaçınmak gerekir. (Kapı, pencere silmek elektrikli süpürge kullanmak, kanepe itmek gibi). Vücut dengesini sağlayacak şekilde hafif eşya taşınabilir.",
          "Gebeliğin bu döneminde iştah artabilir. Beslenmeye dikkat edilmelidir.",
          "Folik asit, demir ve lifli gıdalar beslenme düzenine eklenmelidir.",
          "Omega 3 içerdiği için haftada 1-2 kez balık tüketilebilir. Dip balıkları yerine yüzey balıklarının tercih edilmesi önemlidir.",
          "Bu dönemde anne adayının karnı belirginleşmeye başlar. Rahat ve sıkmayan kıyafetler giymek gerekir.",
          "Yürüyüş ve sporu aksatmamak önemlidir.",
          "Uzun yolculuklara çıkmaktan kaçınılmalıdır. 3 saati geçen yolculuklardan uzak durulmalıdır.",
          "Ödem durumunda; uzun süre ayakta kalmamak, uzun süre oturmak gerektiğinde bacakları düz bir şekilde uzatarak dinlenmek etkili olacaktır.",
        ],
      },
    ],
  },
  "21-24.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_21_24.png"),
    sections: [
      {
        title: "Fetal Büyüme ve Gelişme",
        content: [
          "Fetüs yaklaşık olarak 26-34 cm ve 350-660 gram ağırlığındadır.",
          "Fetüsün hem el hem de ayak parmaklarında tırnakları vardır.",
          "Fetal hareketler anne tarafından da hissedilmeye başlanır.",
          "Fetüs bağışıklık sistemi için önemli olan antikorları üretmeye başlar.",
          "Mekonyum (fetüs kakası) bağırsaklarda oluşmaya başlar.",
          "Cilt kırmızımsı ve buruşuktur, az miktarda deri altı yağ bulunur.",
          "Akciğerler, bebeklerin doğumdan sonra nefes almasını kolaylaştıran sürfaktan maddesini üretmeye başlar.",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "Anne adayı parmaklarını göbek deliğinin yaklaşık 1-2 cm üzerine koyduğunda rahmini hissedecektir.",
          "Ağırlık merkezi değiştiği ve eklemler gevşediği için normalden daha fazla denge problemleri yaşayabilir. Düşme ve çarpmalara karşı dikkatli olunmalıdır. Özellikle karna gelecek darbelerden korunmalıdır. Ciddi düşme ve çarpma durumunda en yakın sağlık kuruluşuna gidilerek doktor tarafından muayene yapılmalıdır.",
          "Fetüs daha fazla hareket etmeye başlar. Bunun yanında fetüste uyku ve uyanma düzeni oluşturmaya başlar.",
          "Bu dönemde mide yanması, kabızlık ve kramp şikayetleri başlayabilir.",
          "Karın büyümesinden dolayı eğilip kalkmada ve günlük aktivitede zorlanma yaşanabilir. Anneler dikkatli olmak şartıyla günlük rutin işlerine devam edebilirler.",
          "Bu haftada hormonların etkisi ile anne adayında uykuya dalmakta güçlük çekebilir.",
          "Vücut ısısı gebe olmayan kadınlara göre yaklaşık 0,5-1 derece daha fazla yükselebilir.",
          "Kloazma denilen gebelik maskesi oluşmaya başlar. Bu gebelerin özellikle güneş ışığına direkt maruz kalmaktan uzak durmaları gerekmektedir.",
          "Bu dönemde saçlar biraz daha gür ve canlı olmakla birlikte gebelik sonrası dökülmeler hızlanır. Ancak bu dökülme süreci de geçicidir.",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "Gebelikte artan östrojen hormonu nedeni ile kılcal damarlarında belirginleşme görülebilir.",
          "Varisten ve ödemden kaçınmak için; uzun süre ayakta ve oturma pozisyonunda kalmamak, her fırsatta ayakları düz pozisyonda uzatarak ya da 15-30 cm yükselterek dinlenmek, sıkan, lastikli çoraplar ve topuklu ayakkabı giymemek gerekir.",
          "Kabızlıktan korunmak için lifli gıdalar ve bol sıvı tüketimine önem verilmelidir.",
          "Doğal olan gıdalar ile beslenmek bol su içmek önemlidir.",
          "Mide yanması ve reflü durumlarında; gaz yapıcı ve asit artırıcı besinler tüketmemek, uyumadan önce yemek yememek, uyurken başınızı yüksekte tutmak yardımcı olacaktır.",
          "Sırt ve bel ağrısı olmaması için; yerden bir şey kaldırırken dizleri kırarak eğilmek, otururken sırt ve belin dik durmasına dikkat etmek, topuklu ayakkabı giymemek önemlidir.",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
  "25-28.HAFTALAR ARASI": {
    image: require("../../assets/fetal_week_25_28.png"),
    description: [
      "",
    ],
    sections: [
      {
        title: "Embriyonun Gelişimi",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Annedeki Değişiklikler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "Bu Dönemi Sağlıklı ve Rahat Geçirmek İçin Yapılabilecekler",
        content: [
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  },
};
