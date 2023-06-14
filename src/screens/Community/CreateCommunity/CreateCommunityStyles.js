import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
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
        borderColor:'#51668A',
        backgroundColor:'#fff'
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
})