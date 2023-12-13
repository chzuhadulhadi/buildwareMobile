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

const CreateProject = (props) => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [budget, setBudget] = useState();
  const [projDate, setProjDate] = useState();
  const [deadline, setDeadline] = useState();
  const keyboardVerticalOffset =  Platform.OS === "ios" ? 100 : 100;
  const [load,setLoad] = useState(false);

  return (
    <SafeAreaView style={styles.safeView}>
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
           <Text style={styles.headTitle}>Create Project</Text>
           <View style={styles.headTab}> 
            <TouchableOpacity style={{...styles.headTabSingle,borderRightWidth:1}}><Text style={styles.headTabTxtColor}>Project info</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.headTabSingle}><Text style={styles.headTabTxt}>Users</Text>
</TouchableOpacity>
           </View>
            <View>
              {load ? (
            <ActivityIndicator
              size="large"
              color={config.primary}
              style={styles.spinner}
            />
          ) : (
              <View style={styles.formView}>
                <Text style={styles.inputTitle}>Project Name</Text>
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
                    <Text style={styles.inputTitle}>Site Address</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={address}
                        textColor={styles.textColor}
                        onChangeText={(address) => setAddress(address)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                    <Text style={styles.inputTitle}>Project Description</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={description}
                        textColor={styles.textColor}
                        onChangeText={(description) => setDescription(description)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                  <Text style={styles.inputTitle}>Project Budget</Text>
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={budget}
                        textColor={styles.textColor}
                        onChangeText={(budget) => setBudget(budget)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                       </View>

                      <Text style={styles.inputTitle}>Project Start Date</Text>
                     
                    <View style={styles.inputContainer}>
                      <TextInput
                        value={projDate}
                        textColor={styles.textColor}
                        onChangeText={(projDate) => setProjDate(projDate)}
                        style={styles.lgInput}
                        placeholderTextColor={styles.textColor}
                        placeholder=""
                      />
                    </View>
                    <Text style={styles.inputTitle}>Project Deadline</Text>
                     
                     <View style={styles.inputContainer}>
                       <TextInput
                         value={deadline}
                         textColor={styles.textColor}
                         onChangeText={(deadline) => setDeadline(deadline)}
                         style={styles.lgInput}
                         placeholderTextColor={styles.textColor}
                         placeholder=""
                       />
                     </View>
                    </View>
          )}
            </View>
            </KeyboardAvoidingView>
            <View style={styles.footerViewModal}>
             <TouchableOpacity onPress={()=>{props.navigation.pop()}} style={styles.footerCancelModal}><Text style={styles.modalCancelTxt}>Cancel</Text></TouchableOpacity>
             <TouchableOpacity  style={styles.footerSuccessModal}><Text style={styles.modelSuccessTxt}>SAVE</Text></TouchableOpacity>

            </View>
            
            <View style={styles.regBtmView}></View>
          </ScrollView>
      
      
    </TouchableWithoutFeedback>
  </SafeAreaView>



  );
}

export default CreateProject;
