import React, { useEffect } from 'react';
import {Image, View,Appearance} from 'react-native';
import styles from '../assets/styles/custom.js';
import logo1 from '../assets/media/logo1.png';
import logo2 from '../assets/media/logo2.png';
import logo21 from '../assets/media/logo21.png';
import logo12 from '../assets/media/logo12.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = props => {
  const colorScheme = Appearance.getColorScheme();


  useEffect(()=>{
    setTimeout(()=>{
      checkLogin()
      },3000)
  },[])

  const checkLogin = async()=>{
    let isLoggedIn = await AsyncStorage.getItem('is_logged_in');
    if(isLoggedIn){
      props.navigation.navigate("Main")
    }
    else{
      props.navigation.replace("Login")
    }
  }
  return (
    <View style={styles.mainBack}>
      <View style={styles.splashBack}>
      <Image source={colorScheme == 'dark'? logo1 : logo12} style={colorScheme == 'dark'? styles.logo: styles.logoDark} />
                <Image source={colorScheme == 'dark'? logo2 : logo21} style={colorScheme == 'dark'? styles.logoText: styles.logoTextDark} />
             </View>
    </View>
  );
};

export default Splash;
