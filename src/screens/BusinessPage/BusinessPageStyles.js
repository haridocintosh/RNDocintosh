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
    },
    // ---------------------------------Upload Profile--------------------------------------
    bgImgContainer:{
        height:200,
        marginTop:30,
        backgroundColor:'#F2FAFA'
    },
    profileImage:{
        height:100,
        width:100,
        alignSelf:'center',
        position:'absolute',
        bottom:-50,
        borderRadius:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    bgPic:{
        width:'100%',
        height:200,
    },
    profilePic:{
        width:97,
        height:97,
        borderRadius:50,
        borderWidth:3,
        borderColor:'#DCE0E8'
    },
    UploadImgTitle:{
        marginTop:15,
        textAlign:'center',
        fontFamily:'Inter-SemiBold',
        color:'#2376E5',
    },
    UploadProfileImg:{
        fontSize:10,
        textAlign:'center',
        fontFamily:'Inter-SemiBold',
        color:'#2376E5',
    },
    profileImageBr:{
        borderWidth:4,
        flex:1,
        // width:'100%',
        borderRadius:50,
        margin:2,
        borderColor:'#DCE0E8',
        backgroundColor:'#DCE0E8',
        justifyContent:'center',
        alignItems:'center'
    },
    UploadTitle:{
        fontSize:18,
        color:'#071B36',
        fontFamily:'PlusJakartaSans-Bold'
    },
    UploadSubTitle:{
        color:'#071B36',
        fontFamily: "Inter-Regular",
        marginTop:10
    },
});