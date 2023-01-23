import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../components/constant";
export const styles = StyleSheet.create({
  d: {
    width: 17,
    height: 17,
    marginHorizontal: 5,
  },
  count: {
    color: "#fff",
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter-Regular",
  },
  whtsnewtxt: {
    alignSelf: "center",
    paddingLeft: 12,
    fontSize: 14,
    fontWeight: "400",
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  questions: {
    fontSize: 14,
    fontWeight: "400",
    color: "#071B36",
    padding: 10,
  },
  marginten: {
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bordermcq: {
    borderColor: "#D5DEED",
    borderRadius: 10,
    padding: 12,
    borderWidth: 2,
  },
  aligncenter: {
    alignSelf: "center",
  },
  careticon: {
    backgroundColor: "#45B5C0",
    borderRadius: 50 / 2,
    width: 30,
    height: 30,
    padding: 2,
    marginTop: -60,
    marginBottom: 30,
    alignSelf: "center",
    shadowColor: "#000",
    zIndex: 1,
  },
  careticontop: {
    backgroundColor: "#45B5C0",
    borderRadius: 50 / 2,
    width: 30,
    height: 30,
    padding: 3,
    marginTop: -100,
    marginBottom: 70,
    alignSelf: "center",
    shadowColor: "#000",
    zIndex: 99999,
  },
  imgblackstrip: {
    backgroundColor: "#000",
    width: "95%",
    padding: 20,
    marginLeft: 9,
    zIndex: 1,
    marginTop: -40,
    opacity: 0.6,
    height: 20,
  },

  songStyle: {
    marginLeft: 10,
  },
  Progressbarcontainer: {
    width: 350,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ProgressLabeContainer: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 10,
  },
  ProgressLabelTxt: {
    color: "#000",
    marginRight: 20,
    fontFamily: "Inter-Regular",
  },
  MusicController: {
    marginTop: -30,
    alignSelf: "center",
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-between",
  },
  userInfo: {
    justifyContent: "space-between",
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#51668A",
    height: 2,
    borderRadius: 12,
    marginTop: 8,
    marginHorizontal: 5,
  },
  cardOfPosts: {
    marginBottom: 25,
    borderRadius: 10,
    shadowRadius: 10,
    padding: 15,
    marginTop: -10,
  },
  SavePostsContainer: {
    marginBottom: 20,
    borderRadius: 10,
    shadowRadius: 10,
    padding: 15,
  },
  bgtophome: {
    width: "100%",
    resizeMode: "cover",
  },
  imageConatentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    position:'absolute',
    width:'100%',
    marginTop:15
  },
  collectedCoins: {
    borderRadius: 50,
    backgroundColor: "#20324a",
    flexDirection: "row",
    position: "absolute",
    alignSelf: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    marginTop:20
  },
  viewDoccin: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    alignSelf: "center",
    color: "#51668A",
    fontSize: 18,
    fontWeight: "500",
    fontFamily:"Inter-Regular"
  },
triangle: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderTopWidth: 0,
  borderRightWidth: 13,
  borderBottomWidth: 13,
  borderLeftWidth: 13,
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#071B36',
  borderLeftColor: 'transparent',
  transform: [{ rotate: '-90deg'}],
  position:'absolute',
  right:-7
},
darkBlueOnWhatsNew: {
  width: 2,
  height: 20,
  backgroundColor: '#342CE0',
  position:'absolute',
},

loaderStyle: {
  marginVertical: 16,
  alignItems: "center",
  // borderWidth:10
},
wrapper:{
  height:300,
  borderWidth:1,
},

// ---------------------------postsScreen-----------------------------------
PostContainer:{
  padding:10,
  flex:1,
  backgroundColor:'#ecf2f6',
  justifyContent:'center'
},
userDetails:{
  // borderWidth:1,
  paddingVertical:5,
  justifyContent:'space-between',
  flexDirection:'row',
  alignItems:'center'
},
singlePost:{
  padding:10,
  backgroundColor:'#fff',
  borderRadius:6,
},
picContainer:{
  flexDirection:'row',
  alignItems:'center'
},

// ------------------------------------CommentsScreen--------------------------------------------
commentContainer:{
  flex:1,
  backgroundColor:'#ecf2f6',
  padding:15,
  paddingBottom:50
},
UserComments:{
  alignItems:'center',
  flexDirection:'row',
  position:'absolute',
  bottom:0,
  borderTopWidth:1,
  paddingHorizontal:10,
  paddingVertical:5,
  width:Dimensions.get('screen').width,
  justifyContent:'space-between',
  alignItems:'center',
  borderColor:'#ccc',
  backgroundColor:'#ecf2f6',
},
input:{
  // borderWidth:1,
  width:Dimensions.get('screen').width/1.4,
  height:50,
  paddingLeft:10
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
},
NoCommentTexts:{
  fontFamily:'Inter-SemiBold',
  alignSelf:'center',
},

//-------------------------------public Reaction-------------------------------------

socialImages:{
  width:30,
  height:30
},
likedImage :{
  marginLeft:-10, 
  borderColor:'#000',
  width:25,
  height:25,
  borderRadius:50
},
socialCount:{
  paddingRight:20,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'flex-start'
},
publicReactionsContainer:{ 
  flexDirection: 'row',
  marginTop:5
},
socialCountText:{
  paddingLeft:5,
  color:'#51668A',
  fontFamily:"Inter-Regular",
},

//----------------------------------option Modal---------------------
optionModal:{
  width:150,
  backgroundColor:'#fff',
  position:'absolute',
  right:10,
  top:-3,
  borderRadius:5,
  justifyContent:"center",
  // alignItems:'center',
  padding:15,
  zIndex:1,

  shadowColor: 'black',
  shadowOpacity: 0.26,
  shadowOffset: { width: 0, height: 2},
  shadowRadius: 10,
  elevation: 3,
  backgroundColor: 'white'
},
optionList:{
  paddingVertical:7,
  flexDirection:'row'
},
optionListText:{
  color:'#071B36',
  fontFamily:"Inter-Regular",
},
optionListImage:{
  width:15.5,
  height:20.7,
  marginRight:7
},
optionList2:{
  width:21,
  height:16,
  marginRight:7
},
optionList3:{
  width:18,
  height:13,
  marginRight:7
},
optionList4:{
  width:18,
  height:18,
  marginRight:7
},
//--------------------delete confirmation Modal----------------------
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
});
