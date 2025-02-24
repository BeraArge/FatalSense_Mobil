import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import FetalDevPage from './pages/FetalDevPage/FetalDevPage';
import PersonalInfoForm from './pages/PersonalInfoForm/PersonalInfoForm';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="PersonalInfoForm">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="FetalDevPage" component={FetalDevPage} />
        <Stack.Screen name="PersonalInfoForm" component={PersonalInfoForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
