import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome5,FontAwesome,MaterialCommunityIcons,Feather,MaterialIcons,Ionicons,AntDesign ,Entypo,Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Card, TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements';




    const ReportPost = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView>
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}
    style={{}}
    
    >   
<View style={{padding:10}}>
  <View style={{marginTop:40}}>
    <Card style={styles.buycard}>
      <View style={styles.docbody}>
        <Image style={styles.doccoin} source={require('../assets/dr-icon/d.png')}/>
    
    <View style={{marginLeft:12}}>
    <Text style={{fontSize:28, marginTop:4}}>782</Text>
    <Text style={{fontSize:12, marginTop:4}}>Total Balance</Text>
    
    </View>
    <View style={{flexDirection:'row-reverse', alignSelf:'center', marginHorizontal:'30%' }}>
        <Text style={{color:'#2376E5'}}>Buy DocCoins</Text>
      </View>
    
      </View>
      
    </Card>
    <View style={styles.margintop}></View>
    <Text style={styles.paymethodhead}>
    Select Payment Method
    </Text>
    <TouchableOpacity>
    <View style={{marginBottom:10}}>

  
    <Card style={styles.doccoinscard}>

        <View style={{flexDirection:'row', margin:10}}>
        <Image style={{}} source={require('../assets/dr-icon/d.png')}/>

            <Text style={styles.doccoinstxt}>
            DocCoins
            </Text>
        </View>
        <View style={{marginHorizontal:20, marginVertical:10}}>
            <Text style={{fontSize:12, fontWeight:'400', width:250}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:15, marginVertical:5 }}>
        <Text style={styles.pay}>
            Pay : 
            </Text>
        <Image style={styles.d} source={require('../assets/dr-icon/d.png')}/>

            <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, marginVertical:5}}>
           100
            </Text>
        </View>
        
    </Card>
    </View>
    </TouchableOpacity>
    <View style={styles.margintop}></View>
<TouchableOpacity>
<View style={{marginBottom:10}}>
    <Card style={styles.doccoinscard}>
        <View style={{flexDirection:'row', margin:20}}>
        <Image style={{}} source={require('../assets/dr-icon/payimg.png')}/>

            <Text style={styles.doccoinstxt}>
            Rasorpay
            </Text>
        </View>
        <View style={{marginHorizontal:20, marginVertical:0}}>
            <Text style={{fontSize:12, fontWeight:'400', width:250}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        </View>
        <View style={{flexDirection:'row',marginHorizontal:20, marginVertical:5 }}>
        <Text style={styles.pay}>
            Pay : 
            </Text>
        

            <Text style={{fontSize:14, fontWeight:'400', lineHeight:20, marginHorizontal:10, marginVertical:6}}>
            <FontAwesome5 name="rupee-sign" size={16} color="black" />40
            </Text>
        </View>
    </Card>
    </View>
    </TouchableOpacity>
  </View>
  
</View>
       <View style={{ margin:10}}>
  <Button
  title="Confirm & Pay"
 
  buttonStyle={{
   
     bottom:10,
     alignSelf:'center',
     marginTop:"25%", 
     width:'100%',
     height:48,
     alignSelf:'center',
     borderColor: '#fff',
     borderRadius:15/2,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff'
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>   
        </ScrollView>
        </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  buycard:{
    borderRadius:10/2,
    borderStyle:'dashed',
    borderWidth:1,
    borderColor:'#2376E5',
    backgroundColor:'#D5DEED'
},
  docbody:{
   flexDirection:'row',
   padding:20,
},
paymethodhead:{
 
fontSize:16,
fontWeight:'600',
lineHeight:24
  },
  margintop:{
    marginTop:20
  },
  doccoin:{width:52, height:52}
  ,
  doccoinscard:{
    borderRadius:20/2,
    top:10,
    borderWidth:1,
    borderColor:'#2C8892',
    "&:hover": {
        borderColor: "#fff"
    },
   
    
  },
  doccoinstxt:{
     fontSize:16,
     fontWeight:'500',
     lineHeight:20,
     marginVertical:5,
     marginHorizontal:10,

    },

  pay:{fontSize:14,
     fontWeight:'400',
     lineHeight:20,
     marginVertical:5,
     color:'#51668A'},
     d:{
         width:16,
         height:16,
         marginVertical:7,
         marginHorizontal:3}

})
export default ReportPost