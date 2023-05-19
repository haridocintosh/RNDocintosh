import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:15
    },
    IconContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    ppNames:{
        marginLeft:5,
        fontSize:14,
        fontWeight:'500',
        fontFamily:'Inter-Regular',
        color:'#071B36',
    },
    icons:{
        width:30,
        height:30
    }
})