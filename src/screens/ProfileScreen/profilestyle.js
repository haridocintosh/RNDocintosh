import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../components/constant";
export const styles = StyleSheet.create({
  coins: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 17,
    color: "#fff",
    fontFamily: "Inter-Regular",
  },
  ScoreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#20324A",
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 7,
    marginRight: 25,
  },
  scoreImg: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  profilePicContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileScreenimg: {
    borderColor: "#DCE0E8",
    borderWidth: 5,
    borderRadius: 50,
    width: 72,
    height: 72,
  },
  profileDetails: {
    marginLeft: 15,
  },
  profilescreenName: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-Bold",
  },
  profileDesignationpro: {
    fontSize: 14,
    fontWeight: "400",
    color: "#51668a",
    width: 250,
    fontFamily: "Inter-Regular",
  },
  UserDataConatiner: {
    flexDirection: "row",
    backgroundColor: "#F2FAFA",
    height: 42,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  UserDataName: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter-Regular",
    color: "#000",
  },
  UserDataNameCont: {
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: "#45B5C0",
    justifyContent: "center",
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
  },
  followerSpecialist: {
    fontSize: 12,
    fontWeight: "400",
    color: "#51668A",
    marginTop: 5,
    fontFamily: "Inter-Regular",
  },
 
  // ==============================Profilescreen =================================
  box1: {
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    width: 150,
    marginLeft: 20,
    alignSelf: "center",
  },
  box2: {
    backgroundColor: "#FFF",
    marginLeft: 50,
    width: 150,
    alignItems: "center",
    height: 50,
  },

  cardlg: {
    height: 400,
    marginBottom: 16,
    borderRadius: 20 / 2,
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
  plusthree: {
    fontSize: 18,
    borderRadius: 50 / 2,
    marginTop: -60,
    marginBottom: 30,
    alignSelf: "center",
    zIndex: 1,
  },
  container: {
    width: 200,
    display: "flex",
    backgroundColor: "#ecf0f1",
  },
  

 
  profileimg: {
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 10,
  },
  
  profileName: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Bold",
  },
  profileDesignation: {
    fontSize: 14,
    fontWeight: "400",
    color: "#51668a",
    fontFamily: "Inter-Regular",
  },
  dot: {
    borderStyle: "solid",
    borderWidth: 2,
    height: 2,
    backgroundColor: "#000",
    borderRadius: 12,
    marginTop: 6,
    marginLeft: 10,
    marginRight: 5,
  },
  postUserDetils: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postUserDetilsLhs: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:"space-between"
  },
  paratxt: {
    paddingTop: 10,
    paddingBottom: 12,
    color: "#51668A",
    fontFamily:"Inter-Regular",
  },
  containerfollowing:{
    backgroundColor:"#F2FAFA",
    flex:1,
    paddingHorizontal:15
},

//-------------------------profilrScreen post------------------------------
cardOfPosts: {
  marginBottom: 25,
  borderRadius: 10,
  shadowRadius: 10,
  padding: 15,
  // marginTop: -10,
},
userInfo: {
  justifyContent: "space-between",
  paddingVertical: 10,
  flexDirection: "row",
  alignItems: "center",
},
});
