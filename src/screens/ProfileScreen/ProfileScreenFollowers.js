import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './profilestyle';
import { getLocalData } from '../../apis/GetLocalData';
import { getFollowersDataApi } from '../../../redux/reducers/postData';
import { useDispatch } from 'react-redux';
import OptionModal from './OptionModal';


const ProfileScreenFollowers = ({navigation,route}) => {
   const [modalVisible, setModalVisible] =useState(false)
   const {followersData} = route.params;
   

   useEffect(() => {
      navigation.setOptions({ title: 'Followers' });
    },[])
    const handleOtherProfile = (data) =>{
      console.log(data);
    }
    const handleOptionModal = () =>{
      setModalVisible(false)
    }
  return (
    <SafeAreaView style={styles.Follwerscontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>{followersData?.length} Followers</Text>
            </View>
            {followersData?.length > 0 ? followersData?.map((data,index) => {
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
                     <TouchableOpacity style={styles.followerLhs} onPress={() => handleOptionModal()}>
                        <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                     </TouchableOpacity>
                     <OptionModal modalVisible={modalVisible}/>
               </View>
               )
            })
            : 
            <View>
               <Image source={require('../../assets/images/followMe.png')} style={{width:'100%',height:300,alignSelf:'center',resizeMode:'contain'}}/>
            </View>}
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreenFollowers;
