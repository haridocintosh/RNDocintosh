import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const Sentimentrix3 = () => {
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
<View style={{alignSelf:'center', marginTop:40}}>
    <Image source={require('../assets/images/sentimentrix3.png')}/>
</View>
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
  <Text style={{marginTop:10, fontSize:16, fontWeight:'600', color:'#071B36',lineHeight:24}}>For treating allergic rhinitis, would you recommend an intake of probiotics for your patients?</Text>
  <View style={styles.margintop}></View>
    
    <Card style={styles.card}>
     <View style={{flexDirection:'row', }}>
    <View style={styles.count}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400', marginVertical:5}}>A</Text>
      </View>
      <View>
        <Text style={{padding:10, lineHeight:21, fontSize:14, fontWeight:'400', width:300}}>
        The flow of blood to tissues beyond the clot may be cut off
        </Text>
      </View>
    
     
    </View>
     
   
    </Card>
    <View style={styles.margintop}></View>

    <Card style={styles.card}>
     <View style={{flexDirection:'row', }}>
    <View style={styles.count}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400', marginVertical:5}}>B</Text>
      </View>
      <View>
        <Text style={{padding:10, lineHeight:21, fontSize:14, fontWeight:'400', width:300}}>
        Platelets stick to the edges of the cut and to one another, forming a plug
        </Text>
      </View>
    
     
    </View>
     
   
    </Card>
    <View style={styles.margintop}></View>

    <Card style={styles.card}>
     <View style={{flexDirection:'row', }}>
    <View style={styles.count}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400', marginVertical:5}}>C</Text>
      </View>
      <View>
        <Text style={{padding:10, lineHeight:21, fontSize:14, fontWeight:'400', width:300}}>
        You would bleed to death
        </Text>
      </View>
    
     
    </View>
     <View style={styles.margintop}></View>
   
    </Card>
    <View style={styles.margintop}></View>

    <Card style={styles.card}>
     <View style={{flexDirection:'row', }}>
    <View style={styles.count}>
      <Text style={{alignSelf:'center', fontSize:14, fontWeight:'400', marginVertical:5}}>D</Text>
      </View>
      <View>
        <Text style={{padding:10, lineHeight:21, fontSize:14, fontWeight:'400', width:300}}>
        A scab will form on the skin surface
        </Text>
      </View>
    
     
    </View>
     
   
    </Card>
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
export default Sentimentrix3