import React from 'react'
import { View, Text,SafeAreaView,ScrollView,TouchableOpacity,StyleSheet } from 'react-native'
import {  Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {  MaterialCommunityIcons,AntDesign, Entypo,Ionicons} from '@expo/vector-icons';

const Polls1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
<View style={{padding:10}}>

<Card style={{marginTop:40, borderRadius:10,shadowRadius:10,}}>
<View style={styles.incompletebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Popular</Text>
      </View>
      <View style={{flexDirection:'row-reverse',}}>
        <View style={{marginTop:-40, zIndex:1, marginRight:20}}>
        <MaterialCommunityIcons name="octagram" size={24} color="#19AC65" />
        <Text style={{fontSize:6, fontWeight:'400', zIndex:1, marginTop:-18,marginLeft:6, color:'#fff' }}>New</Text>
        </View>
      </View>
   <Text style={styles.questions}>What are the problems associated with high BP?</Text>
   <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5 ,}}>
   <Ionicons name="time-outline" size={20} color="red" /><Text style={{color:'red', paddingHorizontal:5}}>Expairing on 27 August</Text></View>

  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Heart Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Kidney Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Stroke Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>All of the Above</Text>
  </View>
  </View>
  </TouchableOpacity>
  <View style={{marginBottom:20}}></View>
  </Card>
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>

    
<Text style={styles.questions}>What are the problems associated with high BP?</Text>
<View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5 ,}}>
<Ionicons name="time-outline" size={20} color="red" /><Text style={{color:'red', paddingHorizontal:5}}>Expairing on 27 August</Text></View>


</Card>
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>

    
   <Text style={styles.questions}>What are the problems associated with high BP?</Text>
   <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5 ,}}>
   <Ionicons name="time-outline" size={20} color="red" /><Text style={{color:'red', paddingHorizontal:5}}>Expairing on 27 August</Text></View>


  </Card>
  <Card style={{marginTop:20, borderRadius:10,shadowRadius:10,}}>
<View style={styles.incompletebg}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400'}}>Popular</Text>
      </View>
      <View style={{flexDirection:'row-reverse',}}>
        <View style={{marginTop:-40, zIndex:1, marginRight:20}}>
        <MaterialCommunityIcons name="octagram" size={24} color="#19AC65" />
        <Text style={{fontSize:6, fontWeight:'400', zIndex:1, marginTop:-18,marginLeft:6, color:'#fff' }}>New</Text>
        </View>
      </View>
   <Text style={styles.questions}>What are the problems associated with high BP?</Text>
   <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:5 ,}}>
   <Ionicons name="time-outline" size={20} color="red" /><Text style={{color:'red', paddingHorizontal:5}}>Expairing on 27 August</Text></View>

  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Heart Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Kidney Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>Stroke Diseases</Text>
  </View>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={styles.marginten}>
  <View style={styles.bordermcq}>
  <Text style={styles.aligncenter}>All of the Above</Text>
  </View>
  </View>
  </TouchableOpacity>
  <View style={{marginBottom:20}}></View>
  </Card>
  
</View>
   </ScrollView>
  </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
  paddingLeft:{
  paddingLeft:10,
  },
  cardfooterstyle:{
    
zIndex:9999,
marginTop:-140,

  },
  questions:{
    fontSize:16,
    fontWeight:'600',
    color:"#212121",
    padding:10

  },
  imgcolor:{
    width:'100%'
  },
  marginten:{
    margin:10
  },
  bordermcq:{
    borderColor:'#D5DEED',
     borderRadius:10,
     padding:12,
     borderWidth:2
  },
  aligncenter:{
    alignSelf:'center'
  },
  incompletebg:{
    borderRadius:20,
     backgroundColor:'#FFD6D6',
     width:84,
     height:25,
     alignSelf:'flex-start',
     margin:15
  },
 
 });
export default Polls1;