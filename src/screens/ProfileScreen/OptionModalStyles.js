import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    container:{
          position:'absolute',
          right:40,
          borderRadius:5,
          zIndex:100,
          top:15,
          overflow:'visible'
        },
        optionModal:{
          width:155,
          backgroundColor:'#fff',
          borderRadius:5,
          justifyContent:"center",
          paddingHorizontal:15,
          paddingVertical:10,
          shadowColor: 'black',
          shadowOpacity: 0.26,
          shadowOffset: { width: 0, height: 2},
          shadowRadius: 10,
          elevation: 3,
          zIndex:10000
        },
        optionList:{
          paddingVertical:8,
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
        },
        optionListText:{
          color:'#071B36',
          fontFamily:"Inter-Regular",
        },
        optionListImage:{
          width:15.5,
          height:20.7,
          marginRight:7
        },
        optionListIcon:{
          marginRight:7
        },
      
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

})