import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import { styles } from '../profilestyle';
import FastImage from 'react-native-fast-image'
import icon from '../../../assets/images/Vector.png';

const OthersProfileScreen = ({navigation,route}) => {
    const {data} =route?.params;

    useEffect(() => {
        navigation.setOptions({ title: 'Profile' });
    },[])
    
  return (
    <SafeAreaView style={{backgroundColor: '#E6E6E6'}}>
      <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15}}>
            <View style={styles.profilePicContainer}>
            <View style={{borderWidth:2,borderColor:'#2C8892',borderRadius:50,padding:5}}>
                <FastImage
                    style={styles.otherProfileScreenimg}
                    source={data.userprofile && {
                        uri:data.userprofile,
                        priority: FastImage.priority.normal,
                    }}
                />
            </View>
            <View style={styles.profileDetails}>
                <Text style={styles.profilescreenName}>{data?.username} <Image source={icon}/></Text>    
                <Text style={styles.profileDesignationpro}>{data?.speciality} | Bangalore</Text>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <Text style={{color:'#2376e5', fontFamily:"Inter-Regular"}} onPress={() => navigation.navigate('OtherProfileView',{data})}>View Profile | </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{color:'#2376e5',fontFamily:"Inter-Regular"}}>Unfollow</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            <View style={{flexDirection:'row', marginTop:20}}>
                <View style={styles.ScoreContainer}>
                    <Image source={require('../../../assets/dr-icon/d.png')} style={styles.scoreImg}/>
                    <Text style={styles.coins}>280</Text>
                </View>
                <View style={styles.ScoreContainer}>
                    <Image source={require('../../../assets/dr-icon/coupon1.png')} style={styles.scoreImg}/>
                    <Text style={styles.coins}>0</Text>
                </View>
            </View>
    </View>
    <View style={styles.UserDataConatiner}>
          <View style={styles.UserDataNameCont}>
            <Text style={styles.UserDataName}>Post (0)</Text>
          </View>
         <TouchableOpacity style={styles.UserDataName} onPress={() => navigation.navigate('OthersProfileFollowers')}>
            <Text style={styles.UserDataName} >Followers (0)</Text>
          </TouchableOpacity>
         <TouchableOpacity style={styles.UserDataName} onPress={() => navigation.navigate('OthersProfileFollowing')}>
            <Text style={styles.UserDataName}>Following (0)</Text>
          </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default OthersProfileScreen;