import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import styles from '../assets/styles/custom';
import logo1 from '../assets/media/logo1.png';
import logo2 from '../assets/media/logo2.png';
import config, { emailRegex } from '../utils/config';
import OTPTextView from 'react-native-otp-textinput';
import { showMessage } from 'react-native-flash-message';
import { ForgPassFunc, verifyOtpFunc } from '../utils/functions';

const OTpVerify = props => {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 30;
  const [otp, setOtp] = useState('');
  const [email,setEmail] = useState('');
  const [item, setItem] = useState(null);
  const [load,setLoad] = useState(false);

  useEffect(() => {
    const {type,email} = props.route.params;
    if (type && email) {
      setItem(type);
      setEmail(email);
    }
  }, [props]);


  const handleOtpChange = (text) => {
    // Concatenate the digits to form the complete OTP
    setOtp((prevOtp) => prevOtp + text);
  };

  const handleKeyPress = (event) => {
    // Handle backspace or delete key press
    if (event.nativeEvent.key === 'Backspace') {
      // Handle text removal here
      setOtp((prevOtp) => prevOtp.slice(0, -1)); // Remove the last character
    }
  };


  const formSubmit = async()=>{
    setLoad(true)
    if(!otp || otp == ''){
      showMessage({type:"danger",message:"Invalid OTP code"})
    }
    else{
    const formSub = await verifyOtpFunc(email,otp,props,item);
    if(formSub){
      let {accessToken,refreshToken} = formSub;
    if(item == "forgot"){
      props.navigation.navigate('ChangePassword',{accessToken,refreshToken});
    }
    else{
    props.navigation.navigate('Register',{accessToken,refreshToken});
    }
  }
  }
  setLoad(false)
  setOtp('')
  }

  const forgPassword = async () => {
    setLoad(true)
    if (!email || email.trim() === '') {
      showMessage({
        type: 'danger',
        message: 'Please enter a valid email address',
      });
    } else if (!emailRegex.test(email)) {
      showMessage({type: 'danger', message: 'Invalid email address format'});
    } else {
      const formSubmit = await ForgPassFunc(email,props);
      if (formSubmit) {
        // Email is valid, proceed to navigation
       // props.navigation.navigate('OtpVerify', {type: 'forgot',email:email});
      }
    }
    setLoad(false)
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainBackV2}>
          <View
            style={{justifyContent: 'space-between', flex: 3, marginTop: '5%'}}>
            <View>
              <View style={styles.backView}>
                <TouchableOpacity
                  style={styles.backIcnView}
                  onPress={() => {
                    props.navigation.pop();
                  }}>
                  <TextInput.Icon
                    icon={'chevron-left'}
                    color={styles.textColor}
                    onPress={() => {
                      props.navigation.pop();
                    }}
                    size={styles.backIcnSize}
                    style={styles.backIcn}
                  />
                  <Text style={styles.bckIcnTxt}> back</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.otpView}>
                <Text style={styles.otpText}>OTP Verification</Text>
                <Text style={styles.otpSubText}>
                  Thank you for registering your email. Please type in the OTP
                  as shared to your email address
                </Text>
                {load ? (
              <ActivityIndicator
                size="large"
                color={config.primary}
                style={styles.spinner}
              />
            ) : ( 
                <OTPTextView
                  handleCellTextChange={handleOtpChange}
                  containerStyle={styles.otpContainer}
                  textInputStyle={styles.otpInput}
                  keyboardType='numeric'
                  inputCount={6}
                  selectionColor={config.primary}
                  tintColor={config.primary}
                  offTintColor={config.primary}
                  onKeyPress={handleKeyPress}
                />)}
                {item == "forgot" &&
                <View style={{...styles.headerSubTxtView, alignSelf: 'center',marginTop:'20%'}}>
                  <Text style={{...styles.headerSubText,fontSize:14}}>OTP not received? </Text>
                  <TouchableOpacity onPress={() => {forgPassword()}}>
                    <Text style={{...styles.headerSubTextColor,marginTop:'27%',fontSize:14}}>RESEND</Text>
                  </TouchableOpacity>
                </View>}
              </View>
            </View>
          </View>
          <View style={styles.footerView}>
            <Button
              style={styles.lgbtn}
              onPress={() => {
                formSubmit()
              }}>
              <Text style={styles.lgbtnTxt}>NEXT</Text>
            </Button>

            <View style={styles.footerTxtView}>
              <Text style={styles.footerTxt}>
                By continuing, you agree to accept our{' '}
              </Text>
              <TouchableOpacity>
                <Text style={styles.footerTxtColor}>
                  Privacy Policy & Terms of Service
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default OTpVerify;
