import React, {useState} from 'react';
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
import config, {emailRegex} from '../utils/config';
import {showMessage} from 'react-native-flash-message';
import {ForgPassFunc} from '../utils/functions';

const ForgotPassword = props => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repassword, setRePassword] = useState();
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 30;
  const [load,setLoad] = useState(false);

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
        props.navigation.navigate('OtpVerify', {type: 'forgot',email:email});
      }
    }
    setLoad(false)
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainBackV2}>
          <View style={styles.topView}>
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
                <Text style={styles.inputTitle}>Email</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    value={email}
                    textColor={styles.textColor}
                    onChangeText={email => setEmail(email)}
                    style={styles.lgInput}
                    placeholderTextcolor={styles.textColor}
                    placeholder="email@address.com"
                  />
                </View>
              </View>)}
            </View>
          </View>
          <View style={styles.footerView}>
            <Button
              style={styles.lgbtn}
              onPress={() => {
                forgPassword();
              }}>
              <Text style={styles.lgbtnTxt}>SEND EMAIL</Text>
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

export default ForgotPassword;
