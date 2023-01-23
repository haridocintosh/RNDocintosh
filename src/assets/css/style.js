'use strict';
import {
  StyleSheet,
  StatusBar
} from 'react-native';

module.exports = StyleSheet.create({
  alwaysred: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  slectText: {
    borderRadius: 52,
    borderColor: "#687690",
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    marginTop: 12,
    backgroundColor: "red"
  },
  nmaiSelectContenticon: {
    borderRadius: 52,
    borderColor: "#687690",
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 12,
    marginTop: 12
  },

  mainbox: {

    justifyContent: "center",
    alignItems: "center",

  },
  mainSelectContent: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  forgetmainPara: {
    width: 320,
    textAlign: "center",
    marginTop: 0,
  

  },
  maindDivBanner: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  
  },
  maindDivBannerCnp: {
    paddingHorizontal: 20,
    marginTop: 25,
  
  },
  maindDivBannerForget: {
    paddingHorizontal: 20,
    marginTop: 25,
  
  },
  maindDivBannerforget: {

    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,

  },

  forgetPara: {
    fontSize: 14,
    fontWeight: "400",
    color: "#687690",

  },
  customInputVerifyFull: {
    fontSize: 16,
    color: "#687690",
    height: 48,
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 19,
    borderColor: "#51668A",
    //  borderRadius:8,
    marginVertical: 12,
    paddingLeft: 8,

  },
  customInputVerifyFullMobile: {
    fontSize: 16,
    color: "#687690",
    height: 48,
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 19,
    borderColor: "#51668A",
    //  borderRadius:8,
    marginVertical: 12,
    paddingLeft: 8,

  },
  topImgVerify: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  verifyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#071B36",
    lineHeight: 40,
    fontWeight: "400",
    marginTop: 17,
  },
  verifiactionSubText: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 32,
    marginTop: -8,
  },
  verifiactionInnerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8C97AB',
  },
  InputFieldVerify: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,

  },
  forgetParapaasb: {
    fontSize: 11,
    fontWeight: "400",
    color: "#687690",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2C8892",
    height: 48,
    width: 320,
    lineHeight: 48,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    paddingLeft: 60,
    paddingRight: 80
  },
  searchContainer:{
    paddingHorizontal: 20,
    backgroundColor: "#ecf2f6",
    flex:1,
  },
  ciculemcq: {
    backgroundColor: "#606060",
    height: 75,
    width: 75,
    borderRadius: 50,
  },
  ciculemcqLight: {
    backgroundColor: "#D9D9D9",
    height: 75,
    width: 75,
    borderRadius: 50,

  },
  manicrcule:{
    position:"relative"
  },
  ciculemcqLine:{
position:"absolute",
bottom:-34,
left:38,
transform: [{ translateX: 0 }],
height:35,
width:2,
backgroundColor:"#606060",
zIndex: 122,
  },
  mainmcqArea: {
    paddingBottom:30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
justifyContent:"space-evenly"

  },
  mainmcqAreaLight:{
    paddingBottom:30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
justifyContent:"space-evenly"
  },
  mcqheadtext:{
    fontSize:14,
    color:"##212121",
    fontWeight:"600",
  },
  mcqpara:{
    fontSize:12,
    color:"#8A8A8A",
  },
  buttomrmcq:{
fontSize:12,
paddingHorizontal:12,
paddingVertical:3,
backgroundColor:"#606060",


  },
  buttomrmcqLight:{
    fontSize:12,
    paddingHorizontal:12,
    paddingVertical:3,
    backgroundColor:"#D9D9D9",
    
    
      },
  buttomrmcqText:{
    fontSize:12,
    color:"#fff"
  },
  mainDivBannerMoble: {
  
    paddingVertical:156,
      height:"100%",

  },
  mainContentLogin:{
    paddingHorizontal:25,
    
  },
  subDivBannerMoble: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    height:"80%",
  
    
  },
  logMainText:{
    fontSize:24,
    color:"#071B36",
    fontWeight:"700",
    textAlign:"center",
   // fontFamily:"Plus-Jakarta-Sans"
  },
  logMainPara:{
    fontSize:16,
    color:"#51668A",
    fontWeight:"400",
    textAlign:"center"
  },
  rasgisterSpecility:
        { display:"flex" ,
        flexDirection:"row",
        alignItems:'center',
        marginTop:12,
      },
      selectInterestbg:{
      borderColor:"#45B5C0",
      borderWidth:1,
      borderRadius:30,
      padding:10,
      margin:4,
      backgroundColor:"#F6FBFC"
    },
    selectInterestbgtxt:{
      paddingRight:12,
      shadowColor: '#171717',
      color:"#071B36",
      fontSize:14,
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    
      selectInterestNbg:{
        borderColor:"#D5DEED",
        borderWidth:1,
        borderRadius:30,
        padding:10,
        margin:4
      },
      selectInterestNonbgtxt:{
        paddingRight:12,
        shadowColor: '#171717',
        color:"#51668A",
        fontSize:14,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      invitePeersHeadTxt:{
        color:"#071B36",
        fontWeight:"600",
        fontSize:16,
        fontFamily:"PlusJakartaSans-Bold",
        marginRight:10
      },
      PeersHeadlistTxt:{
        color:"#071B36",
        fontWeight:"600",
        fontSize:18,
      },
      PeersmaniList:{
      marginTop:16,
      },
      peersmaniListArea:{
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"row",
        borderColor:"#D5DEED",
        borderBottomWidth:1,
        paddingVertical:12
      },
      peersSubiListArea:{
        display:"flex",
        flexDirection:"row",             
      },
      peerListcontent:{
        paddingLeft:12
      },
      peersubtext:{
        color:"#071B36",
        fontWeight:"600",
        fontSize:16, 
      },
      peersubtextpara:{
        color:"#51668A",
        fontWeight:"400",
        fontSize:14, 
        lineHeight:18
      },
      selectAllListContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:15,
      },
      searchContactContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        flex:1
      },
      searchTextInput:{
        flex:1,
        paddingLeft:10,
        fontSize:18,
        fontFamily:"PlusJakartaSans-Regular",
        color:'#141414'
      },
      selectAllList:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
      },
    
      imageBannerc:{
        position:"relative",
        height:150,
       
      },
      imgroundedCommunity:{
        position:"absolute",
        bottom:0,
        left:20,
      },
      boxWithShadowCommunity: {
        shadowOpacity: 0.5,
        shadowRadius: 28.84,
        elevation: 10,
        width:"100%",
        shadowColor:"#51668A",
        backgroundColor:'#fff',
        borderRadius:8,
        paddingHorizontal:12,
        paddingVertical:12,
        marginVertical:12,
        zIndex:1
        
    },
    boxSubWithShadowCommunity:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      zIndex:1
    },
    peersubtextwcIcon:{
      color:"#2376E5",
      paddingLeft:6
    },
    profilComDtls:{
    width:48,
    height:48,
    },
    verifyComDtls:{
      width:14,
      height:14,
      marginLeft:6
    },
    profilComDtlsecond:{
      width:56,
      height:56,
      },
      usertextCommunity:{
      display:"flex",
      flexDirection:"row",
      marginTop:7
    },
    progress:{
     display:"flex",
     justifyContent:"space-between",
     flexDirection:"row",
     alignItems:"center",
     marginTop:-8,
     width:"100%"
    },
    progressBar: {
      backgroundColor: 'purple',
      height: 30,
      borderRadius: 15,
    },
    mainBannerdCommunityd:{
      paddingHorizontal:20,
      marginTop:16
    },
    communutyaboutPara:{
      fontSize:14,
      fontWeight:"400",
      color:"#212121"
    },
    communutyaboutParat:{
      fontSize:14,
      fontWeight:"400",
      color:"#212121",
      marginTop:20
    },
    videotp:{
      marginTop:23
    },
    video:{
      alignSelf: 'center',
      width: "100%",
      height: 200,
    },
    Videomain:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-between",
     paddingTop:10,
    },

    videof:{
      width: 98,
      height: 98,
      backgroundColor:"grey"
    },
    tinyLogo:{
      width:30,
      height:30
    },
    tabBar: {
      flexDirection: 'row',
      // paddingVertical:0,
      // borderWidth:1,
      backgroundColor:'#F2FAFA'
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical:20,
      // borderBottomWidth:2
    },
    headerContainer:{
      backgroundColor:'#071B36',
      height:57,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:15
    },
    communitySubDiv:{
      marginTop:15,
      flexDirection:'row',justifyContent:'space-between',alignItems:'center'
    },
    doctorListContent:{
      marginLeft:5
    },
    communittysubtxt:{
      marginTop:3,
      color:'#51668A',
      fontSize:12
    },

});