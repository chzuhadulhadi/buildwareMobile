import axios from "axios";
import {
  showMessage
} from "react-native-flash-message";
import config from "./config";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const LoginFunc = async (email, password, props) => {
  try {
    const loginObj = await axios.post(`${config.apiUrl}user/sign-in`, {
      emailAddress: email,
      password,
    });
    let {
      status,data
    } = loginObj;
    if (status && status == 200) {
      await AsyncStorage.setItem('user',JSON.stringify(data));
      await AsyncStorage.setItem('is_logged_in','true');
      showMessage({
        type: "success",
        message: "Login Success"
      })
      props.navigation.navigate("Main")
    } else {
      showMessage({
        type: "danger",
        message: "Invalid credentials"
      })
    }
    return loginObj;
  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return null;
  }
}

export const ForgPassFunc = async (email, props) => {
  try {
    const url = `${config.apiUrl}user/forgot-password`;
    const data = email;
    const forgObj = await axios.post(
      url,
      data, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    let {
      status
    } = forgObj;
    if (status && status == 200) {
      return true;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}

export const verifyOtpFunc = async (email, otp, props,item) => {
  try {
    console.log(otp)
    let url = `${config.apiUrl}`;
    if(item == 'forgot'){
      url += `user/verify-recovery-otp`;
    }
    else{
      url += `user/verify-signup-otp`;
    }
    const forgObj = await axios.post(`${url}`, {
      "emailAddress": email,
      "otp": `${otp}`
    });
    console.log(forgObj)
    let {
      status,data
    } = forgObj;
    if (status && status == 200) {
      return {accessToken:data.accessToken,refreshToken:data.refreshToken};
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    console.log(error)
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}


export const chagePassFunc = async(password,accessTokenVal,refreshTokenVal,props) => {
  try {
    let url = `${config.apiUrl}user/update-password`;
    const forgObj = await axios.post(`${url}`, {
      "session":{
      "accessToken": accessTokenVal,
      "refreshToken": refreshTokenVal},
      "password":password
    });
    console.log(forgObj)
    let {
      status,data
    } = forgObj;
    if (status && status == 200) {
      return true;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    console.log(error)
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}


export const SignupFunc = async (email,password, props) => {
  try {
    const forgObj = await axios.post(`${config.apiUrl}user/sign-up`, {
      emailAddress: email,
      password,
    });
    let {
      status
    } = forgObj;
    if (status && status == 200) {
      return true;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}


export const RegisterFunc = async (payload,accessToken, props) => {
  try {
    console.log(payload)
    const forgObj = await axios.post(`${config.apiUrl}secure/entity/update`, {
     ...payload
    },{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let {
      status
    } = forgObj;
    if (status && status == 200) {
      return true;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}



export const professionTypesFunc = async (accessToken, props) => {
  try {
    const forgObj = await axios.get(`${config.apiUrl}secure/professional-body`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let {
      status,data
    } = forgObj;
    if (status && status == 200) {
      return data;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}


export const professionBodyFunc = async (accessToken, props) => {
  try {
    const forgObj = await axios.get(`${config.apiUrl}secure/profession`,{
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let {
      status,data
    } = forgObj;
    if (status && status == 200) {
      return data;
    } else {
      showMessage({
        type: "danger",
        message: "Something went wrong, Please try again"
      })
      return false;
    }

  } catch (error) {
    showMessage({
      type: "danger",
      message: error.message
    })
    return false;
  }
}