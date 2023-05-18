import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    deactivateContainer:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#D5DEED'
    },
    deleteContainer:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        borderWidth:2,
        borderColor:'#D5DEED',
        marginTop:15
    },
    title:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:16,
        color:'#071B36'
    },
    subTitle:{
        fontFamily:'Inter-Regular',
        marginTop:10,
        color:'#071B36'
    },
    subTitleHeighlight:{
        fontFamily:'Inter-SemiBold',
        color:'#071B36'
    },
    selectRadio:{
        borderWidth:2,
        width:20,
        height:20,
        borderRadius:50,
        borderColor:'#51668A'
    },
    selectContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    //------------------Confirmation Action---------------------

    input:{
        borderBottomWidth:1,
        borderBottomColor:"#51668A",
        marginVertical:15
    },
    aboutAcountTitle:{
        color:'#071B36',
        fontFamily:'Inter-Regular',
    },

    //------------------delete account---------------------

    deleteContentTitle:{
        color:'#071B36',
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:16,
        textAlign:'center',
    },
    imgContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    livingSeasionTitle:{
        color:'#071B36',
        fontFamily:'PlusJakartaSans-Regular',
        textAlign:'center'
    },
    livingSeasions:{
        borderColor:'#D5DEED',
        borderWidth:1,
        marginRight:15,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:30
    },
    livingSeasionText:{
        color:'#51668A',
        
    },
    
})