import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'

const SweetAlert = () => {
  return (
    <View style={styles.container}>
        <View style={styles.AlertMsgContainer}>
          <Text style={styles.AlertMsg}>Already Played!</Text>
        </View>
    </View>
  )
}

export default SweetAlert;
const styles = StyleSheet.create({
container:{
    flex:1,
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/1,
    borderWidth:1,
    position:'absolute',
    // backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  AlertMsgContainer:{
    backgroundColor:'#fff',
    paddingVertical:15,
    paddingHorizontal:20,
    borderRadius:7,
    
    sshadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 4,
    borderWidth:1,
    borderColor:'#f2f2f2'
  },
  AlertMsg:{
    color:'red',
    fontSize:18
  }
})