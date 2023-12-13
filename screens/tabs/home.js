import React from "react";
import {View,Text, Image, TouchableOpacity} from "react-native"
import IdeaImg from '../../assets/media/idea.png';
import styles from "../../assets/styles/custom";
import Icon from 'react-native-vector-icons/FontAwesome';
import config from "../../utils/config";
import { Button } from "native-base";
const Home = (props) => {
  return (
    <View style={styles.tabView}>
      <View style={styles.homeHeader}>
        <Text style={styles.headerHead}>Dashboard</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcn}><Icon name="bell" size={24}  /></TouchableOpacity>
          <TouchableOpacity style={styles.headerIcn}><Icon name="user" size={24}  /></TouchableOpacity>
        </View>
      </View>
      <View style={styles.dashMain}>
      <Image source={IdeaImg} />
      <Text style={styles.nfound}>You currently have no projects in your list</Text>
      <Button onPress={()=>{props.navigation.navigate("CreateProject")}} style={styles.dashBtn}><Text style={styles.dashBtnTxt}>Create Project</Text></Button>
      </View>
    </View>
  )
}

export default Home