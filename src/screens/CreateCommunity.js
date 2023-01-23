import React from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,Feather,Ionicons ,Fontisto} from '@expo/vector-icons';
import { Button , } from "react-native-elements";



const CreateCommunity = () => {
  return (
    <View style={{flex:1,padding:25, marginTop:50, backgroundColor:'#fff',}}>
        
     <View style={{backgroundColor:'#FFEFD4', width:91, height:28, alignSelf:'center'}}>
        <Text style={{fontSize:12, fontWeight:'600', alignSelf:'center', marginVertical:5}}>Hate Speech</Text>
     </View>
       <View style={{alignSelf:'center', marginTop:10}}>
        <Text style={{fontSize:18, fontWeight:'600'}}>
        Thank you for sharing with us.
        </Text>
       </View>
       <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:14, fontWeight:'400'}}>
        We will notify you on the progress
        </Text>
       </View>
       <View style={{marginTop:20}}>
        <Text style={{fontSize:14, fontWeight:'600'}}>
        Report Status
        </Text>
       </View>
       <View style={styles.margintop}></View>
      <View style={{backgroundColor:'#0F9C69', width:16, height:16, borderRadius:50}}>
      <View style={styles.listitemline}></View>
     
      </View>
      <View style={{marginLeft:30, marginTop:-18,fontSize:12, fontWeight:'400',}}><Text>Report Received</Text>
      <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>18 Aug 2021</Text></View>
      <View style={{marginTop:25}}></View>
      <View style={{backgroundColor:'#0F9C69', width:16, height:16, borderRadius:50}}>
      <View style={styles.listitemline2}></View>
      </View>
      <View style={{marginLeft:30, marginTop:-25,fontSize:12, fontWeight:'400',}}><Text>Under Review</Text>
      <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>18 Aug 2021</Text></View>
      <View style={{marginTop:35}}></View>

      <View style={{backgroundColor:'#FFFF', width:16, height:16, borderRadius:50, borderWidth:2, borderColor:'#51668A'}}>
</View>
 <View style={{marginLeft:30, marginTop:-30,fontSize:12, fontWeight:'400',}}><Text>Descision Delivered</Text>
      <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>We will send you a notification on the descision made</Text></View>
      
      <Button
            
              title="Done"
              type="solid"
              buttonStyle={{
                borderColor: '#2C8892',
                backgroundColor:'#2C8892',
                borderRadius:15/2,
                height:48,
               marginTop:'80%'
                
                

              
                
              }}
              titleStyle={{
                color:'#FFFF'
              }}/>
        </View>

          
     
     
  )
}
const styles = StyleSheet.create({
  line:{
    borderWidth:1,
    borderColor:'#D5DEED',
    marginTop:17

  },
  listitemline:{
    backgroundColor:'#0F9C69',
     borderRadius:10,
     borderWidth:1.5,
     borderColor:'#0F9C69',
     zIndex:1,
     width:1,
     height:50,
     marginTop:10,
     alignSelf:'center'
  },
  listitemline2:{
    backgroundColor:'#0F9C69',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#9C9C9C',
    borderStyle:'dotted',
    
    zIndex:1,
    width:0.7,
    height:50,
    marginTop:15,
    alignSelf:'center',
  },
  listview:{
    alignSelf:'flex-end',
    zIndex:1,
    marginTop:-15
  },
  margintop:{
    marginTop:20
  }

})
export default CreateCommunity