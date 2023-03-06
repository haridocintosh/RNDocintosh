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
});