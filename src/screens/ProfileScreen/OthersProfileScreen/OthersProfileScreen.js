import React, { useEffect, useState ,useTransition} from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity,ActivityIndicator} from 'react-native';
import { styles } from '../profilestyle';
import FastImage from 'react-native-fast-image'
import icon from '../../../assets/images/Vector.png';
import { Icon } from '../../../navigation/ReuseLogics';

import { Card } from 'react-native-paper';
import { getLocalData } from '../../../apis/GetLocalData';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreenPost from '../ProfileScreenPost';
import { getAllCoins, getFollowersDataApi, getFollowingDataApi, getMyPostsApi } from '../../../../redux/reducers/postData';
import { getDoctorsDetails } from '../../../../redux/reducers/ALL_APIs';
import OthersProfileScreenPost from './OthersProfileScreenPost';
import OptionModal from './OptionModal';


const OthersProfileScreen = ({navigation,route}) => {
    
    const {data} = route?.params;
    
    const [isPending, startTransition] = useTransition();
    const [allcoins, setAllcoins] = useState(0);
    const [optionModal,setOptionModal] = useState(false);
    const [followersData, setFollowersData] = useState();
    const [followingData, setFollowingData] = useState();
    const [totalPost, setTotalPost] = useState(0);
    const [userProfile, setUserProfile] = useState([]);
    const [myPost, setMyPost] = useState();
    const [pageLoad, setPageLoad] = useState();
    const [loader, setLoader] = useState(true);

   
    const dispatch = useDispatch();
    // console.log("data",data);

    const asyncFetchDailyData =  async() => {
        navigation.setOptions({ title: 'Profile'});
            startTransition(async () =>{
                const result = await dispatch(getDoctorsDetails({id:data?.follow_to}));
                const userResult = result?.payload?.user_profile;
                setUserProfile(result?.payload?.user_profile);
                const postDetails = await { postType:0,role:userResult?.user_role,circle_type:userResult?.user_role == 4 ? 1 : userResult?.circle_type,
                    city_id:userResult?.city_id,assoc_id:userResult?.associationId,pageCounter:1,user_id:userResult?.id,id:userResult?.id
                }
                const allPostResult = await dispatch(getMyPostsApi(postDetails));
                setMyPost(allPostResult?.payload?.result);
                setTotalPost(allPostResult?.payload?.count);
                setPageLoad(allPostResult?.payload?.pageCounter);
            })
          const postData = { user_id:data.follow_to};
          const allCoinsResult = await dispatch(getAllCoins(postData));
          setAllcoins(allCoinsResult.payload.coins);
          const followersResult = await dispatch(getFollowersDataApi(postData));
          setFollowersData(followersResult.payload)
          const followingResult = await dispatch(getFollowingDataApi(postData));
          setFollowingData(followingResult.payload);
          setLoader(false);
      }

    useEffect(() => {
        asyncFetchDailyData();
    },[])
    
    const handleOptions = () => {
        setOptionModal(!optionModal);
    }

    const postLength = (total)=>{
        setTotalPost(total);
    };

    if(loader){
        return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
            <ActivityIndicator size={'large'} color={"#2C8892"}/>
        </View>)
    }

  return (
    <SafeAreaView style={{backgroundColor: '#E6E6E6',flex:1}}>
      <View style={{backgroundColor:'#fff',paddingHorizontal:10,paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
        <View>
            <View style={styles.profilePicContainer}>
                <View style={{borderWidth:2,borderColor:'#2C8892',borderRadius:50,padding:5}}>
                    <FastImage
                        style={styles.otherProfileScreenimg}
                        source={userProfile.profileimage && {
                            uri:userProfile.profileimage,
                            priority: FastImage.priority.normal,
                        }}
                    />
                </View>
                <View style={styles.profileDetails}>
                    <Text style={styles.profilescreenName}>{userProfile?.title} {userProfile?.first_name} {userProfile?.last_name} <Image source={icon}/></Text>    
                    <Text style={styles.profileDesignationpro}>{userProfile?.speciality} | {userProfile?.city}</Text>
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
                    <Text style={styles.coins}>{allcoins[0]?.coinTotal ? allcoins[0]?.coinTotal : 0}</Text>
                </View>
                <View style={styles.ScoreContainer}>
                    <Image source={require('../../../assets/dr-icon/coupon1.png')} style={styles.scoreImg}/>
                    <Text style={styles.coins}>0</Text>
                </View>
            </View>
        </View>
        <TouchableOpacity onPress={() => handleOptions()}>
            {Icon('Entypo','dots-three-vertical',25, '#51668A')}
        </TouchableOpacity>
        
    </View>
    <OptionModal modalVisible={optionModal}/>
    
    <OthersProfileScreenPost 
      totalPost={totalPost}
      followingData={followingData}
      followersData={followersData}
      myPost={myPost}
      setMyPost={setMyPost}
      userProfile={userProfile}
      pageLoad={pageLoad}
      setPageLoad={setPageLoad}
    />
    </SafeAreaView>
  )
}

export default OthersProfileScreen;