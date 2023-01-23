import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    singleSettingBox:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:15,
        justifyContent:'space-between'
    },
    SettingText:{
        marginLeft:12,
        fontSize:14,
        fontWeight:'500',
        fontFamily:'PlusJakartaSans-Bold',
        color:'#071B36',
    },

    // ------------------------------Reset Password-------------------------
    customInputVerifyFullMobile: {
        fontSize: 16,
        color: "#687690",
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        paddingRight: 19,
        borderColor: "#51668A",
        marginVertical: 12,
        paddingLeft: 8,
        fontFamily:'PlusJakartaSans-Regular'
    },
    eyeIcon:{
        position:'absolute',
        right:20,
        top:25,
    },
    resetPasswdBtn:{
        backgroundColor:'#2C8892',
        padding:15,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        marginTop:25
    },
    resetPasswdBtnText:{
        color: "#fff",
        fontFamily:'PlusJakartaSans-Bold'
    },
    error:{
        color:'red'
    }
})