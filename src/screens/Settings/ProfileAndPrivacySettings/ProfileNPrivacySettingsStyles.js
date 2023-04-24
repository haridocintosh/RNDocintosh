import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:'#D5DEED',
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
        fontFamily:'PlusJakartaSans-Bold',
        color:'#071B36',
    },
    icons:{
        width:30,
        height:30
    }
})