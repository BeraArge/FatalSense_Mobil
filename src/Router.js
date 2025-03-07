import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/auth/LoginPage/LoginPage";
import FetalDevPage from "./pages/FetalDevPage/FetalDevPage";
import PersonalInfoForm from "./pages/PersonalInfoForm/PersonalInfoForm";
import FetalCounter from "./pages/FetalCounter/FetalCounter";
import UpdatePassword from "./pages/auth/UpdatePassword/UpdatePassword";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import CustomBarChart from "./components/CustomBarChart";
import store from "./redux/store";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="LoginPage"
        >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="FetalDevPage" component={FetalDevPage} />
          <Stack.Screen name="PersonalInfoForm" component={PersonalInfoForm} />
          <Stack.Screen name="FetalCounter" component={FetalCounter} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="CustomBarChart" component={CustomBarChart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
