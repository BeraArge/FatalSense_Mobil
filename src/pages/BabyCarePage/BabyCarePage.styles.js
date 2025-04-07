import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colours, FontSize } from "../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: "5%",
  },
  innerContainer: {
    flex: 0.89,
    top: 10,
    marginBottom: "5%",
  },
  headerText: {
    fontSize: FontSize.s18,
    fontWeight: "bold",
    color: Colours.darkGreen,
    alignSelf: "center",
    marginBottom: 10,
    flexShrink: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colours.themeOrange,
    marginRight: 10,
    marginTop: 7,
  },
  subListItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 20,
    marginBottom: 6,
  },
  smallBullet: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: "green",
    marginRight: 8,
    marginTop: 9,
  },
  text: {
    fontSize: 16,
    color: Colours.black,
    flexShrink: 1, // Taşmayı önler, uzun metinleri kırar
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 7,
    marginBottom: 5,
  },
  divider: {
    width: "50%",
    borderBottomWidth: 2,
    borderBottomColor: Colours.themeOrange,
    alignSelf: "center",
    margin: "5%",
  },
  subMenuList: {},
  subMenuButton: {
    borderWidth: 1,
    borderColor: Colours.themePink,
    padding: 15,
    borderRadius: 15,
    marginVertical: "2%",
    backgroundColor: Colours.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subMenuText: {
    textAlign: "center",
    fontSize: FontSize.s14,
    fontWeight: 600,
    color: Colours.darkDarkGreen,
    flexShrink: 1,
  },

  // BOTTOMSHEET STYLE
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planın yarı saydam olması
  },
  modalContent: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? "11%" : "11%",
    width: windowWidth/ 1,
    backgroundColor: Colours.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  bottomSheetContent: {
    marginVertical: '5%',
  },
  sheetTitle: {
    padding: 10,
    alignSelf: 'center',
    color: Colours.themeBlue,
    fontWeight: 'bold',
    fontSize: FontSize.s20,
    textAlign: 'center',
    lineHeight: 30,
  },
  weekImage: {
    width: '60%',
    height: '20%',
    alignSelf: 'center',
  },
  section: {
    marginVertical: '3%',
  },
  sectionTitle: {
    paddingVertical: 10,
    fontWeight: 'bold',
    fontSize: FontSize.s18,
    color: Colours.themeOrange,
    flexShrink: 1,
  },
  coverLetter: {
    fontWeight: 800,
    color: Colours.black,
    fontSize: FontSize.s14,
    lineHeight: 20,
    paddingBottom: 15,
    flexShrink: 1,
    top: 5,
  },
  listContent: {
    lineHeight: 20,
    fontSize: FontSize.s14,
    fontWeight: 500,
    color: Colours.darkGray,
    marginVertical: 5,
  },
  tableImage: {
    width: windowWidth/ 1.11,
    height: windowHeight/ 2.5,
    alignSelf: 'center',
  },
  tableImage1: {
    width: windowWidth/ 2.8,
    height: windowHeight/ 8,
    alignSelf: 'left',
  },
  tableImage2: {
    width: windowWidth/ 1.5,
    height: windowHeight/5,
    alignSelf: 'center',
  },
  warnText: {
    textAlign: "center",
    fontSize: FontSize.s15,
    fontWeight: 'bold',
    color: Colours.darkDarkGreen,
    flexShrink: 1,
    marginVertical: '3%',
  }
});

export default styles;
