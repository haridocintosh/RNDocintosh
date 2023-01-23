import React,{ useEffect } from 'react'
import { View, Text , StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,Feather,Ionicons ,Fontisto} from '@expo/vector-icons';


const SettingsScreen = ({navigation}) => {
  useEffect(()=>{
    navigation.setOptions({ title: 'Comments'});
  },[])
  return (
    <View style={{flex:1,padding:25}}>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Profile & Privacy Settings</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Ionicons name="person" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Account Settings</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Saved Post</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Block list</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Activity</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Notification Settings</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
      <View style={{flexDirection:'row'}}>
      <Fontisto name="locked" size={22} color="black" />
        <TouchableOpacity>
          <Text style={{paddingLeft:17,fontSize:16, fontWeight:'500',marginTop:4 }}>Deactivate & Delete Account</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.line}/>
 
    </View>
  )
}
const styles = StyleSheet.create({
  line:{
    height:1,
    width:'100%',
    backgroundColor:'#ffff',
    marginTop:20,

  }

})
export default SettingsScreen