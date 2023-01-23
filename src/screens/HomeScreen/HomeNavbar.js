// import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native'
// import React from 'react';
// import bgtophome from '../../assets/images/bg-top-home.png';
// import {AntDesign,Ionicons,MaterialCommunityIcons,Feather} from '@expo/vector-icons';
// import d  from '../../assets/dr-icon/d.png'
// import discount1  from '../../assets/dr-icon/discount1.png';
// import { Card } from 'react-native-paper';

// const HomeNavbar = ({userdata}) => {
//   return (
//     <View style={{backgroundColor:'#071B36', }}>
//         <Image source={bgtophome} style={{width:'100%', resizeMode:'cover'}}></Image>
        
//         <View style={{flexDirection:'row', margin:10,  marginBottom:-20, marginTop:-100}}> 
//           <TouchableOpacity  >
//             <Ionicons name="reorder-three-outline" size={34} color="#fff" onPress={() => navigation.openDrawer()} />
//           </TouchableOpacity>
//           <View style={{backgroundColor:'#FFCC00', width:4, height:24, marginTop:8, marginLeft:10}}>
//             {/* <Image source={{uri:userdata.profile}} style={{marginLeft:3, marginTop:1.5}}></Image> */}
//           </View>
//          <Text style={{fontSize:10, color:'#fff', alignSelf:'center', marginHorizontal:5}}>What’s New</Text>
//         </View>
        
//         <View style={{marginTop:-19,   height:91, width:'100%', flexDirection:'row-reverse', }}>
//           <View style={{margin:10, }}>
//             <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#ffff" />
//           </View>
//           <View style={{ margin:10}}>
//             <Feather name="search" size={24} color="#ffff" onPress={()=>{ navigation.navigate('CommonSearchScreen') }} />
//           </View>
//         </View>

//         <TouchableOpacity >
//           <View style={{borderRadius:50,marginBottom:40, marginTop:-20, backgroundColor:'#20324a', width:130, height:26, flexDirection:'row', alignSelf:'center' }} >
//             <Image source={d} style={styles.d} />
//             <Text style={styles.count}>7822 |</Text>
//             <Image source={discount1} style={{width:16, height:16, alignSelf:'flex-start', marginVertical:5,  marginHorizontal:5}}></Image>
//             <Text style={styles.count}  >102</Text>
//           </View>
//         </TouchableOpacity>

//         <Card style={{marginBottom:0, borderRadius:50,shadowRadius:10, shadowOffset:10}} onPress={() => navigation.navigate('SharePost')}>
//         <View style={{flexDirection:'row' , margin:10}} >
//           {/* <Image source={userdata.profile?{uri:userdata.profile}:''}  style={{width:32, height:32, borderRadius:50}}></Image> */}
//           <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
//           <View style={{ marginLeft:'40%', alignSelf:'center'}}>
//             <AntDesign name="pluscircle" size={26} color="#D5DEED" />
//           </View>
//         </View>
//       </Card>
//       </View>
//   )
// }

// export default HomeNavbar;

// const styles = StyleSheet.create({
//     d:{
//         width:16, 
//         height:16, 
//         alignSelf:'flex-start', 
//         marginVertical:5, 
//         marginHorizontal:5
//       },
//     count:{
//         color:'#000',
//         marginVertical:5,
//         fontSize:16, 
//         fontWeight:'600' 
//       },
// })