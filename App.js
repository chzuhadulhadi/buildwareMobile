import { LogBox, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from 'react-native-paper';

import Splash from "./screens/Splash";
import Login from "./screens/Login";
import ForgotPassword from "./screens/FogotPassword";
import Signup from "./screens/Signup";
import OTpVerify from "./screens/OtpVerify";
import Register from "./screens/Register";
import { NativeBaseProvider } from "native-base";
import FlashMessage from "react-native-flash-message";
import ChangePassword from "./screens/ChangePassword";
import Main from "./screens/Main";
import CreateProject from "./screens/CreateProject";


const Stack = createNativeStackNavigator();

const navigationOptions = { headerShown: false };

export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);

  return (
    <NativeBaseProvider>
    <PaperProvider>
    <FlashMessage
          position="top"
          style={{ minHeight: 70, paddingTop: 50 }}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={navigationOptions}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={navigationOptions}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={navigationOptions}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={navigationOptions}
            />
            <Stack.Screen
              name="OtpVerify"
              component={OTpVerify}
              options={navigationOptions}
            />
             <Stack.Screen
              name="Register"
              component={Register}
              options={navigationOptions}
            />
             <Stack.Screen
              name="ChangePassword"
              component={ChangePassword}
              options={navigationOptions}
            />
             <Stack.Screen
              name="Main"
              component={Main}
              options={navigationOptions}
            />
            <Stack.Screen
              name="CreateProject"
              component={CreateProject}
              options={navigationOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
        </NativeBaseProvider>
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
