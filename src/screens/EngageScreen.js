import React, { useEffect, useState } from 'react'
import { View, Text,Image,
  SafeAreaView,ScrollView,ActivityIndicator,StyleSheet,TouchableOpacity,ImageBackground } from 'react-native'
import {  Card } from 'react-native-paper';
import { getLocalData } from '../apis/GetLocalData';

const EngageScreen = ({navigation}) => {
  const [loader, setLoader] = useState(true);
  const [userdata,setuserdata]=useState({
    role:""
  })

useEffect(() => {
  navigation.setOptions({ title: 'Engage'});
  getLocalData('USER_INFO').then((res) => {
    const reData = res?.data;
    setuserdata(reData);
    setuserdata({ ...userdata, 
      role:`${reData?.role}`
    });
  });
    setLoader(false)
  }, [])

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
  }
  //   QuizLevels
  return (
    <SafeAreaView style={{flex: 1,backgroundColor: '#F2FAFA'}}>
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} >
        <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitleQuiz}>Quiz</Text>
                <View style={styles.cartOffers}>
                    <Text style={styles.cartOffersText}>Earn</Text>
                    <Image source={require("../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                    <Text style={styles.cartOffersText}>100</Text>
                </View>
                </View>
                <TouchableOpacity>
                <Image source={require('../assets/images/QuizTimer.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>Bleeding Disorders</Text>
            <Text style={styles.trendTitleContent}>Can you answer 10 questions in 60 seconds?</Text>
            <ImageBackground source={require('../assets/images/QuizWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer} onPress={() => navigation.navigate('QuizLevels')}>
                    <Text style={styles.buttonText}>Participate</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>

        {userdata.role <='4' && <View style={styles.container}>
            <View style={styles.titleDtails}>
                <View>
                <Text style={styles.CartTitleSurveys}>Surveys</Text>
                <View style={styles.cartOffers}>
                    <Text style={styles.cartOffersText}>Earn</Text>
                    <Image source={require("../assets/dr-icon/dcoin.png")} style={styles.docCoin}/>
                    <Text style={styles.cartOffersText}>100</Text>
                </View>
                
                </View>
                <TouchableOpacity>
                <Image source={require('../assets/images/Surveys.png')} style={styles.cartImages}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.trendTitle}>COVID-19 and its Effects</Text>

            <Text style={styles.trendTitleContent}>We appreciate your feedback.</Text>
            <ImageBackground source={require('../assets/images/SurveysWave.png')} style={styles.CartWave}>
                <TouchableOpacity style={styles.ButtonContainer} onPress={()=>{ navigation.navigate('Surveys') }}>
                    <Text style={styles.buttonText}>Participate</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>}

   </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  paddingLeft:{
  paddingLeft:10,
  },
  cardfooterstyle:{
    
  // zIndex:9999,
  marginTop:-80,

  },
  imgcolor:{
    width:'100%'
  },
 
  container:{
    backgroundColor:"#fff",
    borderRadius:10,
    overflow:'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 2,
    margin:10
},
titleDtails:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15
},
cartImages:{
    width:70,
    height:70,
    
},
CartTitle:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    color:'#8499BD',
},
CartTitleQuiz:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    color: '#404DB7',
},
CartTitlePolls:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    color: '#DC5343',
},
CartTitleSurveys:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    color: '#008D85',
},
CartTitleSentimetrix:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    color: '#006592',
},
cartOffersText:{
    fontFamily:'PlusJakartaSans-Bold',
    marginRight:10
},
cartOffers:{
    flexDirection:'row',
    marginTop:10,
},
docCoin:{ 
    width: 20, 
    height: 20, 
    marginRight:7 
},
CartWave:{
    width:'100%',
    height:145,
    marginTop:-70,
    position:'relative'
},
trendTitle:{
    fontFamily:'PlusJakartaSans-Bold',
    fontSize:18,
    paddingHorizontal:15
},
trendTitleContent:{
    color:'#51668A',
    padding:15
},
ButtonContainer:{
    position:'absolute',
    right:15,
    bottom:15,
    paddingHorizontal:40,
    paddingVertical:10,
    borderRadius:5,
    backgroundColor:'#2C8892'
},
buttonText:{
    color:'#fff',
    fontFamily:'PlusJakartaSans-Bold',
},
 });
export default EngageScreen;