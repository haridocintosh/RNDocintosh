import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
    toggleContainer:{
        flexDirection:'row',
        backgroundColor:'#F2FAFA',
        height:50,
        paddingHorizontal:15
    },
    toggleButtonA:{
        marginRight:40,
        borderBottomWidth:2,
        borderBottomColor:'#45B5C0',
        height:49,
        alignItems:'center',
        justifyContent:'center'
    },
    toggleButtonD:{
        marginRight:40,
        borderBottomWidth:0,
        borderBottomColor:'#45B5C0',
        height:49,
        alignItems:'center',
        justifyContent:'center'
    },
    toggleTextA:{
        fontFamily:'Inter-SemiBold'
    },
    toggleTextD:{
        fontFamily:'Inter-Regular'
    },
    plusContainer:{
        backgroundColor:'#2C8892',
        position:'absolute',
        bottom:20,
        right:20,
        borderRadius:50,
        padding:10
    },
    //==========================ProfileScreenFollwers========================
 
    mypageContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    profileimgMypage: {
        height: 60,
        width: 60,
        marginRight: 15,
        borderRadius:50
    },
    mypageLhs: {
        flexDirection: "row",
        alignItems: "center",
    },
  
    mypageNameText: {
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "PlusJakartaSans-Regular",
    },
    mypageSpecialist: {
        fontSize: 12,
        fontWeight: "400",
        color: "#51668A",
        marginTop: 5,
        fontFamily: "Inter-Regular",
    },
    
    // ----------------------Create Business Page--------------------------------------
    inputContainer:{
        marginBottom:30
    },
    inputLabel:{
        color:'#071B36',
        fontFamily: "Inter-Regular",
    },
    input:{
        height:50,
        borderBottomWidth:1.5,
        borderBottomColor:'#071B36'
    },
    inputTextArea:{
        borderWidth:1,
        height:135,
        padding:10,
        borderRadius:4,
        textAlignVertical:'top',
        borderColor:'#51668A'
    },
    wordsCount:{
        alignSelf:'flex-end',
        color:'#51668A',
    },
    customInputVerify:{
        backgroundColor:'transparent',
        borderRadius:0,
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor:"#071B36",
    }
});