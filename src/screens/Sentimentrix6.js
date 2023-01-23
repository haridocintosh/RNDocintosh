import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons,AntDesign ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import d from '../assets/dr-icon/d.png';
import coupon from '../assets/dr-icon/coupon1.png';
import { Card, TextInput } from 'react-native-paper';
import { Input } from 'react-native-elements';
import { Inter_200ExtraLight } from '@expo-google-fonts/inter';




const Sentimentrix6 = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{backgroundColor:'#ecf2f6'}}
    
    >
   
<View style={{padding:10}}>
  <View style={{marginTop:40}}>
  <View>
  <View style={{flexDirection:'row'}}>
<View style={{zIndex:1, marginBottom:-35}}>
    <Text>01/05</Text>
</View>
  </View>
  <View style={{flexDirection:'row-reverse'}}>
  <View style={{paddingEnd:10}}>
  <AntDesign name="rightcircle" size={24} color="#2C8892"  onPress={() => navigation.navigate('Survey2')} />
  </View>
  <View style={{margin:10}}></View>
  <View style={{paddingLeft:20}}>
  <AntDesign name="leftcircle" size={24} color="#2C8892" onPress={() => navigation.navigate('Survey2')} />
  </View>
 
  </View>
  </View>
  <View style={{backgroundColor:'#48B5C6', marginRight:10,width:56, zIndex:1, bottom:-6, height:6,borderRadius:20/2}}></View>
  <View style={{backgroundColor:'#cbe6eb', marginRight:10, height:6,borderRadius:20/2}}></View>
  <Text style={{marginTop:10, fontSize:16, fontWeight:'600', color:'#071B36',lineHeight:24}}>Which is the first brand that comes to your mind in the health category</Text>
  <View style={styles.margintop}></View>
    
  
    <View style={styles.margintop}></View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:16, fontWeight:'700', marginLeft:10,marginBottom:20}}>Main Message</Text>
    <Input
        placeholder='Type Here'
        
    />
<Text style={{alignSelf:'flex-end', marginTop:-20, marginRight:10, color:'#51668A'}}>0/200</Text>

   
</View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:16, fontWeight:'700', marginLeft:10,marginBottom:20}}>Other Message</Text>
    <Input
        placeholder='Type Here'
        
    />
<Text style={{alignSelf:'flex-end', marginTop:-20, marginRight:10, color:'#51668A'}}>0/200</Text>

   
</View>
<View style={{marginTop:10}}>
    <Text style={{fontSize:16, fontWeight:'700', marginLeft:10,marginBottom:20}}>Any other message that you would like to mention</Text>
    <Input
        placeholder='Type Here'
        
    />
<Text style={{alignSelf:'flex-end', marginTop:-20, marginRight:10, color:'#51668A'}}>0/200</Text>

   
</View>
   
  </View>
</View>
          
        </ScrollView>
        </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  
  margintop:{
    marginTop:20
  },

  count:{
    borderRadius:10/2,
     backgroundColor:'#F6F6F6',
     width:32,
     height:32,
    alignSelf:'center',
    marginLeft:10
     
  },
  card:{
    borderRadius:10/2,
    shadowOffset:0.4,
    shadowOpacity:0.4,
    shadowColor:'#D5DEED',
    elevation:3
  }
  

  

})
export default Sentimentrix6