import {useEffect, useState} from 'react';
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
import BabyCarePage from "./pages/BabyCarePage/BabyCarePage";
import PostpartumPage from "./pages/PostpartumPage/PostpartumPage";
import store from "./redux/store";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LogLevel, OneSignal } from 'react-native-onesignal';
import Constants from "expo-constants";

//onesignal yapılandırılması
// Log seviyesini ayarlayın (geliştirme aşamasında yararlı)
OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// OneSignal'ı başlatın ve App ID'yi initialize fonksiyonuna geçirin
OneSignal.initialize("a4342088-b00b-4a45-8921-a6049cf92ae4");

// Bildirim izinlerini isteyin
OneSignal.Notifications.requestPermission(true);



const Stack = createStackNavigator();

export default function Router() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        const userId = await AsyncStorage.getItem("userId");

        console.log("ROUTER USERTOKEN::::::::",token);
        console.log("ROUTER USERID::::::::::",userId);

        if (token && userId) {
          setInitialRoute("HomePage");
        } else {
          setInitialRoute("LoginPage");
        }
      } catch (error) {
        console.error('Router AsyncStorage verileri alınamadı:', error);
        setInitialRoute("LoginPage");
      }
    };

    getUserData();
  }, []);

   // AsyncStorage verisi yüklenmeden hiçbir şey gösterme
   if (!initialRoute) return null;
  
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={initialRoute}
        >
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="FetalDevPage" component={FetalDevPage} />
          <Stack.Screen name="PersonalInfoForm" component={PersonalInfoForm} />
          <Stack.Screen name="FetalCounter" component={FetalCounter} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="CustomBarChart" component={CustomBarChart} />
          <Stack.Screen name="BabyCarePage" component={BabyCarePage} />
          <Stack.Screen name="PostpartumPage" component={PostpartumPage} />
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
