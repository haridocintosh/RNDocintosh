import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import icon from '../../assets/images/Vector.png';
import { Card } from 'react-native-paper';
import ProfileScreenPost from './ProfileScreenPost';
import { styles } from './profilestyle';
import { getLocalData } from '../../apis/GetLocalData';
import { getAllCoins, getFollowersDataApi, getFollowingDataApi } from '../../../redux/reducers/postData';
import { useDispatch } from 'react-redux';

const ProfileScreen = ({navigation}) => {
  const [allcoins, setAllcoins] = useState(0);
  const [followersData, setFollowersData] = useState();
  const [followingData, setFollowingData] = useState();
  const [totalPost, setTotalPost] = useState(0);
  const [userdata,setuserdata]=useState({
    fullname : "",
    profile:"",
    speciality:"",
  })
  const dispatch = useDispatch();

  const asyncFetchDailyData =  () => {
    navigation.setOptions({ title: 'Profile'});
    getLocalData('USER_INFO').then( async (res) => {
      const reData = res?.data;
      setuserdata({...userdata, 
        fullname: `${reData?.first_name} ${reData?.last_name}`,
        speciality: reData?.speciality,
        profile: reData?.profileimage,
        role:reData?.role
      });
      const postData = { user_id:reData.id};
      const allCoinsResult = await dispatch(getAllCoins(postData));
      setAllcoins(allCoinsResult.payload.coins);

      const followersResult = await dispatch(getFollowersDataApi(postData));
      setFollowersData(followersResult.payload)

      const followingResult = await dispatch(getFollowingDataApi(postData));
      setFollowingData(followingResult.payload)
    });
  }
    useEffect(()=>{
      asyncFetchDailyData();
    },[]);

    const postLength = (total)=>{
      setTotalPost(total);
    };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E6E6E6'}}>
  

    <Card style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15, borderRadius:10}}>
    <View style={styles.profilePicContainer}>
      <View>
        <Image source={{uri:userdata?.profile}} style={styles.profileScreenimg}/>
      </View>
      <View style={styles.profileDetails}>
        <Text style={styles.profilescreenName}>Dr.{userdata?.fullname} <Image source={icon}/></Text>    
        <Text style={styles.profileDesignationpro}>{userdata?.speciality} | Bangalore</Text>
       <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{color:'#2376e5', fontFamily:"Inter-Regular"}}> View / </Text>
        <Text style={{color:'#2376e5',fontFamily:"Inter-Regular"}} onPress={() => navigation.navigate('EditProfileScreen')}>Edit Profile</Text>
      </TouchableOpacity>
      </View>
    </View>

      <View style={{flexDirection:'row', marginTop:20}}>
          <View style={styles.ScoreContainer}>
            <Image source={require('../../assets/dr-icon/d.png')} style={styles.scoreImg}/>
            <Text style={styles.coins}>{allcoins[0]?.coinTotal ? allcoins[0]?.coinTotal : 0}</Text>
          </View>
          <View style={styles.ScoreContainer}>
            <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.scoreImg}/>
            <Text style={styles.coins}>0</Text>
          </View>
      </View>
    </Card>

    <View style={styles.UserDataConatiner}>
          <View style={styles.UserDataNameCont}>
            <Text style={styles.UserDataName}>Post ({totalPost})</Text>
          </View>
         <TouchableOpacity style={styles.UserDataName} 
            onPress={() => navigation.navigate('ProfileScreenFollowers', {followersData})}>
            <Text style={styles.UserDataName} >Followers ({followersData?.length})</Text>
          </TouchableOpacity>
         <TouchableOpacity style={styles.UserDataName} 
            onPress={() => navigation.navigate('ProfileScreenFollowing',{followingData})}>
            <Text style={styles.UserDataName}>Following ({followingData?.length})</Text>
          </TouchableOpacity>
    </View>

     <ProfileScreenPost postLength={postLength}/>
 </SafeAreaView>
  )
  }
export default ProfileScreen