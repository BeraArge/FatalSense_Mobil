import { StyleSheet, Dimensions } from "react-native";
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
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
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
    marginBottom: 5,
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
  },
});

export default styles;
