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
    width: windowWidth / 1.15,
    height: windowHeight / 1.6,
    justifyContent: 'space-around',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
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
  logoContainer: {
    //backgroundColor: 'pink'
  },
  inputContainer: {
    //backgroundColor: 'red',
    marginHorizontal: '3%',
  },
  buttonContainer: {
    //backgroundColor: 'blue'
  },
  headerText: {
    fontSize: FontSize.s24,
    fontWeight: "bold",
    color: Colours.darkGreen,
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordContainer: {

  },
  passwordText: {
    fontSize: FontSize.s14,
    fontWeight: "bold",
    color: Colours.darkGreen,
    margin: '2%',
    textAlign: 'right',
    textDecorationLine: 'underline'
  },
});

export default styles;
