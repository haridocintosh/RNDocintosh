import { View, Text, TouchableOpacity,Dimensions,Image,FlatList,ActivityIndicator } from 'react-native'
import React,{ useEffect,useState }  from 'react';
import { Card } from 'react-native-paper';
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';
import { styles } from './profilestyle';
import { useDispatch } from 'react-redux';
import { getMyPostsApi } from '../../../redux/reducers/postData';
import PublicReactions from '../HomeScreen/PublicReactions';
import moment from "moment";
import Svg, {Path} from 'react-native-svg';
import OptionModal from '../HomeScreen/optionModal';
import { useNavigation } from '@react-navigation/native';
import { getLocalData } from '../../apis/GetLocalData';
import AutoHeightImage from '../HomeScreen/AutoHeightImage';


const ProfileScreenPost = ({postLength}) => {
  const [myPost,setMyPost] = useState();
  const [postId, setPostId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [bottumLoader, setBottumLoader] = useState(false);

  const { width } = Dimensions.get('window')

  const handleOption = (post_id) => {
    setPostId(post_id);
    if(postId == post_id){
      setModalVisible(!modalVisible);
      return;
    }
    setModalVisible(true);
  }

  const getMyPosts = async () => {
    getLocalData('USER_INFO').then( async (res) =>{
      setUserData(res?.data)
      const resData = res?.data;
      const postDetails = { postType:0,role:resData?.role,circle_type:resData?.role == 4 ? 1 : resData?.circle_type,
        city_id:resData?.city_id,assoc_id:resData?.assoc_id,pageCounter:1,user_id:resData?.id,id:resData?.id
      }
      const allPostResult = await dispatch(getMyPostsApi(postDetails));
      // console.log("allPostResult.payload.result",allPostResult.payload.count);
      setMyPost(allPostResult.payload.result);
      await postLength(allPostResult.payload.count);
    });
  }

  const handleLoadeMore = () => {
    if(endNull !== null){
      LoadPost(currentPage + 1);
    }
  };
  
  const LoadPost = async (page) => {
    console.log(page);
    setBottumLoader(true);
    const postDetails = { postType:0,role:userData?.role,circle_type:userData?.role == 4 ? 1 : userData?.circle_type,
      city_id:userData?.city_id,assoc_id:userData?.assoc_id,pageCounter:page,user_id:userData?.id,id:userData?.id
    }
    const result = await dispatch(getMyPostsApi(postDetails));
    setEndNull(result.payload.result)
     if(result.payload.result !== null){
      setCurrentPage(prev => prev + 1);
      setMyPost([...myPost, ...result?.payload.result]);
     }
     setBottumLoader(false);
  }

  const handlePost = (item) => {
    navigation.navigate('PostsScreen', {item:item})
  }

  const renderLoader = () => {
    return (
      bottumLoader ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078" />
        </View> : null
    );
  };
  
  useEffect(() => {
      getMyPosts();
  }, [])


  const deletePostID = (postId) =>{
    const deletePost = myPost.filter(pId => pId.post_id != postId);
    setMyPost(deletePost);
  }

  const BlockId = (id) =>{
    // console.log("BlockId",id);
    const BlockId = myPost.filter(Uid => Uid.id != id);
    setMyPost(BlockId);
  }
  const renderItem = ({item}) => {
    return(
      <Card style={styles.cardOfPosts} >
        <View style={styles.userInfo}>
          <View  style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri:item.profileimage}} style={{width:38, height:38,marginRight:5,borderRadius:50}} />
              <View >
                <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                  {item.role == '4' ? 'Dr.' : ''} {item.first_name && item.first_name} {item.last_name && item.last_name} 
                  <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                </Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginLeft:5}}>
                      <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                    </Text>
                    <View style={styles.dot}/>
                    <Text style={{fontSize:12, fontWeight:'400',color:'#51668A', fontFamily:"Inter-Regular"}}>{item?.speciality}</Text>
                    <Text style={{marginHorizontal:4}}>
                      <Ionicons name="time-outline" size={19} color="#51668A" />  
                    </Text>
                    <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A',fontFamily:"Inter-Regular"}}>
                       {moment(item?.created_at).fromNow()}
                    </Text>
                </View>
              </View> 
          </View>
          <View>
          <TouchableOpacity onPress={() => handleOption(item?.post_id)} style={{padding:10,right:-10,top:-10}}>
            <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
            </Svg>
          </TouchableOpacity>
            {item?.post_id == postId && <OptionModal 
                modalVisible={modalVisible}
                deletePostID={deletePostID}
                setModalVisible={setModalVisible}
                item={item}
                BlockId={BlockId} 
                resData={userData} 
            />}
          </View>
        </View>

        <View style={item?.ptitle &&{ flexDirection:'row',paddingVertical:10}}>
          <Text style={{color:'#51668A',fontFamily:"Inter-Regular" }}>
          {item?.ptitle }
          </Text>
        </View>
        <AutoHeightImage item={item} width={width}/>
        <PublicReactions item={item}/>
      </Card>
    )
  }
  
  return (
    <View style={{padding:10,backgroundColor:'#E6E6E6',flex:1}}>
    <FlatList
        contentInsetAdjustmentBehavior="automatic"
        data={myPost}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
        ListFooterComponent={renderLoader}
        onEndReached={() => handleLoadeMore()}
        showsVerticalScrollIndicator={false}
    />
    </View>
  )
}

export default ProfileScreenPost