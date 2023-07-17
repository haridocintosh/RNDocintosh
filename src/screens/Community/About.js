import { View, Text,SafeAreaView ,TextInput,Image,TouchableOpacity,Modal,ImageBackground, ScrollView,Animated,Share} from 'react-native'
import React from 'react';
import {styles} from './CommunityStyles'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from '../../navigation/ReuseLogics';

const About = ({navigation,route}) => {
    const {data} = route?.params;
    console.log(data);
    
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1, }}>
        <View style={{opacity:1}}>
            <ImageBackground source={require("../../assets/images/RectangleBgImage.png")} style={[styles.RectangleBgImage]}>
                <LinearGradient colors={["#000", "transparent"]}>
                    <View style={styles.joinHeaderView}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection:'row'}}>
                            {Icon('Ionicons','arrow-back',25,'#fff')} 
                            <Text style={{fontSize:16,marginLeft:10,color:"#fff",fontFamily:'Inter-SemiBold'}}>About</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <Image 
                    source={require('../../assets/images/CommunityPPic3.png')} 
                    style={styles.CommunityAboutProfilePic}/>
            </ImageBackground>
        </View>
        <View style={styles.AboutDetailsContainer}>
            <Text style={styles.AboutDetailsText}>
                {data?.description} 
            </Text>
        </View>
    </SafeAreaView>
  )
}

export default About