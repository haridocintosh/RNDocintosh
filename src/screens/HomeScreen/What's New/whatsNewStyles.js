import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderRadius:10,
        overflow:'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 2,
        margin:10
    },
    titleDtails:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15
    },
    cartImages:{
        width:70,
        height:70,
        
    },
    CartTitle:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color:'#8499BD',
    },
    CartTitleQuiz:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color: '#404DB7',
    },
    CartTitlePolls:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color: '#DC5343',
    },
    CartTitleSurveys:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color: '#008D85',
    },
    CartTitleSentimetrix:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color: '#006592',
    },
    cartOffersText:{
        fontFamily:'PlusJakartaSans-Bold',
        marginRight:10
    },
    cartOffers:{
        flexDirection:'row',
        marginTop:10,
    },
    docCoin:{ 
        width: 20, 
        height: 20, 
        marginRight:7 
    },
    CartWave:{
        width:'100%',
        height:145,
        marginTop:-70,
        position:'relative'
    },
    trendTitle:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        paddingHorizontal:15
    },
    trendTitleContent:{
        color:'#51668A',
        padding:15
    },
    ButtonContainer:{
        position:'absolute',
        right:15,
        bottom:15,
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:5,
        backgroundColor:'#2C8892'
    },
    buttonText:{
        color:'#fff',
        fontFamily:'PlusJakartaSans-Bold',
    },

});