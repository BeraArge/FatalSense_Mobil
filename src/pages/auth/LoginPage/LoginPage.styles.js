import { StyleSheet, Dimensions } from "react-native";
import { Colours, FontSize } from "../../../constants/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: windowWidth / 1.2,
    height: windowHeight / 1.8,
    justifyContent: 'space-around',
    backgroundColor: Colours.darkWhite,
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
  logoContainer: {
    //backgroundColor: 'pink'
  },
  inputContainer: {
    //backgroundColor: 'red',
  },
  buttonContainer: {
    //backgroundColor: 'blue'
  },
});

export default styles;
