import { View, Text,SafeAreaView, ScrollView, StyleSheet,TouchableOpacity, Image } from 'react-native'
import React,{useEffect,useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './profilestyle';
import { getFollowingDataApi } from '../../../redux/reducers/postData';
import OptionModal from './OptionModal';

const ProfileScreenFollowing = ({navigation,route}) => {
   const [modalVisible, setModalVisible] = useState(false);
   
   const [postId, setPostId] = useState(false);
   const {followingData} = route.params;
   
   useEffect(() => {
      navigation.setOptions({ title:'Following'});
   },[])

   const handleOptionModal = (data) =>{
      setPostId(data?.follow_to);
      if(postId == data?.follow_to){
         setModalVisible(!modalVisible);
         return;
      }
      setModalVisible(true);
   }

   const handleOtherProfile = (data) =>{
      
      navigation.navigate('OtherProfileView',{data})
   }
   
  return (
   <SafeAreaView style={styles.Follwerscontainer}>
   <ScrollView
     showsVerticalScrollIndicator={false}
     nestedScrollEnable={true}>
       <View style={styles.followerHeader}>
           <Text style={styles.followerHeader}>{followingData?.length} Following</Text>
       </View>
       {followingData?.length > 0 ? followingData?.map((data,index) => {
          return(
          <View style={styles.followerContainer} key={index}>
                <View style={styles.followerLhs}>
                  <TouchableOpacity onPress={() => handleOtherProfile(data)}>
                     <Image source={{uri:data.userprofile}} style={styles.profileimgfollower}/>
                  </TouchableOpacity>
                   <View style={styles.followerName}>
                   <TouchableOpacity onPress={() => handleOtherProfile(data)}>
                      <Text style={styles.followerNameText}>{data.username}</Text>
                   </TouchableOpacity>
                      <Text style={styles.followerSpecialist}>{data.speciality}</Text>
                   </View>
                </View>
                <TouchableOpacity style={styles.followerLhs} onPress={() => handleOptionModal(data)}>
                   <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                </TouchableOpacity>
                {postId == data?.follow_to && 
                <OptionModal modalVisible={modalVisible}/>}
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