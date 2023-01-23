import { View, Text, Image, TouchableOpacity, Share} from 'react-native'
import React, { useState,useEffect } from 'react';
import {AntDesign,} from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getallLikes, postLikeData } from '../../../redux/reducers/publicReactionSlice';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Homestyle';
import { getCointransfer } from '../../../redux/reducers/postData';
import { getLocalData } from '../../apis/GetLocalData';


const PublicReactions = ({item,getStorageData}) => {
 const [likeCount,setLikeCount] = useState(item?.likecount);
 const [allLikeData,setAllLikeData] = useState();
 const [heart,setHeart] = useState(item?.post_like_status?.[0].flag == 1);
 const [result,setResult] = useState();

 const dispatch = useDispatch();
 const navigation = useNavigation();

  const localStorageData = () => {
    getLocalData('USER_INFO').then( async (res) => {
      const reData = res?.data;
      setResult(reData);
      const getallLikesData = await dispatch(getallLikes({postid:item?.post_id}));
      setAllLikeData(getallLikesData.payload);
    })
  }

 const handleLikes = async (post_id) => {
  const postDetails = {user_id:result.id, post_id:post_id}
  const sentResult = await dispatch(postLikeData(postDetails));
  const getallLikesData = await dispatch(getallLikes({postid:post_id}));
  setAllLikeData(getallLikesData.payload)
  setLikeCount(getallLikesData.payload.count);
  
  if(sentResult?.payload?.count){
    const likeCounter = {senderId : 0,receiverId:result.id,task:2}
    const getlikeCounter = await dispatch(getCointransfer(likeCounter));
    setHeart(true);
  }else{
    const likeCounter = {senderId : result.id,receiverId:0,task:13}
    const getlikeCounter = await dispatch(getCointransfer(likeCounter));
    setHeart(false);
  }
  getStorageData();
 }

 useEffect(() => {
  localStorageData();
 },[])

 const GotoComments =(post_id,comments_list ) => {
  navigation.navigate('CommentsScreen', {post_id:post_id,comments_list });
 }

 const onShare = async (post_id) => {
  try {
    const result = await Share.share({
      message:`https://docintosh.com/app-share/${post_id}`,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <View>
     <View style={styles.publicReactionsContainer}>
              <View style={{ flexDirection: 'row',marginVertical:5,}}>
                <View style={styles.socialCount}>
                  <TouchableOpacity onPress={()=> handleLikes(item?.post_id,item?.likecount)} >
                      <AntDesign
                        name={ heart ? "heart":"hearto"} 
                        size={22} color="red"
                      />
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}>
                    {likeCount}
                  </Text>
                </View>

                {/* <View style={styles.socialCount}>
                  <TouchableOpacity>
                      <Image source={require('../../assets/dr-icon/gift.png')} style={styles.socialImages}/>
                  </TouchableOpacity>
                  <Text style={styles.socialCountText}></Text>
                </View> */}
                
                <View style={styles.socialCount}>
                    <TouchableOpacity   onPress={() => GotoComments(item?.post_id, item?.comments_list)}>
                        <Image source={require('../../assets/dr-icon/socialComment.png')} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>{item?.commentcount}</Text>
                </View>

                <View style={styles.socialCount}>
                    <TouchableOpacity onPress={() => onShare(item?.post_id)}>
                        <Image source={require('../../assets/dr-icon/Share.png')} style={styles.socialImages}/>
                    </TouchableOpacity>
                  <Text style={styles.socialCountText}>4k</Text>
                </View>

              </View>

          </View> 
          {likeCount > 0 && 
           <View style={{flexDirection:'row',marginTop:5,marginLeft:10, marginBottom:10}}>
              {allLikeData?.data?.slice(0, 3).map((data,i) => {
                return(
                  <Image source={data?.profileimage && {uri:data?.profileimage}} style={styles.likedImage} key={i}/>
                )
              })}
              <Text style={{fontSize:12, fontWeight:'400',color:'#51668A',padding:5}}>
                { likeCount == 1 ? `Liked by ${allLikeData?.data?.[0]?.username}` :
                `Liked by ${allLikeData?.data?.[0]?.username} and ${likeCount ? likeCount-1 : parseInt(item?.likecount-1)} others`}
              </Text>
          </View>
          }
          </View>
  )
}

export default PublicReactions;
