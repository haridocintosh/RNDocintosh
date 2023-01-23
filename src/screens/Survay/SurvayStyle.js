import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  // --------------------------------------Survay Page-------------------------------------------
  line: {
    borderWidth: 1,
    borderColor: "#D5DEED",
    marginTop: 17,
  },
  listitemtxt: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
  listview: {
    alignSelf: "flex-end",
    zIndex: 1,
    marginTop: -15,
  },

  doccoin: {
    backgroundColor: "#45B5C00D",
    width: 77,
    height: 34,
    borderRadius: 40 / 2,
    borderColor: "#45B5C0",
    borderWidth: 1,
    marginRight: 16,
  },
  incompletebg: {
    borderRadius: 20,
    //  backgroundColor:'#FFD6D6',
    width: 84,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  completebg: {
    borderRadius: 20,
    //  backgroundColor:'#B0DBCC',
    width: 84,
    height: 25,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  d: {
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  CartStyle: {
    borderRadius: 10,
    padding: 15,
  },
  ExpiringContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completeText: { fontSize: 12, fontWeight: "400" },
  ExpiringText: {
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    marginLeft: 5,
    fontFamily: "Inter-SemiBold",
  },
  survatTitle: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
    fontFamily: "PlusJakartaSans-Bold",
  },
  HowManyQuetions: { marginHorizontal: 10, fontFamily: "Inter-Regular" },
  miniContainer: { flexDirection: "row", alignItems: "center" },
  deviderLine: { color: "#D5DEED", marginRight: 10 },
  ParticipantsText: { marginHorizontal: 10, fontFamily: "Inter-Regular" },
  ScoreContainer: { flexDirection: "row", marginTop: 16 },

  //   ---------------------------------------------RadioMCQ------------------------------------------

  count: {
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
    marginRight: 10,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 10 / 2,
    shadowOffset: 0.4,
    shadowOpacity: 0.4,
    shadowColor: "#D5DEED",
    elevation: 3,
  },
  //   OutOff: {
  //     fontSize: 20,
  //     fontWeight: "700",
  //   },
  //   OutOffTotal: {
  //     fontSize: 20,
  //   },
  //   NexrPrevIcons: {
  //     flexDirection: "row",
  //   },
  //   TopScoreContainer: {
  //     justifyContent: "space-between",
  //     flexDirection: "row",
  //     marginVertical: 15,
  //   },
  Progressbar: {
    width: "100%",
    borderRadius: 7,
    height: 6,
  },
  SurvayOptionsSelect: {
    backgroundColor: "rgba(113, 196, 205, 0.6)",
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#D5DEED",
    borderWidth: 1,
  },
  SurvayOptionsUnselect: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 15,
    borderColor: "#D5DEED",
    borderWidth: 1,
  },
  optionSeriel: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "400",
    color: "#51668A",
  },

  //   --------------------------ScratchOffer----------------------------
  Scratchcontainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    borderWidth: 1,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 1,
    alignItems: "center",
    // justifyContent:'center'
  },
  ScratchTopImage: {
    width: 235,
    height: 235,
    borderRadius: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  ScratchCard: {
    top: 150,
    position: "relative",
    // zIndex:2,
    alignSelf: "center",
  },
  ScratchBottomOffer: {
    width: 235,
    height: 235,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
    position: "relative",
  },
  coupan: {
    backgroundColor: "#F2FAFA",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#D5DEED",
    justifyContent: "space-between",
  },
  coupanCode: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
  },
  contentContainer: {
    height: 200,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
  },
  ScratchOffertankyouCelebration: {
    position: "absolute",
    height: 95,
    width: Dimensions.get("window").width / 1.67,
  },
  wonMoney: {
    fontSize: 24,
    fontWeight: "600",
  },
  tabToWin: {
    backgroundColor: "#213E64",
    width: "100%",
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    height: 40,
    textAlignVertical: "center",
    fontFamily: "PlusJakartaSans-Bold",
  },
  SheetContentContainer: {
    padding: 15,
  },
  beforeCratchText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  CongratsText: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "PlusJakartaSans-Bold",
  },
  AboutVoucherText: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    fontFamily: "PlusJakartaSans-Bold",
  },
  DetailsVoucherText: {
    color: "#51668A",
    fontSize: 14,
    marginTop: 10,
    fontFamily: "Inter-Regular",
  },
  TermsAndCondVoucher: {
    color: "#071B36",
    fontFamily: "Inter-Regular",
  },
  termsCondText: {
    color: "#2376E5",
    fontFamily: "Inter-SemiBold",
    fontWeight:'600',
    padding:10
  },
  requireSteps: {
    fontFamily: "Inter-Regular",
    fontWeight:'600',
  },
  requireStepsTitle: {
    fontFamily: "Inter-SemiBold",
    fontWeight:'600',
    fontSize:16
  },
  TermsAndCondContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center',
    marginTop: 10,
  },

  //   ---------------------------------------SurvayMCQ-----------------------------------------
  SurvayOutOff: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter-SemiBold",
  },
  OutOffTotal: {
    fontSize: 20,
    fontFamily: "Inter-Regular",
  },
  NexrPrevIcons: {
    flexDirection: "row",
  },
  TopScoreContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
  },
  Progressbar: {
    width: "100%",
    borderRadius: 7,
    height: 6,
  },
  SurvayQuestion: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: "600",
    color: "#071B36",
    lineHeight: 24,
    fontFamily: "Inter-SemiBold",
  },
  // -------------------------------------------------Survay Check box------------------------------------------------
  margintop: {
    marginTop: 20,
  },

  Survaycard: {
    borderRadius: 10 / 2,
    shadowOffset: 0.4,
    shadowOpacity: 0.4,
    shadowColor: "#D5DEED",
    elevation: 3,
  },
  //   OutOff: {
  //     fontSize: 20,
  //     fontWeight: "700",
  //   },
  //   OutOffTotal: {
  //     fontSize: 20,
  //   },
  //   NexrPrevIcons: {
  //     flexDirection: "row",
  //   },
  //   TopScoreContainer: {
  //     justifyContent: "space-between",
  //     flexDirection: "row",
  //     marginVertical: 15,
  //   },
  Progressbar: {
    width: "100%",
    borderRadius: 7,
    height: 6,
  },

  SurvayOptions: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "#D5DEED",
    borderWidth: 1,
  },
  //   SurvayoptionSeriel: {
  //     alignSelf: "center",
  //     fontSize: 20,
  //     fontWeight: "400",
  //     color: "#51668A",
  //   },
  optionS: {
    // borderWidth:1,
    width: Dimensions.get("window").width / 1.34,
    color: "#51668A",
    fontFamily: "PlusJakartaSans-Bold",
  },
  CheckBox: {
    marginRight: 10,
  },
  //   --------------------------------------Thank You Page--------------------------------------------
  cardbody: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 2,
    // zIndex: 99999,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
  cardheading: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 20,
    fontFamily: "PlusJakartaSans-Bold",
  },
  badgeparent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  badgeimg: {
    width: 30,
    height: 30,
  },
  avtatsize: {
    width: 40,
    height: 40,
  },
  thankutxt: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Inter-SemiBold",
  },
  imaguser: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  //   line: {
  //     borderWidth: 1,
  //     borderColor: "#D5DEED",
  //     marginTop: 17,
  //   },
  listitemtst: {
    fontSize: 14,
    fontWeight: "600",
    color: "#071B36",
  },

  itemlisttxt2: {
    color: "#51668A",
    fontWeight: "400",
    fontSize: 12,
  },
  margintop: {
    marginTop: 20,
  },
  marginleft: {
    marginLeft: 20,
  },
  badgeimg: {
    width: 35,
    height: 42,
  },
  levelsBadge: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth:1,
    width: 90,
  },
  badgeConatiner: {
    padding: 15,
    backgroundColor: "rgba(213, 222, 237, 0.2)",
  },
  tankyouCelebration: {
    width: Dimensions.get("window").width / 1,
    height: 140,
  },
  buttonStyle: {
    marginTop: 30,
    bottom: 10,
    width: "100%",
    height: 48,
    alignSelf: "center",
    borderColor: "#fff",
    borderRadius: 15 / 2,
    backgroundColor: "#2C8892",
  },
  levelText: {
    fontFamily: "Inter-Regular",
  },
  coinsCount: {
    fontFamily: "Inter-Regular",
  },
  wonCoins:{
    fontFamily: "Inter-SemiBold",
  },
  wonCoinMsg:{
    fontSize: 15,
    marginTop: 5,
    textAlign: "center",
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  Congratulation:{
    fontSize: 21,
    marginTop: 20,
    textAlign: "center",
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  //---------------------TypoMcq---------------------------------------

  count: {
    borderRadius: 4,
    marginRight: 10,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  //   card: {
  //     borderRadius: 10 / 2,
  //     shadowOffset: 0.4,
  //     shadowOpacity: 0.4,
  //     shadowColor: "#D5DEED",
  //     elevation: 3,
  //   },
  //   OutOff: {
  //     fontSize: 20,
  //     fontWeight: "700",
  //   },
  //   OutOffTotal: {
  //     fontSize: 20,
  //   },
  //   NexrPrevIcons: {
  //     flexDirection: "row",
  //   },
  //   TopScoreContainer: {
  //     justifyContent: "space-between",
  //     flexDirection: "row",
  //     marginVertical: 15,
  //   },
  Progressbar: {
    width: "100%",
    borderRadius: 7,
    height: 6,
  },

  SurvayOptions: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 4,
    flexDirection: "row",
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    borderColor: "#D5DEED",
    borderWidth: 1,
  },
  CheckBox: {
    marginRight: 10,
  },
  inputText: {
    fontSize: 14,
    color: "#071B36",
    height: 48,
    width: "100%",
    borderBottomWidth: 1,
    paddingRight: 19,
    borderColor: "#51668A",
    marginVertical: 12,
    paddingLeft: 8,
  },
  limitationTextContainer: {
    // borderWidth:1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  limitationText: {
    color: "#51668A",
    fontFamily: "Inter-Regular",
  },
  error:{
    fontFamily: "Inter-SemiBold",
    color:"#D01212",
  }
});
