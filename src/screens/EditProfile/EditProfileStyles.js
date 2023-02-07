import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    CartContainer:{
        marginVertical:10, 
        borderRadius:10,
        backgroundColor:'#fff'
    },
    userName:{
        alignSelf:'center',
        fontSize:20,
        fontWeight:'600',
        color:'#071B36'
    },
    imageTick:{width:16.16,height:16.16},
    userCategoryContainer:{justifyContent:'center',alignItems:'center',flexDirection:'row'},
    userCategory:{color:'#51668A'},
    closebtn: {
        backgroundColor: "#FFFF",
        alignSelf:'flex-end',
        margin:10
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
        marginHorizontal:20,
        borderBottomColor:'#000',
        borderBottomWidth:0.5,
        width:300,
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
        borderRadius: 20,
        padding:20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 10,
        width:'100%',
        // height:200
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
        marginLeft:5,
        fontSize:18,
        fontWeight:'600'
        
    },
    ProfileImageContainer:{
        width:72,
        height:72,
        alignSelf:'center',
        marginVertical:20
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
    basicInfoTitle:{fontSize:20,color:"#071B36",fontFamily:"Plus-Jakarta-Sans"},
    userInfoContainer:{flexDirection:'row',paddingTop:16, justifyContent:'space-between'},
    userInfoTextResult:{paddingLeft:10,color:'#51668A'},
    userInfoText:{color:'#071B36'}
});