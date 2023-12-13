import React, { useEffect, useState } from "react";
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
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "../assets/styles/custom";
import logo1 from '../assets/media/logo1.png';
import logo2 from '../assets/media/logo2.png';
import config, { passwordRegex } from "../utils/config";
import { showMessage } from "react-native-flash-message";
import { chagePassFunc } from "../utils/functions";

const ChangePassword = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 100 : 30;
  const [load,setLoad] = useState(false);
  const [accessTokenVal,setAccessToken] = useState('')
  const [refreshTokenVal,setRefreshToken] = useState('')

  useEffect(() => {
    const {accessToken,refreshToken} = props.route.params;
    if (accessToken,refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    }
  }, [props]);

  const formSubmit = async()=>{
    setLoad(true)
    if(!password || password == '' || !passwordRegex.test(password)){
      showMessage({type:"danger",message:"Invalid Password"})
    }
    else if(password != repassword){
      showMessage({type:"danger",message:"Password and Re-type Password should have to be same"})
    }
    else{
    const formSub = await chagePassFunc(password,accessTokenVal,refreshTokenVal,props);
    if(formSub){
     showMessage({type:'success',message:'Password changed successfully'});
     props.navigation.navigate("Login")
  }
  }
  setLoad(false)
  }


  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainBackV2}>
              <View style={styles.topView}>
                <View>
                  <View style={styles.backView}>
                  <TouchableOpacity style={styles.backIcnView} onPress={()=>{props.navigation.pop()}}>
                  <TextInput.Icon icon={"chevron-left"} color={"white"} onPress={()=>{props.navigation.pop()}} size={styles.backIcnSize} style={styles.backIcn} />
                  <Text style={styles.bckIcnTxt}>  back</Text>
                  </TouchableOpacity>
                  <Text style={styles.headerTxt}>Forgot Password?</Text>
                  </View>
                  {load ? (
              <ActivityIndicator
                size="large"
                color={config.primary}
                style={styles.spinner}
              />
            ) : ( 
                  <View style={styles.inputView}>
                   
                    <Text style={styles.inputTitle}>New Password</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        secureTextEntry={!eye}
                        value={password}
                        textColor={styles.textColor}
                        placeholderTextColor={styles.textColor}
                        placeholder="Must be at least 6 characters"
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
                    <Text style={styles.inputTitle}>Re-type New Password</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        secureTextEntry={!eye2}
                        value={repassword}
                        textColor={styles.textColor}
                        placeholderTextColor={styles.textColor}
                        placeholder="Must be at least 6 characters"
                        onChangeText={(repassword) => setRePassword(repassword)}
                        style={styles.lgInput}
                        right={
                          eye2 ? (
                            <TextInput.Icon
                              size={styles.passIcnSize}
                              style={styles.passIcn}
                              onPress={() => setEye2(!eye2)}
                              icon="eye"
                              color={config.primary}
                            />
                          ) : (
                            <TextInput.Icon
                              size={styles.passIcnSize}
                              style={styles.passIcn}
                              onPress={() => setEye2(!eye2)}
                              icon="eye-off"
                              color={config.primary}
                            />
                          )
                        }
                      />
                    </View>
                  </View>
            )}
                </View>
              </View>
          <View style={styles.footerView}>
            <Button
            style={styles.lgbtn}
            onPress={() => {
              formSubmit()
            }}
          >
            <Text style={styles.lgbtnTxt}>SAVE NEW PASSWORD</Text>
          </Button>
        
                  
                  <View style={styles.footerTxtView}>
                    <Text style={styles.footerTxt}>By continuing, you agree to accept our </Text>
                    <TouchableOpacity>
                      <Text style={styles.footerTxtColor}>Privacy Policy & Terms of Service</Text>
                    </TouchableOpacity>
                  </View>
                </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ChangePassword;
