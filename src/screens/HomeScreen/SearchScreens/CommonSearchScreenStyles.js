import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    TabContainer:{
        // borderWidth:1,
        height:55,
        backgroundColor:'#F2FAFA',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15

    },
    TabBtnD:{
        // borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TabBtnA:{
        // borderWidth:1,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#45B5C0'
    },
    TabBtnTxtA:{
        color:'#071B36',
        fontFamily:'Inter-SemiBold',
    },
    TabBtnTxtD:{
        color:'#687690',
        fontFamily:'Inter-Regular',

    },

});