import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";

export const styles = StyleSheet.create({
    CartContainer:{
        marginVertical:10, 
        borderRadius:10,
        backgroundColor:'#fff',
        padding:20
    },
    userName:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'600',
        color:'#071B36',
        alignItems:'center'
    },
    imageTick:{width:16.16,height:16.16},
    userCategoryContainer:{justifyContent:'center',alignItems:'center',flexDirection:'row'},
    userCategory:{color:'#51668A'},
    closebtn: {
        backgroundColor: "#FFFF",
        alignSelf:'flex-end',
    },
    labels:{
        color:'#071B36'
    },
    textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
    },
    input:{
        alignSelf:'center',
        borderBottomColor:'#071B36',
        borderBottomWidth:0.7,
        width:'100%',
        marginBottom:20
    },
    inputDropDown:{
        alignSelf:'center',
        // borderBottomColor:'#071B36',
        // borderBottomWidth:0.7,
        width:'100%',
        marginBottom:20
    },
    pickFrom:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:15,
        width:'100%',
        borderWidth:2,
        justifyContent:'center',
        borderRadius:50,
        paddingVertical:5,
        borderColor:'#009688'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal:15,
        paddingVertical:25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0,height:2},
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 10,
        width:'100%',
    },
    ModalBody:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    OTPtext:{
        color:'#071B36',
        fontFamily:"Inter-Regular",
        marginTop:25,
    },
    NumberText:{
        color:'#071B36',
        fontFamily:"Inter-SemiBold",
        fontSize:16
    },
    numInput:{
        fontSize:16,
        color:"#071B36",
        paddingLeft:10,
        fontFamily:"Inter-SemiBold",
    },
    numInputEdit:{
        fontSize:16,
        color:"#071B36",
        borderBottomWidth: 1,
        borderColor:"#ccc",
        paddingLeft:10,
        fontFamily:"Inter-SemiBold",
        minWidth:120
    },
    textInputContainer: {
        marginBottom: 20,
        width:'100%'
    },
    roundedTextInput:{
        borderBottomWidth:2,
        width:'20%'
    },
   
    NumberEditBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
    },
    NumberEditIcon:{
        marginTop:10,
        marginLeft:5
    },
    resendOtp:{
        color:'#687690',
        fontFamily:"Inter-Regular",
    },
    resendOtpSec:{
        color:'#2376E5',
        fontFamily:"Inter-SemiBold",
        marginLeft:5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        alignSelf:'flex-start',
        fontSize:18,
        color:'#071B36',
        fontFamily:"PlusJakartaSans-Regular"
    },
    modalSubText: {
        fontSize:12,
        color:'#071B36',
        fontFamily:"PlusJakartaSans-Regular",
        marginBottom:5
    },
    // searchContainerStyle: {
    //     borderColor: '#cc0000'
    // },
    // dropDownContainerStyle: {
    //     borderColor: '#cc0000'
    // },
    // searchTextInputStyle: {
    //     borderColor: '#cc0000'
    // },
    errorMsg:{
        color:'#cc0000'
    },
    datePickerStyle:{
        width:'100%'
    },
    workingToggle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'100%',
        alignItems:'center'
    },
    workingToggleText:{
        fontSize:16,
        color:'#071B36',
        marginRight:10
    },
    PicModalSubText: {
        fontSize:18,
        color:'#071B36',
        fontFamily:"PlusJakartaSans-Regular",
        marginLeft:10
    },
    modalBtnContainer:{marginTop:20,width:'100%'},
    ProfileImageContainer:{
        width:72,
        height:72,
        alignSelf:'center',
        marginVertical:20,
        marginTop:25
    },
    profileimg:{
        borderColor:"#DCE0E8",
        borderWidth:5,
        borderRadius:50,
        width:72,
        height:72,
    },
    profileEditBtnTouch:{position:'absolute',backgroundColor:"#fff",right:0,bottom:0,borderRadius:4,padding:1},
    profileEditBtn:{color:'#51668A'},
    basicInfoConatiner:{padding:20},
    basicInfoTitle:{fontSize:20,color:"#071B36",fontFamily:"PlusJakartaSans-Bold"},
    userInfoContainer:{flexDirection:'row',paddingTop:16, justifyContent:'space-between'},
    userInfoTextResult:{paddingLeft:10,color:'#51668A'},
    userInfoText:{color:'#071B36'},
    userInfoTitle:{fontSize:16,fontWeight:'600',color:"#071B36",fontFamily:"PlusJakartaSans-Bold"},
    AddInfo:{fontSize:16,marginVertical:20, color:'#2376E5',fontFamily:"Inter-Regular"},
    AddedDetails:{flexDirection:'row',padding:20,justifyContent:'space-between',borderColor:'#D5DEED'},
    AddedDetailsTitle:{fontSize:16,color:"#071B36",fontFamily:"PlusJakartaSans-Regular",fontWeight:'500',width:Dimensions.get('window').width/2},
    AddedDetailsDate:{fontSize:12,color:"#51668A",fontFamily:"Inter-Regular"},
    AddedDetailsSubTitle:{color:"#51668A",fontFamily:"Inter-Regular",width:Dimensions.get('window').width/2},
    SingleLetter:{width:50,height:50,borderRadius:50,justifyContent:'center',alignItems:'center',backgroundColor:'#45B5C0'},
    SingleLetterText:{color:'#fff',fontFamily:"Inter-SemiBold"},
    devider:{backgroundColor:'#D5DEED',width:"90%", alignSelf:'center',height:1,marginTop:10},
    showMore:{fontSize:16, color:'#2376E5',marginRight:5},
    showMoreContainer:{justifyContent:'center',alignItems:'center',flexDirection:'row',paddingVertical:12},
    InterestsContainer:{flexDirection:'row',justifyContent:'space-between',marginBottom:15},
    InterestsList:{flexDirection:'row',flexWrap:'wrap'},
    InterestsSelected:{backgroundColor : 'rgba(69, 181, 192, 0.05)',borderRadius:50,borderWidth:2,borderColor:'#45B5C0',paddingVertical:8,paddingHorizontal:15,margin:5,flexDirection:'row',alignItems:'center'},
    InterestsNotSelected:{borderRadius:50,borderWidth:2,borderColor:'#45B5C0',paddingVertical:8,paddingHorizontal:15,margin:5,flexDirection:'row',alignItems:'center'},
    selectedIcons:{marginLeft:10},
    loaderContainer:{flex:1,justifyContent:'center',alignItems:'center'},
    ShowAllContainer:{justifyContent:'center',alignItems:'center',padding:7,marginTop:5,flexDirection:'row'},
    ShowAllText:{color:'#2376E5',fontSize:16,marginRight:5},
});