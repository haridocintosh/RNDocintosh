import { StyleSheet, Dimensions } from "react-native";


export const styles = StyleSheet.create({
    reportTitle:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        padding:15,
        color:'#071B36'
    },
    reportIssueContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:15,
        borderBottomWidth:1,
        paddingVertical:15,
        borderColor:'#D5DEED'
    },
    reportIssueText:{
        fontFamily:"Inter-Regular"
    },
    //--------------------delete confirmation Modal----------------------
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.4)'  
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textBold:{
        fontFamily:'Inter-SemiBold',
    },
    textNormal:{
        fontFamily:"Inter-Regular",
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    buttonsDesign:{
        borderWidth:1,
        paddingHorizontal:25,
        borderRadius:5,
        paddingVertical:7,
        marginTop:20
    },
    leftButtonsDesign:{
        borderColor:'#1A7078'
    },
    RightButtonsDesign:{
        borderColor:'#1A7078',
        backgroundColor:'#1A7078'
    },
    leftText:{
        color:'#1A7078'
    },
    RightText:{
        color:'#fff'
    },

    //-------------------------------------Report Trach-------------------
    selectedReportContainer:{
        marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    selectedReport:{
        backgroundColor:'#FFEFD5',
        color:'#071B36',
        fontFamily:'PlusJakartaSans-Bold',
        paddingHorizontal:15,
        paddingVertical:10,
        position:'absolute',
        borderRadius:5,
    },
    reportTitle:{
        textAlign:'center',
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        marginTop:40,
        color:'#071B36',
    },
    reportSubTitle:{
        textAlign:'center',
        fontFamily:'PlusJakartaSans-Regular',
        marginTop:10,
        color:'#071B36',
    },
    reportStatusContainer:{
        padding:15
    },
    reportStatusTitle:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:18,
        color:'#071B36',
    },
    StepIndicatorConatainer:{
        alignItems:'center',
        paddingHorizontal:15,
        height:300,
        flexDirection:'row'
    },
    StepIndicator:{
    },
    StepIndicatorContent:{
        justifyContent:'space-between',
        marginLeft:25,
        height:240
    },
    contentStep:{
        marginTop:7
    },
    StepIndicatorTitle:{
        color:'#071B36',
        fontFamily:'Inter-Regular'
    },
    StepIndicatorSubTile:{
        color:'#51668A',
        fontFamily:'Inter-Regular',
        fontSize:12
    },
})