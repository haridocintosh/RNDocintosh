import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import CustomButton from '../components/CustomButton';

const styles = {
  wrapper: {
    backgroundColor: 'transparent',
    height:"100%",
  },
  slide:{
    backgroundColor: 'transparent',
    width:Dimensions.get('window').width,
    height:"100%",
  },
  sliderImgBox:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    flex: 1,
    height:"100%"
  },
  imgBackground: {
      backgroundColor: 'transparent',
    position: 'absolute',
  },
  image: {
    width:Dimensions.get('window').width/1,
    height:"100%",
    resizeMode : "contain"
  },
  imagelogo: {
    width: 57,
    height: 50,
    position: "absolute",
    top: 50,
    left: 50,
    transform: [{
      translateX: 120
    }, {
      translateY: 95
    }],
  },
  sliderText: {
    fontSize: 32,
    paddingTop: 40,
    color: '#071B36',
    paddingLeft: 32,
    paddingRight:40,
    fontFamily:"PlusJakartaSans-Bold"
  },
  sliderPara: {
    fontSize: 14,
    paddingTop: 12,
    color: '#071B36',
    paddingLeft: 32,
    width: 300,
    fontFamily:"Inter-Regular",
    lineHeight:18 
  },
  ragisterbutton: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    marginBottom: -10,
    display:"flex",
    alignItems:'center'
  },
  ragistertext0: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ragistertext2: {
    fontSize: 16,
    fontWeight: '400',
    color: '#8C97AB',
  },
  DotStyle: {
    width: 6,
    height: 6,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: '#F8B84E',
    // position:'absolute'
  },
  activeDotStyle: {
    backgroundColor: '#F8B84E',
    width: 32,
    height: 6,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
}
export const Slider_comp = () => {
  const navigation = useNavigation();
  const animationRef = useRef(null)


  useEffect(() => {
    animationRef.current?.play()
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

  return ( 
    <View style={styles.container}>
      <StatusBar barStyle = "light-content"/>
      <Swiper 
        style={ styles.wrapper} 
        dot={<View style={styles.DotStyle}/>}
        activeDot={<View style={styles.activeDotStyle}/>}
        paginationStyle={{bottom: -15,right:275}}
        loop={false}
        autoplay={true}
      >
          <View style={styles.slide} >
            <View style={styles.sliderImgBox}>
              <Image style={styles.image} source={require('../assets/intro/Image3.png')}/>
            </View> 
            <Text style={styles.sliderText}>Earn while you learn</Text>    
            <Text style={styles.sliderPara}>Take part in the survey and be rewarded.</Text>
          </View> 

          <View style={styles.slide}>
            <View style={styles.sliderImgBox}>
              <Lottie  ref={animationRef} source={require('../assets/intro/lone.json')}/>
            </View>
            <Text style={styles.sliderText }>Share for fame</Text> 
            <Text style={styles.sliderPara}>Let's talk about your practice insights and milestones.</Text> 
          </View>
      </Swiper> 

      <View style = {styles.ragisterbutton} >
        <CustomButton label = {'Register'} onPress = {() => navigation.navigate('Register')}/>
      </View> 

      <View style={styles.ragistertext0}>
        <Text style={styles.ragistertext2}>Already a member ?</Text> 
        <TouchableOpacity onPress = {() => navigation.navigate('LoginScreen')} >
          <Text style={{ color: '#2376E5', fontWeight: '600',fontSize: 16,fontFamily:"Inter-Regular"}}> Login </Text> 
        </TouchableOpacity> 
      </View>
    </View>
  )
}

export default function IntroStack() {
  return( 
    <View style={{flex: 1,justifyContent: "center",alignItems: "center"}}>
      <Slider_comp/>
    </View>
  );
}