import { StyleSheet, Dimensions } from "react-native";
import { Colours, FontSize } from "../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    //alignItems: "center",
    marginHorizontal: "5%",
  },
  innerContainer: {
    flex: 0.89,
    top: 10
  },
  headerContainer: {
    flex: 0.08,
    backgroundColor: Colours.darkWhite,
    justifyContent: "center",
    paddingHorizontal: 18,
    borderRadius: 28,
    borderWidth: 3,
    borderBlockColor: Colours.themePink,
    borderBlockEndColor: Colours.themePink,
    borderEndColor: Colours.themePink,
    borderStartColor: Colours.themePink,
  },
  bodyContainer: {
    flex: 0.8,
    justifyContent: "center",
    top: 20,
  },
  footerContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  firstContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    zIndex: 0,
    top: "7%",
  },
  secondContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 1,
    backgroundColor: Colours.white,
    borderRadius: "50%",
    width: "28%",
    height: "18.5%",
  },
  thirdContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    zIndex: 0,
    bottom: "10%",
  },
  menuButton: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: Colours.themePink,
    borderRadius: 15,
    width: windowWidth / 2.4,
    height: windowHeight / 3.25,
    backgroundColor: Colours.white,
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: FontSize.s18,
    fontWeight: "bold",
    color: Colours.darkGreen,
  },
  titleText: {
    fontSize: FontSize.s16,
    fontWeight: "bold",
    color: Colours.themeBlue,
    textAlign: "center",
    position: 'absolute',
    alignSelf: 'center',
    bottom: '8%',
  },
  menuIcon: {
    width: '80%',
    height:'60%',
    alignSelf: 'center'
  },
  divider: {
    width: "80%",
    borderBottomWidth: 4,
    borderBottomColor: Colours.themePink,
    margin: '2%',
  },
});

export default styles;
