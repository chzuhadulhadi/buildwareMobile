import { Dimensions, Platform, StyleSheet,Appearance } from "react-native";
import config from "../../utils/config";
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const colorScheme = Appearance.getColorScheme();
const styles =  StyleSheet.create({

  mainBack:{
    backgroundColor: colorScheme == 'dark'? "#2B2B2B" : "white",
    height:height,
    width:width,
    paddingLeft:'10%',
    paddingRight:'10%'
  },
  tabView:{
    backgroundColor: colorScheme == 'dark'? "#2B2B2B" : "white",
    height:'100%'
  },
  regMainBack:{
    height:height,
    paddingTop:'10%',
    paddingBottom:'50%'
  },
  logo:{
    alignSelf:'center',
    marginTop:20,
    height:100,
    width:300,
    resizeMode:'contain'
  },
  logoText:{
    alignSelf:'center',
    marginTop:30,
    width:200,
    resizeMode:"contain"
  },
  logoDark:{
    alignSelf:'center',
    marginTop:20,
    height:150,
    width:150,
    marginLeft:15,
    resizeMode:'stretch'
  },
  logoTextDark:{
    alignSelf:'center',
    marginTop:0,
    width:200,
    resizeMode:"contain"
  },
  splashBack:{
    marginTop:'45%'
  },
  inputContainer: {
    overflow: "hidden",
    marginBottom: 25,
    borderRadius: 10,
    height: 41,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor:config.primary,
    backgroundColor:'transparent',
    borderWidth:1,
  },
  lgInput: {
    backgroundColor: "transparent",
    height: 40,
    fontSize: 14,
    borderBottom: "none",
    overflow: "hidden",
    borderColor:config.primary,
    borderWidth:0
  },
  inputTitle: {
    color: colorScheme == 'dark'? "white" : "#2B2B2B",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
    textAlign: 'left'
  },
  lgbtn: {
    backgroundColor: config.primary,
    height: 40,
    borderRadius: 10,
    paddingTop:1,
    marginTop:'5%'
  },
  lgbtnTxt: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12
  },
  otpContainer: {
    flexDirection: "row",
    marginBottom:'5%'  ,
    width:'100%',
    marginLeft:'-15%',
    alignItems:'center',alignSelf:'center'
    
  },
  otpInput: {
    width: 43,
    height: 49,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: "transparent",
    color: colorScheme == 'dark'? "white" : "#2B2B2B",
    borderColor: config.primary,
    borderWidth:2
  },
  btmView:{padding:80},
  regBtmView:{padding:150},

  btmText:{
    color: colorScheme == 'dark'? "white" : "#2B2B2B",
    fontSize:14,textAlign:'center',marginTop:15},
  lgTitle:{ color: colorScheme == 'dark'? "white" : "#2B2B2B", textAlign: 'center', marginTop: '10%', fontSize: 20, fontWeight: 'bold',fontFamily:'Montserrat' },
  subTextView:{display:'flex',flexDirection:'row',alignSelf:'center',fontFamily:'Montserrat'},
  subText:{ textAlign: 'center', color: colorScheme == 'dark'? "white" : "#2B2B2B", fontSize: 14, marginTop: '5%' },
  subTextColor:{ color: "#26C6D6",fontSize:14,paddingTop:'5%' },
  safeView:{ flex: 1 },
  logoView:{ marginTop: '10%' },
  passIcn:{ marginEnd: -10 },
  passIcnSize:20,
  keyboardOffset:Platform.OS === "ios" ? 100 : 30,
  inputView:{ marginTop: '10%' },
  mainBackV2:{backgroundColor:colorScheme == 'dark'? "#2B2B2B" : "white",
  height:height,
  width:width,
  paddingLeft:'10%',
  paddingRight:'10%',display:'flex'},
  topView:{ justifyContent: 'space-between',flex:3, marginTop: '5%'  },
  backView:{display:"flex",flexDirection:'row',marginTop:'5%'},
  backIcnView:{flex:1},
  registerTopView:{backgroundColor:colorScheme == 'dark'? "#2B2B2B" : "white",paddingTop: '5%',paddingLeft:'10%',paddingRight:'10%' },
  backIcn:{paddingTop:20,marginLeft:-50,color:colorScheme == 'dark'? "white" : "#2B2B2B"},
  bckIcnTxt:{color:colorScheme == 'dark'? "white" : "#2B2B2B",fontSize:14,marginTop:14,fontWeight:'500'},
  headerTxt:{ color: colorScheme == 'dark'? "white" : "#2B2B2B", textAlign: 'left',fontSize: 20, fontWeight: 'bold',flex:3,marginLeft:20,paddingTop:8.5 },
  backIcnSize:20,
  footerView:{flex:1.2},
  footerTxtView:{ display: 'flex', flexDirection:'column', alignSelf: 'center' },
  footerTxt:{ textAlign: 'center', color: colorScheme == 'dark'? "white" : "#2B2B2B", fontSize: 12, marginTop: '5%' },
  footerTxtColor:{ color: "#26C6D6", fontSize: 12,textAlign:'center' },
  headerSubTxtView:{display:'flex',flexDirection:'row',alignSelf:'left'},
  headerSubText:{ textAlign: 'left', color: colorScheme == 'dark'? "white" : "#2B2B2B", fontSize: 14, marginTop: '5%' },
  headerSubTextColor:{ color: "#26C6D6",fontSize:14,marginTop: '36%'  },
  otpView:{ marginTop: '25%' },
  otpText:{color:colorScheme == 'dark'? "white" : "#2B2B2B",fontSize:20,textAlign:'center',marginBottom:20,fontWeight:'bold'},
  otpSubText:{color:colorScheme == 'dark'? "white" : "#2B2B2B",fontSize:14,textAlign:'center',marginBottom:50},
  spinner: {
    color: config.secondary,
    height: 200,
    textAlign: "center",
    textAlignVertical: "center",
    fontFamily:'Lato-Light'

  },

textColor:colorScheme == 'dark'? "white" : "#2B2B2B",
homeHeader:{
  display:'flex',
  flexDirection:'row',
  paddingTop:50,
  paddingBottom:30
},
headerHead:{fontWeight:'500',fontSize:24,lineHeight:30,flex:4,textAlign:'center',color: colorScheme == 'dark'? "white" :'black'},
headerRight:{display:'flex',flexDirection:'row',flex:1},
dashMain:{alignItems:'center',justifyContent:'center',height:'65%'},
nfound:{color:config.primary,padding:30,fontSize:16},
headerIcn:{flex:1},
dashBtn:{backgroundColor:config.primary,borderRadius:5,padding:5},
dashBtnTxt:{color:'white'},
headTitle:{textAlign:'center',paddingTop:10,fontSize:20,fontWeight:'500',marginTop:20},
headTab:{display:'flex',flexDirection:'row',paddingTop:40},
headTabSingle:{flex:1,borderColor:'grey'},
headTabTxtColor:{color:config.primary,textDecorationLine:'underline',textAlign:'center',fontSize:16},
headTabTxt:{textAlign:'center',fontSize:16},
formView:{borderTopWidth:1,borderBottomWidth:1,paddingTop:30,paddingBottom:10,borderColor:'grey',marginTop:20},
footerViewModal:{display:'flex',flexDirection:'row',marginTop:40},
footerCancelModal:{flex:2,paddingVertical:10},
footerSuccessModal:{flex:3,backgroundColor:config.primary,padding:10,borderRadius:7},
modalCancelTxt:{color:'grey',textDecorationLine:'underline',textAlign:'center',fontSize:14},
modelSuccessTxt:{color:'white',textAlign:'center',fontWeight:'700',fontSize:14}

  })

export default styles;