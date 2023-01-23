import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';
import { styles } from './profilestyle';
import { getFollowingDataApi } from '../../../redux/reducers/postData';


const ProfileScreenFollowing = ({navigation,route}) => {
   const {followingData} = route.params;
   useEffect(() => {
      navigation.setOptions({ title: 'Following' });
    },[])
  return (
   <SafeAreaView style={styles.Follwerscontainer}>
   <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}>
       <View style={styles.followerHeader}>
           <Text style={styles.followerHeader}>{followingData?.length} Followers</Text>
       </View>

       {followingData?.length > 0 ? followingData?.map((data,index) => {
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
       <Text style={styles.Nodata}>You're not following anyone</Text>
       }
   </ScrollView>
</SafeAreaView>
  )
}

export default ProfileScreenFollowing;