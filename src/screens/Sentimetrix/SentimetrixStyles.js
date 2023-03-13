import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    sentiContainer:{
        alignItems:'center',
    },
    sentimetrixImage:{
        width:Dimensions.get('window').width/1.5,
        height:Dimensions.get('window').height/2,
        resizeMode:'contain',
    },
    sentimetrixTitle:{
        color:'#071B36',
        fontFamily:'Inter-Regular',
        fontSize:20,
    },
    sentimetrixSubTitle:{
        color:'#51668A',
        fontFamily:'Inter-Regular',
        textAlign:'center',
        width:Dimensions.get('window').width/1.1,
    },
    dopDownContainer:{
        padding:15
    },
    dopDownLabel:{
        color:'#071B36',
        fontFamily:'Inter-Regular',
        fontSize:12,
        marginBottom:10
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
    DropDownField: {
        border:0,
        borderBottomWidth:1,
        backgroundColor: "#ecf2f6"

    },
    surveyOptionsContainer: {
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:15
    },
    optionTitle: {
        fontSize:16,
        fontFamily:'Inter-SemiBold',
        color:'#212121',
    },
    optionSubTitle: {
        fontFamily:'Inter-Regular',
        color:'#51668A',
        marginTop:5,
    },
    couponConatiner: {
        borderWidth:2,
        borderColor:'#45B5C0',
        borderRadius:50,
        width:52,
        height:34,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(69, 181, 192, 0.05)'
    },
    imageIcon: {
        width:20,
        height:20,
    },
    
    //------------------------------------- SentimetrixMcq -------------------------------------------

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
});