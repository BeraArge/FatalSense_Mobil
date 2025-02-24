import { StyleSheet, Dimensions } from "react-native";
import { Colours, FontSize } from "../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    marginVertical: '10%',
    width: windowWidth / 1.15,
    height: windowHeight / 1.1,
    alignSelf: 'center',
    paddingVertical: '10%',
    paddingHorizontal: '8%',
    backgroundColor: Colours.white,
    borderWidth: 1,
    borderColor: Colours.lightOrange,
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
  bodyContainer: {

  },
  footerContainer: {
    top: 20,
  },
  questionContainer: {
    flexDirection: 'column',
    marginVertical: '2%',
  },
  divider: {
    width: "80%",
    borderBottomWidth: 4,
    borderBottomColor: Colours.themePink,
    margin: '2%',
  },
  text: {
    fontSize: FontSize.s15,
    fontWeight: "bold",
    color: Colours.darkGreen,
    paddingLeft: 5,
  },
});

export default styles;
