import React from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView, TouchableOpacity, Animated ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5,FontAwesome,Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}>
    <Card style={{shadowColor: '#F2FAFA',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 29/4,
    backgroundColor:'#ffff', margin:10}}>
    <View style={{flexDirection:'row'}}>

<View style={{backgroundColor:'#DCE0E8',marginTop:21, margin:10, borderRadius:50, width:90, height:90,}}>
<Image source={require('../assets/images/p2.png')} style={{ alignSelf:'center',marginTop:5,width:80, height:80,}}></Image>

</View>
<View style={{marginTop:30}}>

    <Text style={{fontSize:16, fontWeight:'bold'}}>Dr. Kiran Y. <Image source={require('../assets/images/Vector.png')}></Image></Text>    
    <Text style={{}}>Cardiologist | Bangalore</Text>
    <TouchableOpacity style={{flexDirection:'row'}}>
    <Text style={{color:'blue',}}> View / </Text>
    <Text style={{color:'blue',}} onPress={() => navigation.navigate('EditProfileScreen')}>Edit Profile</Text>
    </TouchableOpacity>
    </View>
   
    </View>
    <View style={{marginTop:20, flexDirection:'row', marginBottom:10}}>
    
   <Card style={styles.box1}>
   <View style={{flexDirection:'row'}}>
   <Image source={require('../assets/dr-icon/d.png')} style={{marginStart:20, marginVertical:10}}/>
    <Text style={{margin:13, fontWeight:'bold'}}>3600</Text>
   </View>
    
   </Card>
  
   <Card style={styles.box2}>
   <View style={{flexDirection:'row'}}>
   <Image source={require('../assets/dr-icon/discount1.png')} style={{marginStart:20, marginVertical:10}}/>
    <Text style={{margin:13, fontWeight:'bold'}}>7</Text>
   </View>
   </Card> 
 
    </View>
    
    </Card>
   <Card style={{ margin:10}}>
   <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>



<View  style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
<Image source={require('../assets/images/p2.png')} style={{ alignSelf:'center',margin:10,width:38, height:38,}}/>

<View style={{marginTop:0,}}>

<Text style={{fontSize:14, fontWeight:'400'}}>Dr. Kiran Y. <Image source={require('../assets/images/Vector.png')}></Image>

</Text>  
<View style={{flexDirection:'row',}}>
<Ionicons name="md-earth" size={13} color="#45B5C0" />  
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,
marginRight:5

}}>
</View>
<Text style={{fontSize:12, fontWeight:'400'}}>
Cardiologist 

</Text>
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,


}}>
</View>
<Text style={{marginLeft:10,fontSize:12, fontWeight:'400'}}>
8min ago</Text>

</View>

</View>
</View>

<MenuProvider>
          <Menu>
            <MenuTrigger>
            <View style={{justifyContent:"center",alignSelf:'flex-end'}}>
             <Entypo name="dots-three-vertical" size={24} color="black"  /></View>
           
</MenuTrigger>

            <MenuOptions style={styles.container}>
            <Card style={{}}>
          
            <MenuOption >
                <Text style={{ color: '#071B36',paddingLeft:10}}><Feather name="edit-2" size={12} color="black" />Edit Post</Text>
              </MenuOption>
              <MenuOption>
                <Text style={{ color: '#071B36' }}><FontAwesome5 name="trash-alt" size={12} color="black" />Delete Post</Text>
              </MenuOption>
              <MenuOption>
                <Text style={{ color: '#071B36' }}><FontAwesome name="bell-slash-o" size={12} color="black" />Turn off notifications</Text>
              </MenuOption>
              <MenuOption>
                <Text style={{ color: '#071B36' }}><FontAwesome5 name="comment-slash" size={12} color="black" />Turn off commenting</Text>
              </MenuOption>
            
             
              </Card>
            </MenuOptions>           
          </Menu>
          </MenuProvider>
    
    </View>
    <Text style={{paddingLeft:12,paddingBottom:12}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.#new_venture </Text>
    <View style={{marginBottom:50}}>
    <Image source={require('../assets/images/grid1.png')} style={{width:360, alignSelf:'center'}}></Image>
    <View style={{backgroundColor:'#45B5C0', borderRadius:50/2, width:30, height:30, padding:2,marginTop:-80,alignSelf:'center', shadowColor:'#000', zIndex:1}}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>
    </View>
    
    <View style={{flexDirection:'row',margin:15}}>
    <View style={{}}>
    <Image source={require('../assets/images/grid3.png')} style={{width:113}}></Image>
    <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>

    </View>
    <View style={{}}>
    <Image source={require('../assets/images/grid4.png')} style={{width:113, marginLeft:10 }}></Image>
    <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>

    </View>
    <View>
    <Image source={require('../assets/images/grid5.png')} style={{ width:113, marginLeft:10}}></Image>
    <View style={styles.plusthree}>
    <Text style={{color:'#fff',fontSize:20,fontWeight:'900'}}>3+</Text>
    </View>
    </View>
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:20, flexDirection:'row'}}>
              <FontAwesome name="heart" size={22} color="red" /><Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>

              </View>
              <View style={{padding:5, flexDirection:'row'}}>
              <FontAwesome5 name="comment-alt" size={22} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>

              </View>
              <View style={{padding:5, flexDirection:'row'}}>
              <FontAwesome name="send" size={22} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>

              </View>
             
               </View>
               </View>
               <View style={{flexDirection:'row',marginLeft:20 , marginTop:10, marginBottom:10}}>
                <Image source={require('../assets/dr-icon/Oval.png')} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
   </Card>
   <Card style={{ margin:10}}>
   <View style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>



<View  style={{flexDirection:'row',alignItems:"center",justifyContent:"space-between"}}>
<Image source={require('../assets/images/p2.png')} style={{ alignSelf:'center',margin:10,width:38, height:38,}}></Image>

<View style={{marginTop:0,}}>

<Text style={{fontSize:14, fontWeight:'400'}}>Dr. Kiran Y. <Image source={require('../assets/images/Vector.png')}></Image>

</Text>  
<View style={{flexDirection:'row',}}>
<Ionicons name="md-earth" size={13} color="#45B5C0" />  
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,
marginRight:5

}}>
</View>
<Text style={{fontSize:12, fontWeight:'400'}}>
Cardiologist 

</Text>
<View style={{
borderStyle: 'solid',
borderWidth: 2,
height:2,
backgroundColor:'#000',
borderRadius: 12,
marginTop:6,
marginLeft:10,


}}>
</View>
<Text style={{marginLeft:10,fontSize:12, fontWeight:'400'}}>
8min ago</Text>

</View>

</View>
</View>
    <Entypo name="dots-three-vertical" size={24} color="black"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
    </View>
    <Text style={{paddingLeft:12,paddingBottom:12}}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.#new_venture </Text>
    <View style={{marginBottom:50}}>
    <Image source={require('../assets/images/grid1.png')} style={{width:360, alignSelf:'center'}}></Image>
    <View style={{backgroundColor:'#45B5C0', borderRadius:50/2, width:30, height:30, padding:2,marginTop:-80,alignSelf:'center', shadowColor:'#000', zIndex:1}}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>
    </View>
    
    <View style={{flexDirection:'row',margin:15}}>
    <View style={{}}>
    <Image source={require('../assets/images/grid3.png')} style={{width:113}}></Image>
    <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>

    </View>
    <View style={{}}>
    <Image source={require('../assets/images/grid4.png')} style={{width:113, marginLeft:10 }}></Image>
    <View style={styles.careticon}>
    <AntDesign name="caretright" size={24} color="#fff"  />
    </View>

    </View>
    <View>
    <Image source={require('../assets/images/grid5.png')} style={{ width:113, marginLeft:10}}></Image>
    <View style={styles.plusthree}>
    <Text style={{color:'#fff',fontSize:20,fontWeight:'900'}}>3+</Text>
    </View>
    </View>
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
              <View style={{ flexDirection: 'row',  }}>
              <View style={{padding:5,marginLeft:20, flexDirection:'row'}}>
              <FontAwesome name="heart" size={22} color="red" /><Text style={{paddingLeft:10,color:'#51668A'}}>21k</Text>

              </View>
              <View style={{padding:5, flexDirection:'row'}}>
              <FontAwesome5 name="comment-alt" size={22} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>2.1k</Text>

              </View>
              <View style={{padding:5, flexDirection:'row'}}>
              <FontAwesome name="send" size={22} color="black" /><Text style={{paddingLeft:10,color:'#51668A'}}>4k</Text>

              </View>
             
               </View>
               </View>
               <View style={{flexDirection:'row',marginLeft:20 , marginTop:10, marginBottom:10}}>
                <Image source={require('../assets/dr-icon/Oval.png')} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
                <Image source={require('../assets/dr-icon/Oval.png')}style={{zIndex:1, marginLeft:-10, borderColor:'#000'}} ></Image>
               <Text style={{fontSize:12, fontWeight:'400',color:'#687690',padding:5}}>Liked by Kunal Patel and 44,686 others</Text>
               </View>
               
   </Card>
  </ScrollView>
 </SafeAreaView>
  )
}
const styles = StyleSheet.create({
 
  box1:{
     backgroundColor:'#FFF',
    borderBottomWidth:1,
    width:150,
     marginLeft:20,
     alignSelf:'center'
  
  },
  box2:{
    backgroundColor:'#FFF',
    marginLeft:50,width:150, 
     alignItems:'center',
     height:50,
  },
 
    cardlg:{
    //   width:320,
      height:400,
     marginBottom:16,
     borderRadius: 20 / 2 ,
      
    },
    careticon:{
      backgroundColor:'#45B5C0',
       borderRadius:50/2,
       width:30,
       height:30,
       padding:2,
       marginTop:-60,
       marginBottom:30,
      alignSelf:'center',
       shadowColor:'#000',
       zIndex:1
    },
    plusthree:{
       fontSize:18,
       borderRadius:50/2,
       marginTop:-60,
       marginBottom:30,
       alignSelf:'center',
       zIndex:1
    },
     container: {
    
width:200,
    
  display:'flex',
      backgroundColor: '#ecf0f1',
    },
})
export default ProfileScreen