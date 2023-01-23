import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

import { View, Text,Image,
  SafeAreaView,ScrollView,TouchableHighlight,ImageBackground,TextInput,StyleSheet, Dimensions } from 'react-native'
import {  Card } from 'react-native-paper';
//  import {Button  } from 'react-native-elements';
 import { CheckBox } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 , MaterialCommunityIcons,AntDesign,Fontisto} from '@expo/vector-icons';
import mask from '../assets/images/Mask.png';
import Svg, { Path } from 'react-native-svg';
import Animated from 'react-native-reanimated';
// import waveComponent from '../components/waveComponent';


const EngageScreen = () => {
    
    const navigation = useNavigation();
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    var [ isPress, setIsPress ] = React.useState(false);
    var touchProps = {
      activeOpacity: 1,
      underlayColor: 'blue',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
    };

  return (
    <SafeAreaView style={{flex: 1,}}>
    <ScrollView
     showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{padding:10}}>
<View style={{marginTop:20}}>

<View style={{backgroundColor:'#45B5C00D', zIndex:1}}>
<View style={{flexDirection:'row'}}>
<View style={{backgroundColor:"#fff", alignSelf:'center', borderRadius:50, width:50 , alignItems:'center', height:50, borderColor:'#2C8892', borderWidth:5}}>
{/* <View>{waveComponent}</View> */}
 <Text style={{marginVertical:10, marginBottom:0 , fontSize:16, fontWeight:'600'}}>4/7</Text>
 </View>
    <Text style={styles.question}>What happens when a clot occurs in an undamaged blood vessel?
 </Text>
</View>



 <Card style={styles.Qcard}>
 <View style={{display:'flex'}}>
 <Text style={styles.ans}>The flow of blood to tissues beyond the clot may be cut off</Text>
<View style={styles.chekradiobtn}>

</View>
 </View>

 </Card>
 <Card style={styles.Qcard}>
 <View style={{display:'flex'}}>
 <Text style={styles.ans}>Platelets stick to the edges of the cut and to one another, forming a plug</Text>
<View style={styles.chekradiobtn}>

</View>
 </View>


 </Card>
 <Card style={styles.greecrd}>
 <View style={{display:'flex'}}>
 <Text style={styles.ans}>You would bleed to death</Text>
<View style={styles.chekradiobtn}>

</View>
 </View>


 </Card>

 <Card style={styles.Qcard}>
 <View style={{}}>
 <Text style={styles.ans}>A scab will form on the skin surface</Text>
<View style={styles.chekradiobtn}>

</View>
 </View>


 </Card>
  </View>
  <Svg 
 height={200}
 width={Dimensions.get('screen').width}
 style={{marginTop:-40}}
 > 
 <Path 
 fill="#45B5C00D"
 d="M0,64L20,64C40,64,80,64,120,74.7C160,85,200,107,240,112C280,117,320,107,360,96C400,85,440,75,480,69.3C520,64,560,64,600,74.7C640,85,680,107,720,112C760,117,800,107,840,96C880,85,920,75,960,85.3C1000,96,1040,128,1080,144C1120,160,1160,160,1200,133.3C1240,107,1280,53,1320,58.7C1360,64,1400,128,1420,160L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"/>
 </Svg>

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


  },
  imgcolor:{
    width:'50%'
  },
 question:{
    margin:20,
    fontSize:16,
    fontWeight:'600',
    color:'#071B36',
    alignSelf:'center',
 },
 Qcard:{
    backgroundColor:'#0801010D',
     width:"100%",  
     marginTop:20,
     shadowColor:'#fff',
     shadowOpacity:0,
     shadowOffset:0,
     shadowRadius:0,
     borderColor:'#fff',
    
     
 },
 greecrd:{
 backgroundColor:'#42B93D45',
 width:"100%",  
 marginTop:20,
 shadowColor:'#fff',
 shadowOpacity:0,
 shadowOffset:0,
 shadowRadius:0,
 borderColor:'#fff',
 },
 ans:{
    alignSelf:'flex-start',
    padding:10
 },
 
 chekradiobtn:{
    marginVertical:18,
    position:'relative'
 }

 });
export default EngageScreen