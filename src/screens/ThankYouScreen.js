import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { Card } from 'react-native-paper';

export default function ThankYouScreen() {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{paddingHorizontal:0}}>
      <View>
          <Image source={require('../assets/images/knowhert.png')} style={{width:'100%', height:230, marginTop:0}}/>
      </View>
      <Card style={{borderTopLeftRadius:20, borderTopRightRadius:20, margin:0, backgroundColor:'#ffff', shadowColor:"#000", shadowOpacity:0.3,
      elevation:2, marginTop:-20, zIndex:1}}>
          <View style={{padding:1,}}>
              <View>
                  <Text style={{alignSelf:'center', fontSize:14, fontWeight:'500', marginTop:20}}>
                  386 Coins Left to reach Level 5!!!
                  </Text>
              </View>
            <View style={{flexDirection:'row', padding:20, marginTop:10,}}>
            <View style={{paddingLeft:21, }}>
              <Image source={require('../assets/dr-icon/Path1.png')}/>
              <Image source={require('../assets/dr-icon/badge.png')} style={{marginLeft:0,  width:30, height:30, marginTop:-35, }}/>

              <View style={{}}>
                  <Text>
                  Beginner
                  </Text>
                  <View style={{flexDirection:'row'}}><Image source={require('../assets/dr-icon/d.png')}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>
              </View>
            </View>
            <View style={{paddingLeft:40}}>
              <Image source={require('../assets/dr-icon/Path2.png')}/>
              <Image source={require('../assets/dr-icon/winner.png')} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}/>

              <View>
                  <Text style={{alignSelf:'center'}}>
                  Intermediate
                  </Text>
                  <View style={{flexDirection:'row'}}><Image source={require('../assets/dr-icon/d.png')}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

              </View>
            </View>
            <View style={{paddingLeft:30}}>
              <Image source={require('../assets/dr-icon/Path3.png')}/>
              <Image source={require('../assets/dr-icon/badge1.png')} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}/>

              <View>
                  <Text>
                  Expert
                  </Text>
                  <View style={{flexDirection:'row'}}><Image source={require('../assets/dr-icon/d.png')}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

              </View>
            </View>
            <View style={{paddingLeft:40}}>
              <Image source={require('../assets/dr-icon/Path4.png')}/>
              <Image source={require('../assets/dr-icon/king.png')} style={{marginLeft:4,  width:30, height:30, marginTop:-35, }}/>
              <View >
                  <Text style={{marginBottom:1}}>
                  Legend
                  </Text>
                  <View style={{flexDirection:'row'}}><Image source={require('../assets/dr-icon/d.png')}  style={{width:14, fontSize:14, height:14}}/><Text style={{fontSize:12}}>200</Text></View>

              </View>
            </View>
              </View>

              <View style={{ backgroundColor:'#ffff', marginTop:10}}>
              <Image source={require('../assets/images/thankyou.png')} style={{alignSelf:'center'}}/>
                  <Text style={{fontSize:24, fontWeight:'600', lineHeight:34, alignSelf:'center', marginTop:-50}}>
                  Thank You
                  </Text>
                  <Text style={{fontSize:16, fontWeight:'400', lineHeight:24, alignSelf:'center'}}>
                  for your time and response. 
                  </Text>
                  <Text style={{fontSize:14, fontWeight:'400', lineHeight:21, alignSelf:'center', textAlign:'center',marginTop:20}}>
                  Yay! you took the  ‘Bombay Survey - Allergies Survey for Doctor
                  </Text>           
                  <View style={styles.margintop}></View>
                
                          
              </View>
              <View style={{margin:20}}>
              <Button
                  title="Back to Categories"
                  buttonStyle={{
                    marginTop:30,
                    width:"100%",
                    height:48,
                    alignSelf:'center',
                    borderColor: '#fff',
                    borderRadius:15/2,
                    backgroundColor:'#2C8892',
                  }}
                    titleStyle={{color:'#fff'}}
                    onPress={() => navigation.navigate('Engage1Screen')}
                />
              </View>
            
          </View>
      </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    line:{
      borderWidth:1,
      borderColor:'#D5DEED',
      marginTop:17
  
    },
    listitemtst:{
        fontSize:14,
         fontWeight:'600',
          color:'#071B36',
         
    },
    count:{
     paddingRight:10,
     marginTop:10,
      
    },
    itemlisttxt2:{
      color:'#51668A',
       fontWeight:"400",
       fontSize:12,

    },
    margintop:{
      marginTop:32
    },
    marginleft:{
        marginLeft:20
    }
  
  })
