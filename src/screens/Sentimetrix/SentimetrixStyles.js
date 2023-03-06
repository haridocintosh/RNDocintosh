import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    sentiContainer:{
        alignItems:'center',
    },
    sentimetrixImage:{
        width:Dimensions.get('window').width/1.5,
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
        textAlign:'center'
    },
    dopDownContainer:{
        padding:15
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
});