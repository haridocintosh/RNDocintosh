import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import reactangle from '../assets/images/Rectangle.png';
import reactangle1 from '../assets/images/Rectangle1.png';
import oval from '../assets/dr-icon/Oval.png';
import { FontAwesome5 } from '@expo/vector-icons';
import docintoshd from '../assets/dr-icon/dric.png';
import { Ionicons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import UserAvatar from '@muhzi/react-native-user-avatar';
// import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';

import { Button } from 'react-native-elements';

import { Card } from 'react-native-paper';

export default function KnowledgeScreen() {
  const [gamesTab, setGamesTab] = useState(1);
  const navigation = useNavigation();


  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{paddingHorizontal:0}}>
      <View>
      <Image source={require('../assets/images/Rectangle.png')} style={{width:'100%', height:230, marginTop:20}}></Image>
</View>
<View style={{borderTopEndRadius:50/2, borderTopStartRadius:50/2, marginTop:-50,zIndex:1, backgroundColor:'#ffff', padding:20, paddingLeft:10}}>
<View style={{backgroundColor:'#45B5C0', width:81, height:21, borderRadius:12/2,marginTop:20, marginLeft:10}}>
      <Text style={{textAlign:'center', color:'#fff', fontSize:12,fontWeight:'600',lineHeight:20}}>Sponsored</Text></View>
<View style={{marginStart:10, marginTop:10,flexDirection:'row'}}>
    <Text style={{fontWeight:'600',fontSize:20}}>Telemedicine</Text>
    <View style={{backgroundColor:'#45B5C0', marginLeft:'60%', width:24, height:24, borderRadius:40/20, alignItems:'flex-end',}}>
    <FontAwesome5 name="share" size={18} color="white" style={{padding:1}} />
    </View>
</View>
<View style={{flexDirection:'row',marginLeft:10 , marginTop:10}}>
                <Image source={require('../assets/dr-icon/Oval.png')} style={{width:14, height:14}}></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{width:14, height:14,zIndex:1, marginLeft:-5, borderColor:'#000'}} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1,width:14, height:14, marginLeft:-5, borderColor:'#000'}} ></Image>
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690', paddingStart:5}}>160+ Members</Text>
               </View>
           <View style={{ flexDirection:'row', marginTop:20}}>
            <Card style={{borderRadius:20/2, width:98, height:72, marginLeft:10}}>
           <View style={{alignSelf:'center', marginTop:10}}>
           <UserAvatar
        size={32}
        
        src="https://images.unsplash.com/photo-1574888121821-1dc5d49eeba1?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      />
  
           </View>
           <Text style={{alignSelf:'center', fontSize:12, fontWeight:'400'}}>Dr.Vishnu</Text>
            </Card>
            <Card style={{borderRadius:20/2, width:98, height:72, marginLeft:30}}>
            <View style={{alignSelf:'center', marginTop:10}}>
            <Ionicons name="time-outline" size={32} color="black" />

           </View>
           <Text style={{alignSelf:'center', fontSize:12, fontWeight:'400'}}>12 PM - 2 PM</Text>
            </Card>
            <Card style={{borderRadius:20/2, width:98, height:72, marginLeft:30}}>

            <View style={{alignSelf:'center', marginTop:10}}>
            <Ionicons name="location-sharp" size={32} color="black" />
  
           </View>
           <Text style={{alignSelf:'center', fontSize:12, fontWeight:'400'}}>On Site</Text>
            </Card>
           </View>   
           <View style={{marginTop:20, flexDirection:'row', marginLeft:10}}>
           <Ionicons name="location-sharp" size={32} color="#51668A" />
           <View style={{marginStart:23}}>
           <Text style={{color:'#51668A',fontSize:12,fontWeight:'400'}}>Bengaluru, Karnataka</Text>
           <Text>University College, Kengiri</Text>
           </View>
           <Card style={{borderRadius:50/2, width:32, height:32, marginLeft:100 }}>
           <View style={{alignSelf:'center', marginTop:10}}>
           <FontAwesome5 name="location-arrow" size={15} color="black" />

           </View>
           </Card>

           </View>
           <Text style={{marginTop:20, marginLeft:15, fontSize:16, fontWeight:'600',color:'#071B36'}}>Description</Text>
           <Text style={{marginTop:20, marginLeft:15, fontSize:16, fontWeight:'600',color:'#51668A'}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. Vivamus aliquet efficitur ultrices. Aliquam vel lectus sed turpis elementum cursus.
           </Text>
           <Button
  title="Pay  ₹100"
 
  buttonStyle={{
    marginTop:20,
    width:320,
    height:48,
   alignSelf:'center',
                borderColor: '#fff',
                borderRadius:15/2,
                backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff'
              }}
              onPress={() => navigation.navigate('Engage1Screen')}
             
/>
</View>
      </ScrollView>
    </SafeAreaView>
  );
}