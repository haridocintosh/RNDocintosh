import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    DayNotification:{
        margin:15,
        fontSize:16,
        fontFamily:'PlusJakartaSans-Bold',
        fontWeight:'600'
    },
    userDoesContainer:{
        padding:15,
        backgroundColor:'#EFFEFF',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    WhatuserDoes:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    ProfilePic:{
        width:40,
        height:40,
        borderRadius:50,
        
    },
    threeDots:{
        width:5,
        height:20,
        borderRadius:50,
    },
    userName:{
        marginLeft:7
    },
    userNameText:{
        fontFamily:'PlusJakartaSans-Bold',
        fontWeight:'500'
    },
    userTimeText:{
        fontFamily:'Inter-Regular',
        fontWeight:'500',
        color: '#51668A',
        fontSize:12,
        marginTop:5
    },
    threeDotsContainer:{
        padding:10,
        right:-10,
    },
    SheetOpionsContainer:{
        padding:10,
        flexDirection:'row'
    },
    SheetOpions:{
        width:25,
        height:25
    },
    OpionsContainer:{
        marginLeft:10
    },
    OpionsTitle:{
        fontFamily:'Inter-Regular',
    },
    OpionsSubTitle:{
        fontFamily:'Inter-Regular',
        fontSize:12,
        color: '#51668A',
        marginTop:5

    }

})