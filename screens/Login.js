import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  Appearance
} from "react-native";
import styles from "../assets/styles/custom";
import logo1 from '../assets/media/logo1.png';
import logo2 from '../assets/media/logo2.png';
import logo21 from '../assets/media/logo21.png';
import logo12 from '../assets/media/logo12.png';

import { Button, TextInput } from "react-native-paper";
import config, { emailRegex } from "../utils/config";
import { LoginFunc } from "../utils/functions";
import { showMessage } from "react-native-flash-message";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eye, setEye] = useState(false);
  const keyboardVerticalOffset = styles.keyboardOffset;
  const [load,setLoad] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  const submitForm = async()=>{
    setLoad(true)
    if(!email || !password || !emailRegex.test(email)){
      showMessage({type:"danger",message:"Invalid email/password"});
    }
    else{
    const formSub = await LoginFunc(email,password,props);
    }
    setLoad(false)
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              style={styles.mainBack}
            >
              <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
              <View style={styles.logoView}>
                <Image source={colorScheme == 'dark'? logo1 : logo12} style={colorScheme == 'dark'? styles.logo: styles.logoDark} />
                <Image source={colorScheme == 'dark'? logo2 : logo21} style={colorScheme == 'dark'? styles.logoText: styles.logoTextDark} />
              </View>
              <View>
                <Text style={styles.lgTitle}>Log In</Text>
                <View style={styles.subTextView}>
                <Text style={styles.subText}>Don't have an account? </Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("Signup")}}><Text style={styles.subTextColor}>Register</Text></TouchableOpacity>
                </View>
                {load ? (
              <ActivityIndicator
                size="large"
                color={config.primary}
                style={styles.spinner}
              />
            ) : (
                <View style={styles.inputView}>
                  <Text style={styles.inputTitle}>Email</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      value={email}
                      textColor={styles.textColor}
                      onChangeText={(email) => setEmail(email)}
                      style={styles.lgInput}
                      placeholderTextColor={styles.textColor}
                      placeholder="email@address.com"
                    />
                  </View>
                  <Text style={styles.inputTitle}>Password</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      secureTextEntry={!eye}
                      value={password}
                      textColor={styles.textColor}
                      placeholderTextColor={styles.textColor}
                      placeholder="Must be atleast 6 characters"
                      onChangeText={(password) => setPassword(password)}
                      style={styles.lgInput}
                      right={
                        eye ? (
                          <TextInput.Icon
                            size={styles.passIcnSize}
                            style={styles.passIcn}
                            onPress={() => setEye(!eye)}
                            icon="eye"
                            color={config.primary}
                          />
                        ) : (
                          <TextInput.Icon
                            size={styles.passIcnSize}
                            style={styles.passIcn}
                            onPress={() => setEye(!eye)}
                            icon="eye-off"
                            color={config.primary}
                          />
                        )
                      }
                    />
                  </View>
                  <Button
                style={styles.lgbtn}
                onPress={() => {
                  submitForm();
                }}
              >
                <Text style={styles.lgbtnTxt}>LOG IN</Text>
              </Button>
              <TouchableOpacity onPress={()=>{props.navigation.navigate("ForgotPassword")}}><Text style={styles.btmText}>Forgot Password?</Text></TouchableOpacity>
                </View>
            )}
              </View>
              </KeyboardAvoidingView>
              <View style={styles.btmView}></View>
            </ScrollView>
        
        
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default Login;
