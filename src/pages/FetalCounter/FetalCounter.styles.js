import { StyleSheet, Dimensions, Platform } from "react-native";
import { Colours, FontSize } from "../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "CENTER",
    marginHorizontal: "5%",
  },
  innerContainer: {},
  headerContainer: {
    flex: 0.1,
    marginVertical: "5%",
  },
  bodyContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    backgroundColor: Colours.lightOrange,
    width: windowWidth/ 1.3,
    alignSelf: 'center',
    marginVertical: '5%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timerContainer: {
    backgroundColor: Colours.themePink,
    paddingVertical: 15,
    width: "50%",
    borderRadius: 10,
  },
  counterContainer: {
  },
  timerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth/ 1.3,
  },
  resultContainer: {
    marginVertical: '8%',
    width: windowWidth/ 1.3,
  },
  counterButton: {
    backgroundColor: Colours.themeGreen,
    marginVertical: '15%',
    borderRadius: "50%",
    width: windowWidth / 1.7,
    height: windowHeight / 3.5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.6,
    borderColor: Colours.darkGreen,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  timerButton: {
    backgroundColor: Colours.themePink,
    paddingVertical: 15,
    width: "45%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeText: {
    color: Colours.themeBlue,
    fontWeight: "bold",
    fontSize: FontSize.s24,
    textAlign: "center",
    flexShrink: 1,
  },
  counterText: {
    color: Colours.white,
    fontSize: FontSize.s24,
    textAlign: "center",
    flexShrink: 1,
  },
  timerButtonText: {
    fontSize: FontSize.s14,
    fontWeight: "bold",
    color: Colours.darkGray,
    alignSelf: "center",
    flexShrink: 1,
  },
  headerText: {
    fontSize: FontSize.s18,
    fontWeight: "bold",
    color: Colours.darkGreen,
    alignSelf: "center",
    flexShrink: 1,
  },
  text: {
    fontSize: 16,
    color: Colours.black,
    flexShrink: 1, // Taşmayı önler, uzun metinleri kırar
  },
  resultText: {
    color: Colours.themeRed,
    fontWeight: "bold",
    fontSize: FontSize.s18,
    textAlign: "center",
    flexShrink: 1,
  },
  divider: {
    width: "85%",
    borderBottomWidth: 2,
    borderBottomColor: Colours.themeOrange,
    alignSelf: "center",
    margin: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
});

export default styles;
