import {
  View,
  Image,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import CustomButton from '../components/CustomButton';
const styles = {
  wrapper: {
    backgroundColor: 'transparent',
    paddingTop: 20,
    height:"100%"
  },

  slide: {

    backgroundColor: 'transparent',
    width:"100%",
height:"100%"
 
  },
  sliderImgBox:{
    flex:1,
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
    width:360,
   height:333,
    position: "relative",
   
    resizeMode : "cover"
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
    // fontWeight: "700",
    lineHeight: 40,
    paddingLeft: 32,
    paddingRight:40,
    fontFamily:"PlusJakartaSans-Bold"
    // width: 300,
  },
  sliderPara: {
    fontSize: 14,
    paddingTop: 12,
    color: '#071B36',
    fontWeight: "500",
    lineHeight: 20,
    paddingLeft: 32,
    width: 281,
    fontFamily:"Inter-Regular" 
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

}
export const Slider_comp = () => {
  const navigation = useNavigation();
  const animationRef = useRef(null)
  // const [fontsLoaded] = useFonts({
  //   'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  //   'PlusJakartaSans-Regular': require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
  //   'PlusJakartaSans-Bold':require('../assets/fonts/PlusJakartaSans-Bold.ttf')
  // });
  // if(!fontsLoaded) {
  //   return null;
  // }

  useEffect(() => {
    animationRef.current?.play()
    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

  return ( 
  <View style = {
      styles.container
    } >
    <StatusBar barStyle = "light-content" />
    <Swiper style = { styles.wrapper}
    dot = {
      <View
      style = {
        {
          width: 6,
          height: 6,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7,
          backgroundColor: '#F8B84E',
        }
      }
      />
    }
    activeDot = {
    <View
      style = {
        {
          backgroundColor: '#F8B84E',
          width: 32,
          height: 6,
          borderRadius: 7,
          marginLeft: 7,
          marginRight: 7
        }
      }
      />
    }
    paginationStyle = {
      {
        bottom: -15,
        left: -220
      }
    }
    loop = {
      false
    } >
    {/* <View style = {styles.slide}>
    <View style={styles.sliderImgBox}>
        <Image style = {styles.image} source = {require('../assets/intro/Image1.png')} resizeMode = "cover" />
        <Image style = {styles.imagelogo} source = {require('../assets/intro/logo1.png')}resizeMode = "cover" />
    </View>
    <Text style = {styles.sliderText}>Create & Join Discussion Groups </Text> 
    <Text style = {styles.sliderPara}>Impedit quo minus id quod maxime placeat facere possimus. </Text>
    </View> */}

      <View style ={styles.slide}>

    
      {/* <Image style ={styles.image} source = {require('../assets/intro/Image2.png')} resizeMode = "cover" /> */}
      <View style={styles.sliderImgBox}>
        {/* <Image style = {styles.image} source = {require('../assets/intro/Image2.png')} resizeMode = "cover" /> */}
        <Lottie
      ref={animationRef}
      source={require('../assets/intro/lone.json')}/>
   
      </View>
      <Text style = {styles.sliderText }>Securely Share Posts on Social</Text> 
      <Text style = { styles.sliderPara}>Share studies, reports, and personal awards, achievements and professional milestones. Securely.</Text> 
    </View>

    <View style = {styles.slide} >
      <View style={styles.sliderImgBox}>
        <Image style = {styles.image} source = {require('../assets/intro/Image3.png')} resizeMode = "cover" />
      </View> 
      <Text style = {styles.sliderText}>Earn by Answering Polls, Surveys </Text>    
      <Text style = {styles.sliderPara}>Earn honoraria by sharing opinions in polls and taking part in surveys. </Text>
    </View> 
  </Swiper> 
    <View style = {styles.ragisterbutton} >
      <CustomButton label = {'Register'} onPress = { () => navigation.navigate('Register')}/>
      {/* <CustomButton label = {'Login'} onPress = { () => navigation.navigate('MobileScreen')}/> */}
      </View> 
      <View style = {styles.ragistertext0}>
      <Text style = {styles.ragistertext2}>Already a member ? </Text> 
      <TouchableOpacity onPress = {() => navigation.navigate('Login')} >
      <Text style = {{ color: '#2376E5', fontWeight: '600',fontSize: 16,fontFamily:"Inter-Regular"}}> Login </Text> 
      </TouchableOpacity> 
      </View>
      </View>
  )
}

export default function IntroStack() {
  return ( 
    <View style = {
      {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }
    } >
    <Slider_comp/>
    
    </View>
  );
}