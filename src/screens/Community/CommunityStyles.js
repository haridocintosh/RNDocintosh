import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
    headerView:{
        height:55,
        paddingHorizontal:15,
        backgroundColor:'#071B36',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerTitle:{
        flexDirection:'row',
        alignItems:'center',
        flex:1
    },
    headerText:{
        color:'#fff',
        fontFamily:'Inter-SemiBold',
        fontSize:16,
        marginLeft:10,
    },
    bodyView:{
        padding:15,
    },
    recomandedText:{
        fontFamily:'Inter-SemiBold',
        fontSize:16,
        color:'#071B36'
    },
    recomandedUsers:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:15
    },
    recomandedUsersPic:{
        flexDirection:'row',
        alignItems:'center'
    },
    userInfo:{
        marginLeft:10
    },
    UsersProfilePic:{
        width:40,
        height:40,
        borderRadius:50
    },
    hospitalName:{
        fontFamily:'Inter-Regular',
        color:'#071B36'
    },
    groupsText:{
        fontSize:12,
        fontFamily:'Inter-Regular',
        color:'#51668A'
    },
    joinText:{
        fontSize:12,
        fontFamily:'Inter-Regular',
        color:'#2376E5'
    },

    //------------------------Join community----------------------------
    RectangleBgImage:{
      width:Dimensions.get('window').width,
      height:180,
    },
    joinHeaderView:{
      width:Dimensions.get('window').width,
      height:100,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddingHorizontal:15
    },
    communityName:{
      marginTop:-40,
      justifyContent:'space-between',
      flexDirection:'row',
      alignItems:'center',
      padding:15,
    },
    communityNameMembers:{
      color:'#2376E5',
      fontSize:12,
      fontFamily:'Inter-Regular',
    },
    communityNameMembersCount:{
      color:'#51668A',
    },
    
    CommunityAboutProfilePic:{
      position:'absolute',
      bottom:-30,
      left:30,
      width:60,
      height:60, 
      borderRadius:50,
      borderWidth:4,
      borderColor:'#fff',
    },
    communityNameText:{
      color:'#071B36',
      fontSize:16,
      fontFamily:'PlusJakartaSans-Bold',
      marginTop:10
    },
    CommunityTabContainer:{
      backgroundColor:'#F2FAFA',
      height:50,
      marginTop:15,
      paddingHorizontal:15,
      flexDirection:'row',
      alignItems:'center'
    },
    CommunityTabText:{
      color:'#687690',
      fontFamily:'Inter-Regular',
      marginRight:20,
      height:"100%",
      textAlign:'center',
      textAlignVertical:'center',
    },
    CommunityActiveTabText:{
      color:'#687690',
      fontFamily:'Inter-SemiBold',
      color:"#071B36",
      marginRight:20,
      borderBottomWidth:3,
      height:"100%",
      textAlign:'center',
      textAlignVertical:'center',
      borderColor:'#45B5C0'
    },

    UserComments:{
        alignItems:'center',
        position:'absolute',
        bottom:0,
        borderTopWidth:1,
        width:Dimensions.get('window').width,
        borderColor:'#ccc',
        backgroundColor:'#fff',
        justifyContent:'center',
        paddingHorizontal:15
      },
      UserInnerComments:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#ecf2f6',
        borderRadius:50,
        margin:7,
        padding:7,
        flex:1,
        width:Dimensions.get('window').width/1.03,
      },
      input:{
        maxWidth:Dimensions.get('window').width/2,
        height:50,
        marginLeft:10,
      },
      iconsContainer:{
        flexDirection:'row',
      },
      inputCont:{
        flexDirection:'row'
      },
      usersCommentContainer:{
        flexDirection:'row',
        paddingBottom:20,
        justifyContent:'space-between',
        alignItems:'center'
      },
      usersCommentPictureContainer:{
        flexDirection:'row',
      },
      userUsername:{
        fontFamily:'Inter-SemiBold'
      },
      userCommentTexts:{
        fontFamily:'Inter-Regular',
        width:Dimensions.get('window').width/1.3,
        textAlign:'justify'
      },
      NoCommentTexts:{
        fontFamily:'Inter-SemiBold',
        alignSelf:'center',
      },
      //----------------------Threads----------------------------------
    
      ThreadPostUserDetailsContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      ThreadPostUserDetails:{
        flexDirection:'row',
        alignItems:'center',
      },
      ThreadPostUserDetailsTextContainer:{
        marginLeft:10
      },
      ThreadPostPostName:{
        fontFamily:'PlusJakartaSans-Regular',
        color:'#071B36',
      },
      ThreadPostPostSplty:{
        fontFamily:'Inter-Regular',
        color:'#51668A',
        fontSize:12
      },
      ThreadPostPostHospital:{
        fontFamily:'Inter-Regular',
        color:'#2376E5',
        fontSize:12,
      },
      ThreadPostPostJoinMembers:{
        fontFamily:'Inter-Regular',
        color:'#51668A',
        fontSize:12,
        marginLeft:10
      },
      ThreadPostDescriptionContainer:{
      },
      ThreadPostDescription:{
        color:'#51668A',
        fontFamily:'Inter-Regular',
        marginTop:15,
        marginBottom:10
      },
      ThreadPostDescriptionViewAll:{
        color:'#2376E5',
        fontFamily:'Inter-Regular',
      },
      //----------------------Focus Group----------------------------------
    
      FocusPostUserDetailsContainer:{
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
      },
      FocusPostUserDetails:{
        flexDirection:'row',
        alignItems:'center',
      },
      FocusPostUserDetailsTextContainer:{
        marginLeft:10,
      },
      FocusPostPostName:{
        fontFamily:'PlusJakartaSans-Regular',
        color:'#071B36',
      },
      FocusPostPostSplty:{
        fontFamily:'Inter-Regular',
        color:'#2376E5',
        fontSize:12
      },
      FocusPostDescriptionContainer:{
      },
      FocusPostDescription:{
        color:'#51668A',
        fontFamily:'Inter-Regular',
        marginTop:15
      },
      FocusPostDescriptionViewAll:{
        color:'#2376E5',
        fontFamily:'Inter-Regular',
      },
      FocusLive:{
        color:'#fff',
        backgroundColor:'#C90000',
        paddingHorizontal:7,
        borderRadius:5,
        fontFamily:'Inter-Regular',
        marginTop:-15,
        fontSize:10
      },

      ListEmptyComponent:{
        flex:1,
        // backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
      },
      subTitle:{
        fontFamily:"Inter-Regular",
        color:'#071B36'
      },
      Title:{
        fontFamily:"Inter-SemiBold",
        color:'#071B36',
        fontSize:18,
        marginTop:15,
      },
      plusContainer:{
        backgroundColor:'#2C8892',
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        padding:10
    },
// =================================Message Screen=====================================

    headerContainer:{
      height:55,
      backgroundColor:'#071B36',
      paddingHorizontal:10,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row'
    },
    headerTitleText:{
      color:'#fff',
    },
    chatContainer:{
      paddingHorizontal:10,
      marginBottom:60
    },
    OtherChatContainer:{
      flexDirection:'row',
      alignItems:'flex-end',
      marginVertical:10
    },
    OtherChatText:{
      padding:10,
      maxWidth:Dimensions.get('window').width/1.5,
      borderRadius:5,
      backgroundColor:'#F2FAFA',
      marginLeft:5
    },
    OwnChatContainer:{
      justifyContent:'flex-end',
      alignItems:'flex-end',
      flexDirection:'row'
    },
    OwnChatText:{
      flexDirection:'row',
      padding:10,
      maxWidth:Dimensions.get('window').width/1.5,
      borderRadius:5,
      backgroundColor:'#A0C5C5',
      marginRight:5
    },
    ImagePic:{
      borderRadius:50,
      height:40,
      width:40
    },

    // ------------------------- Invite Peers -------------------------
    IPTitle:{
      fontFamily:"Inter-SemiBold",
      color:'#071B36',
      fontSize:18,
    },
    //   ==========================ProfileScreenFollwers========================
    Follwerscontainer: {
      backgroundColor: "#F2FAFA",
      flex: 1,
      paddingHorizontal: 15,
    },
    followerHeader: {
      fontWeight: "600",
      fontSize: 16,
      marginVertical: 5,
      fontFamily: "Inter-Regular",
    },
    followerContainer: {
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
    },
    profileimgfollower: {
      height: 60,
      width: 60,
      marginRight: 15,
      borderRadius:50
    },
    followerLhs: {
      flexDirection: "row",
      alignItems: "center",
    },
    Nodata: {
      textAlign:'center',
      fontSize: 16,
      fontFamily: "PlusJakartaSans-Bold",
    },
    followerNameText: {
      fontSize: 16,
      fontWeight: "500",
      fontFamily: "PlusJakartaSans-Regular",
      color:'#071B36'
    },
    followerSpecialist: {
      fontSize: 12,
      fontWeight: "400",
      color: "#51668A",
      marginTop: 5,
      fontFamily: "Inter-Regular",
    },

    //-----------------------------bottom-shit -------------------

    JCBScontainer:{
      padding:20,
      
    },
    JCBSTitle:{
      color:'#071B36',
      fontSize: 18,
      fontFamily: "PlusJakartaSans-Bold",
    },
    JCBSreportSelectContainer:{
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      height:60,
      borderBottomWidth:1,
      borderBottomColor:'#D5DEED'
    },
    JCBSreportSelect:{
      color:'#071B36',
      fontFamily: "Inter-Regular",
    },
    //--------------------report confirmation Modal----------------------
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.4)'  
  },
  modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
      width: 0,
      height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  textBold:{
      fontFamily:'Inter-SemiBold',
  },
  textNormal:{
      fontFamily:"Inter-Regular",
  },
  buttonsContainer:{
      flexDirection:'row',
  },
  buttonsDesign:{
      borderWidth:1,
      paddingHorizontal:25,
      borderRadius:5,
      paddingVertical:7,
      marginTop:20
  },
  leftButtonsDesign:{
      borderColor:'#1A7078'
  },
  RightButtonsDesign:{
      borderColor:'#1A7078',
      backgroundColor:'#1A7078'
  },
  leftText:{
      color:'#1A7078'
  },
  RightText:{
      color:'#fff'
  },

  // ------------------ About page---------------------------

  CommunityProfilePic:{
    width:60,
    height:60, 
    borderRadius:50,
    borderWidth:4,
    borderColor:'#fff',
  },
  AboutDetailsContainer:{
    marginTop:50,
    padding:15
  },
  AboutDetailsText:{
    fontFamily:"Inter-Regular",
    color:'#071B36',
    marginBottom:15
  }

});