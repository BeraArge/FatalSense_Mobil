import { StyleSheet, Dimensions } from "react-native";
import { Colours, FontSize } from "../../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    marginHorizontal: "5%",
  },
  innerContainer: {
    flex: 0.9,
    top: 10
  },
  headerContainer: {
    justifyContent: "center",
  },
  bodyContainer: {
    marginVertical: '15%',
  },
  footerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginVertical: '3%',
    marginHorizontal: '4%',
  },
  headerText: {
    fontSize: FontSize.s22,
    fontWeight: "bold",
    color: Colours.darkGreen,
    textAlign: 'center',
  },
  text: {
    fontSize: FontSize.s16,
    fontWeight: "bold",
    color: Colours.darkGreen,
    textAlign: 'flex-start',
    left: 5,
  },
  divider: {
    width: "80%",
    borderBottomWidth: 4,
    borderBottomColor: Colours.themePink,
    margin: '2%',
    alignSelf: 'center',
  },
});

export default styles;
