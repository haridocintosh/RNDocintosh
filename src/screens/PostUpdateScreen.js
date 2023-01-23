import React,{useState } from 'react';
import { View, Text ,Image,SafeAreaView,TextInput, ScrollView, Alert,  StyleSheet, Pressable,} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView, ScrollView } from 'react-native-web';
import profileimg from '../assets/images/p2.png';
import { FontAwesome5,FontAwesome,Feather,Fontisto,Entypo } from '@expo/vector-icons';
import icon from '../assets/images/Vector.png';
import { Button , } from "react-native-elements";
import Modal from "react-native-modal";
import docprofile from '../assets/images/docprofile.png'
import d from '../assets/dr-icon/d.png'
import { Card } from '@rneui/base';
import successic from '../assets/images/Ic_Success.png'





const ProfileScreen = () => {
  
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff',}}>
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
    <View style={{marginHorizontal:10}}>
      <View style={{paddingHorizontal:10, backgroundColor:'#F2FAFA', marginTop:50, margin:10, borderRadius:20/2, borderStyle:'dashed', borderWidth:2, borderColor:'#D5DEED'}}>
        <View style={{alignItems:'center', display:'flex', marginTop:20}}>
        <Image source={require('../assets/images/docprofile.png')} style={{zIndex:2}}/>
        <View style={{marginTop:20, zIndex:1,}}> 
        <Image source={require('../assets/dr-icon/d.png')} style={{width:50, height:50, zIndex:1, marginTop:-70,marginRight:70, display:'flex'}} />
        </View>
        <View style={{marginTop:-10}}>
            <Text>Gift DocCoins to Dr.Vineetha</Text>
        </View>
        <View style={{flexDirection:'row', margin:5, marginBottom:10,}}>
            <Text>Available</Text>
            <Image source={require('../assets/dr-icon/d.png')} style={{width:18, height:18}}></Image>
            <Text>782</Text>
        </View>
   
       
    </View>  

</View>
    <View
      style={{
        backgroundColor: '#fff',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        marginHorizontal:15,
        marginTop:20,
        marginBottom:32
      }}>
      <Text style={{color:'#071B36'}}>Enter DocCoins*</Text>
      <View style={styles.positionRelative}>
      <TextInput  style={styles.positionRelative}
             value="100"
             keyboardType="numeric"
             placeholder='Enter DocCoins'
             
           />
           <Image source={require('../assets/dr-icon/d.png')} style={{width:24, height:24, position:'absolute', alignSelf:'flex-end'}}/>

      </View>
     
    </View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>
       <View style={{backgroundColor:'#F2FAFA', width:100, height:40,  borderRadius:20/4,marginRight:20}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>100</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#F2FAFA', width:100, height:40,  borderRadius:20/4,marginRight:20}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>250</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#F2FAFA', width:100, height:40,   borderRadius:20/4}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>500</Text>
            </View>
        </View>
        
      </View>
      <View style={{flexDirection:'row',marginTop:16, alignSelf:'center', }}>
       <View style={{backgroundColor:'#F2FAFA', width:100, height:40,  borderRadius:20/4, marginRight:20}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>1000</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#F2FAFA', width:100, height:40,  borderRadius:20/4,marginRight:20}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>2500</Text>
            </View>
        </View>
        <View style={{backgroundColor:'#F2FAFA', width:100, height:40,   borderRadius:20/4}}>
            <View style={{flexDirection:'row', alignSelf:'center'}}>
                <Image source={require('../assets/dr-icon/d.png')} style={{marginVertical:10, width:24, height:24}}/>
                <Text style={{fontSize:16, fontWeight:'600', marginVertical:10, marginLeft:8}}>5000</Text>
            </View>
        </View>
        
      </View>      
<View style={{padding:10, marginTop:20,  }}>
<Button
            onPress={toggleModal}
              title="Send Gift"
              type="solid"
              buttonStyle={{
                borderColor: '#2C8892',
                backgroundColor:'#2C8892',
                borderRadius:15/2,
                height:48
              }}
              titleStyle={{
                color:'#FFFF'
              }}/>
</View>
        </View>

        <Modal isVisible={isModalVisible} width={320} style={{alignSelf:'center', }}>
        <View>
        <Card >
        <Entypo name="cross" size={20} color="black" onPress={toggleModal} style={{alignSelf:'flex-end'}} />
        <Image source={successic} style={{alignSelf:'center', marginBottom:25}}></Image>
          <Text style={{fontSize:18, fontWeight:'600',alignSelf:'center'}}>Successfully Gifted DocCoins!</Text>
          <Text style={{fontSize:14, fontWeight:'400',alignContent:'center',textAlign:'center',marginTop:16, color:'#51668A'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. </Text>
          
          
          </Card>
        </View>
      
      </Modal>
    </ScrollView>
  </SafeAreaView>
  );
}

        
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    
    labels:{
        color:'#071B36'
        
    },
    positionRelative:{
      position:'relative'
    }
    
  });
export default ProfileScreen;