import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React,{useEffect, useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { styles } from './profilestyle';
import { getLocalData } from '../../apis/GetLocalData';
import { getFollowersDataApi } from '../../../redux/reducers/postData';
import { useDispatch } from 'react-redux';


const ProfileScreenFollowers = ({navigation,route}) => {
   const {followersData} = route.params;

   useEffect(() => {
      navigation.setOptions({ title: 'Followers' });
    },[])
  return (
    <SafeAreaView style={styles.Follwerscontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>{followersData?.length} Followers</Text>
            </View>

            {followersData?.length > 0 ?followersData?.map((data,index) => {
               return(
               <View style={styles.followerContainer} key={index}>
                     <View style={styles.followerLhs}>
                        <Image source={{uri:data.userprofile}} style={styles.profileimgfollower}/>
                        <View style={styles.followerName}>
                           <Text style={styles.followerNameText}>{data.username}</Text>
                           <Text style={styles.followerSpecialist}>{data.speciality}</Text>
                        </View>
                     </View>
                     <View style={styles.followerLhs}>
                        <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                     </View>
               </View>
               )
            })
            : 
            <Text style={styles.Nodata}>You don't have any followers yet</Text>
         }
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreenFollowers;
