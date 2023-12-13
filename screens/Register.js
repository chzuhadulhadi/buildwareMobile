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
  ActivityIndicator
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import styles from "../assets/styles/custom";
import logo1 from '../assets/media/logo1.png';
import logo2 from '../assets/media/logo2.png';
import config from "../utils/config";
import Dropdown from "../components/dropdown";
import { RegisterFunc, professionBodyFunc, professionTypesFunc } from "../utils/functions";
import { showMessage } from "react-native-flash-message";

const Register = (props) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [professionBody, setProfessionBody] = useState(1);
  const [regNo, setRegNo] = useState();
  const [assocNo, setAssocNo] = useState();
  const [company, setCompany] = useState();
  const [contact, setContact] = useState();
  const [profession,setProfession] = useState(1)
  const [repassword, setRePassword] = useState();
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const keyboardVerticalOffset =  Platform.OS === "ios" ? 100 : 100;
  const [load,setLoad] = useState(false);
  const [accessTokenVal,setAccessToken] = useState('')
  const [refreshTokenVal,setRefreshToken] = useState('')
  const [professionArr,setProfessionArr] = useState([])
  const [professionBodyArr,setProfessionBodyArr] = useState([])

  useEffect(() => {
    const {accessToken,refreshToken} = props.route.params;
    if (accessToken,refreshToken) {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      getProfession(accessToken)
    }
  }, [props]);



const formSubmit = async () => {
  setLoad(true)
  const minPhoneNumberLength = 10;  // Replace with your minimum length requirement
const maxPhoneNumberLength = 15; // Replace with your maximum length requirement
  if (!name || name.trim() === "") {
      showMessage({ type: "danger", message: "Please enter a valid name" });
  } else if (!profession) {
      showMessage({ type: "danger", message: "Invalid profession" });
  } 
  else if (!professionBody) {
    showMessage({ type: "danger", message: "Invalid profession body" });
} 
else if (!regNo || regNo.trim() === "") {
  showMessage({ type: "danger", message: "Invalid registeration number" });
} 
else if (!assocNo || assocNo.trim() === "") {
  showMessage({ type: "danger", message: "Invalid association number" });
} 
else if (!contact || contact === '' || contact.length < minPhoneNumberLength || contact.length > maxPhoneNumberLength) {
    showMessage({ type: "danger", message: "Invalid phone number length" });
}
  else {
    let payload = {
      FirstNames:name.split(' ')[0],
      LastName:name.split(' ')[1] || '',
      "ProfessionTypeCode": profession,
    "ProfessionalBodyCode": professionBody,
    "ProfessionalBodyRegNum": "REG1234",
    "CompanyRegNum": regNo,
    "CompanyAssociation": assocNo,
    "PrimaryContactNumber": contact
    }
    const formSubmit = await RegisterFunc(payload,accessTokenVal,props);
    if(formSubmit){
      showMessage({type:'success',message:'Register successfully'});
      props.navigation.navigate("Login")
    }
  }
  setLoad(false);
};


const getProfession = async(accessToken1)=>{
  let fetchProf = await professionTypesFunc(accessToken1,props);
  if(fetchProf){
    console.log(fetchProf);
    let professArr  = []
    if(Array.isArray(fetchProf) && fetchProf.length > 0){
      for (const item of fetchProf) {
        professArr.push({
          value:item.ProfessionTypeCode,
          label:item.ProfessionTypeDescription
        })
      }
      setProfessionArr([...professArr])
    }
  }
  let fetchProfBody = await professionBodyFunc(accessToken1,props);
  if(fetchProfBody){
    console.log(fetchProfBody);
    let professArr  = []
    if(Array.isArray(fetchProfBody) && fetchProfBody.length > 0){
      for (const item of fetchProfBody) {
        professArr.push({
          value:item.ProfessionalBodyCode,
          label:item.ProfessionalBodyDescription
        })
      }
      setProfessionBodyArr([...professArr])
    }
  }
}





  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.registerTopView}>
       <View style={styles.backView}>
                  <TouchableOpacity style={styles.backIcnView} onPress={()=>{props.navigation.pop()}}>
                  <TextInput.Icon icon={"chevron-left"} color={styles.textColor} onPress={()=>{props.navigation.pop()}} size={styles.backIcnSize} style={styles.backIcn} />
                  <Text style={styles.bckIcnTxt}>  back</Text>
                  </TouchableOpacity>
                  <Text style={styles.headerTxt}>Register Profile</Text>
                  </View>
                  <View style={styles.headerSubTxtView}>
                <Text style={styles.headerSubText}>Please fill in the your profile details below </Text>
                </View> 
      </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            style={styles.mainBack}
          >
            <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
           
            <View>
              {load ? (
            <ActivityIndicator
              size="large"
              color={config.primary}
              style={styles.spinner}
            />
          ) : (
              <View style={styles.inputView}>
                <Text style={styles.inputTitle}>Full Name</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={name}
                        textColor={styles.textColor}
                        onChangeText={(name) => setName(name)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                    <Text style={styles.inputTitle}>Company Name</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={company}
                        textColor={styles.textColor}
                        onChangeText={(company) => setCompany(company)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                    <Text style={styles.inputTitle}>Contact Number</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={contact}
                        textColor={styles.textColor}
                        onChangeText={(contact) => setContact(contact)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder="+27"
                      />
                    </View>
                    <Text style={styles.inputTitle}>Profession</Text>
                   <Dropdown  onValueChange={(value)=>{setProfession(value)}} value={profession} rows={professionArr} />
                    <Text style={styles.inputTitle}>Professionals body associated with</Text>
                    <Dropdown  onValueChange={(value)=>{setProfessionBody(value)}} value={professionBody} rows={professionBodyArr} />
                    <Text style={styles.inputTitle}>Registration number</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={regNo}
                        textColor={styles.textColor}
                        onChangeText={(regNo) => setRegNo(regNo)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                       </View>

                      <Text style={styles.inputTitle}>Association number</Text>
                     
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={assocNo}
                        textColor={styles.textColor}
                        onChangeText={(assocNo) => setAssocNo(assocNo)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                    <Button
            style={styles.lgbtn}
            onPress={() => {
              formSubmit()
            }}
          >
            <Text style={styles.lgbtnTxt}>CONTINUE</Text>
          </Button></View>
          )}
            </View>
            </KeyboardAvoidingView>
            <View style={styles.regBtmView}></View>
          </ScrollView>
      
      
    </TouchableWithoutFeedback>
  </SafeAreaView>







    // <SafeAreaView >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.mainBack}>
    //               <View style={styles.backView}>
    //               <TouchableOpacity style={styles.backIcnView} onPress={()=>{props.navigation.pop()}}>
    //               <TextInput.Icon icon={"chevron-left"} color={styles.textColor} onPress={()=>{props.navigation.pop()}} size={styles.backIcnSize} style={styles.backIcn} />
    //               <Text style={styles.bckIcnTxt}>  back</Text>
    //               </TouchableOpacity>
    //               <Text style={styles.headerTxt}>Register Profile</Text>
    //               </View>
    //               <View style={styles.headerSubTxtView}>
    //             <Text style={styles.headerSubText}>Please fill in the your profile details below </Text>
    //             </View> 
    //             <ScrollView
    //           keyboardShouldPersistTaps="handled"
    //           showsVerticalScrollIndicator={false}
    //           style={{...styles.regMainBack,width:'100%',flex:1}}
    //         >
    //            {load ? (
    //           <ActivityIndicator
    //             size="large"
    //             color={config.primary}
    //             style={styles.spinner}
    //           />
    //         ) : (     
    //           <KeyboardAvoidingView
    //       behavior='padding'
    //       keyboardVerticalOffset={keyboardVerticalOffset}
    //     >
    //                 <Text style={styles.inputTitle}>Full Name</Text>
    //                 <View style={styles.inputContainer}>
    //                   <TextInput
    //                     value={name}
    //                     textColor={styles.textColor}
    //                     onChangeText={(name) => setName(name)}
    //                     style={styles.lgInput}
    //                     placeholderTextColor={styles.textColor}
    //                     placeholder=""
    //                   />
    //                 </View>
    //                 <Text style={styles.inputTitle}>Company Name</Text>
    //                 <View style={styles.inputContainer}>
    //                   <TextInput
    //                     value={company}
    //                     textColor={styles.textColor}
    //                     onChangeText={(company) => setCompany(company)}
    //                     style={styles.lgInput}
    //                     placeholderTextColor={styles.textColor}
    //                     placeholder=""
    //                   />
    //                 </View>
    //                 <Text style={styles.inputTitle}>Contact Number</Text>
    //                 <View style={styles.inputContainer}>
    //                   <TextInput
    //                     value={contact}
    //                     textColor={styles.textColor}
    //                     onChangeText={(contact) => setContact(contact)}
    //                     style={styles.lgInput}
    //                     placeholderTextColor={styles.textColor}
    //                     placeholder="+27"
    //                   />
    //                 </View>
    //                 <Text style={styles.inputTitle}>Profession</Text>
    //                <Dropdown  onValueChange={(value)=>{setProfession(value)}} value={profession} rows={professionArr} />
    //                 <Text style={styles.inputTitle}>Professionals body associated with</Text>
    //                 <Dropdown  onValueChange={(value)=>{setProfessionBody(value)}} value={professionBody} rows={professionBodyArr} />
    //                 <Text style={styles.inputTitle}>Registration number</Text>
    //                 <View style={styles.inputContainer}>
    //                   <TextInput
    //                     value={regNo}
    //                     textColor={styles.textColor}
    //                     onChangeText={(regNo) => setRegNo(regNo)}
    //                     style={styles.lgInput}
    //                     placeholderTextColor={styles.textColor}
    //                     placeholder=""
    //                   />
    //                    </View>

    //                   <Text style={styles.inputTitle}>Association number</Text>
                     
    //                 <View style={styles.inputContainer}>
    //                   <TextInput
    //                     value={assocNo}
    //                     textColor={styles.textColor}
    //                     onChangeText={(assocNo) => setAssocNo(assocNo)}
    //                     style={styles.lgInput}
    //                     placeholderTextColor={styles.textColor}
    //                     placeholder=""
    //                   />
    //                 </View>
    //                 <Button
    //         style={styles.lgbtn}
    //         onPress={() => {
    //           formSubmit()
    //         }}
    //       >
    //         <Text style={styles.lgbtnTxt}>CONTINUE</Text>
    //       </Button>
    //       </KeyboardAvoidingView>)}
    //       <View style={styles.btmView}></View>

    //       </ScrollView>     
   
    //             </View>
    //   </TouchableWithoutFeedback>
    // </SafeAreaView>
  );
}

export default Register;
