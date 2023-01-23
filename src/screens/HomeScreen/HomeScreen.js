import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { Card } from 'react-native-paper';
import { useDispatch } from "react-redux";
import {Ionicons,MaterialCommunityIcons,AntDesign,FontAwesome5,Feather} from '@expo/vector-icons';
import { getAllCoins, userPostData } from '../../../redux/reducers/postData';
import Svg, {Path} from 'react-native-svg';
import PublicReactions from './PublicReactions';
import { styles } from './Homestyle';
import moment from "moment";
import { useIsFocused } from '@react-navigation/native';
import OptionModal from './optionModal';
import { getLocalData } from '../../apis/GetLocalData';
import AutoHeightImage from './AutoHeightImage';

const HomeScreen = ({navigation,route})=> {
  const postLoader = route?.params?.reload;
  const [userdata, setuserdata]     = useState({profile:'',user_id:'',role:''});
  const [allPost, setallPost]  = useState();
  const [resData, setResData]  = useState();
  const dispatch = useDispatch();
  const [postId, setPostId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [allcoins, setAllcoins] = useState(0);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [bottumLoader, setBottumLoader] = useState(false);

  const isFocused = useIsFocused();
  const ref = useRef(null);
  const { width, height} = Dimensions.get('window')

  //---------------- header Animation------------------
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 100
  const maxHeaderHeight = 160

  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  const sizeFont = scrollPosition.interpolate({
    inputRange: [0, 200,  400],
    outputRange: [10, 6, 5],
    extrapolate: 'clamp',
  });
  const imagePosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(21 * Dimensions.get('window').width) / 100, 30],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });
  const scoresPosition = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [(10 * Dimensions.get('window').height) / 100, 15],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });

const handleOption = (post_id,id) => {
  setPostId(post_id);
  if(postId == post_id){
    setModalVisible(!modalVisible);
    return;
  }
  setModalVisible(true);
}
  const getStorageData =  () => {
    getLocalData('USER_INFO').then(async (res) =>{
      const allCoins = { user_id:res.data.id};
      const allCoinsResult = await dispatch(getAllCoins(allCoins));
      setAllcoins(allCoinsResult.payload.coins);
    });
  };

  // if(postLoader){
  //   return(
  //   <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
  //       <ActivityIndicator size={'large'} color="#1A7078"/>
  //   </View>)
  // }

  const renderLoader = () => {
    return (
      bottumLoader ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078" />
        </View> : null
    );
  };

  const handleLoadeMore = () => {
    if(endNull !== null){
      LoadPost(currentPage + 1);
    }
  };

  
  const LoadPost = async (page) => {
    setBottumLoader(true);
    const postDetails = {postType:0,role:resData?.role,city_id:resData?.city_id,assoc_id:resData?.assoc_id, pageCounter:page, id:resData?.id,circle_type:resData?.role == 5 ? 2 : 1,speciality_id:resData?.speciality_id};
    // console.log(postDetails);
    const result = await dispatch(userPostData(postDetails));
    setEndNull(result.payload.result)
     if(result.payload.result !== null){
      setCurrentPage(prev => prev + 1);
      const allPostData = result?.payload.result.filter(Post => Post.user_role != 5);
      setallPost([...allPost, ...allPostData]);
     }
     setBottumLoader(false);
  }

  // console.log("bottumLoader",bottumLoader);

  useEffect(()=>{
    if(ref.current) {
      ref.current.scrollToOffset({ offset: 0 })
    }
    if(isFocused){
      asyncFetchDailyData();
      getStorageData();
    }
  },[isFocused]);

  const asyncFetchDailyData = async () => {
    getLocalData('USER_INFO').then(async (res) => {
      const reData = res?.data;
      setResData(reData)
      setuserdata({
        profile:reData?.profileimage,
        user_id:reData?.id,
        role:reData?.role,
      });
      setModalVisible(false);
      setBottumLoader(true);
      const postDetails = {postType:0,role:reData?.role,city_id:reData?.city_id,assoc_id:reData?.assoc_id, pageCounter:1, id:reData?.id,circle_type:reData?.role == 5 ? 2 : 1,speciality_id:reData?.speciality_id};
       //console.log(postDetails);
      const result = await dispatch(userPostData(postDetails));
      setBottumLoader(false);
      const allPostData = result?.payload.result.filter(Post => Post.user_role != 5);
      setallPost(allPostData);
    })
  }
 
  const deletePostID = (postId) =>{
    // console.log("deletePost",postId);
    const deletePost = allPost.filter(pId => pId.post_id != postId);
    setallPost(deletePost);
  }
  const BlockId = (id) =>{
    // console.log("BlockId",id);
    const BlockId = allPost.filter(Uid => Uid.id != id);
    setallPost(BlockId);
  }
  
    const renderItem = ({item}) => {
      return(
        <Card style={styles.cardOfPosts}>
          <View style={styles.userInfo}>
            <View  style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item?.profileimage}} 
               style={{width:38, height:38,marginRight:5,borderRadius:50}}/>
              <View >
                <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                  { item?.utitle} {item?.first_name} {item?.last_name} 
                  <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                </Text>
                <View style={{flexDirection:'row',alignItems:'flex-start',}}>
                  <Text style={{marginLeft:5}}>
                    <FontAwesome5 name="users" size={17} color="#45B5C0" />  
                  </Text>
                  <View style={styles.dot}/>
                  <Text style={{fontSize:12, fontWeight:'400',color:'#51668A', fontFamily:"Inter-Regular",maxWidth:130,marginTop:1}}>
                    {item?.speciality}
                  </Text>
                  <Text style={{marginHorizontal:4}}>
                    <Ionicons name="time-outline" size={19} color="#51668A" />  
                  </Text>
                  <Text style={{fontSize:12, paddingRight:5, fontWeight:'400',color:'#51668A',fontFamily:"Inter-Regular",marginTop:1.5}}>
                    {moment(item?.created_at).fromNow()}
                  </Text>
                </View>
              </View> 
            </View>
            <View>
            <TouchableOpacity onPress={() => handleOption(item?.post_id,item?.post_id)} style={{padding:10,right:-10,top:-10}}>
              <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
              </Svg>
            </TouchableOpacity>
              {item?.post_id == postId && <OptionModal 
                modalVisible={modalVisible} 
                item={item} 
                setModalVisible={setModalVisible}
                deletePostID={deletePostID}
                BlockId={BlockId} 
                resData={resData} 
                // saveState={handleSaveState}
              />}
            </View>
          </View>
          <View style={item?.description &&{ flexDirection:'row',paddingBottom:10}}>
            <Text style={{color:'#51668A',fontFamily:"Inter-Regular" }}>
              {item?.description.replace(/(<([^>]+)>)/gi, "")}
            </Text>
          </View>
            <AutoHeightImage item={item} width={width}/>
            <PublicReactions item={item} getStorageData={getStorageData}/>
        </Card>
      )
    }

  return (
  <SafeAreaView>
      <Animated.View style={{backgroundColor:'#071B36',height:headerHeight,position:'relative'}}>
        <Animated.Image source={require('../../assets/images/bg-top-home.png')} style={[styles.bgtophome,{height:headerHeight,opacity:opacity}]}/>
          <View style={styles.imageConatentContainer}>
            <View style={{flexDirection:'row',alignItems:'center'}}> 
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="reorder-three-outline" size={34} color="#fff"  />
              </TouchableOpacity>
              <View style={{backgroundColor:'#FFCC00', width:4, height:28, marginLeft:10,zIndex:1}}/>
              <Animated.View style={{backgroundColor:'#3477E0', width:imagePosition, height:24,justifyContent:'center',position:'relative'}}>
                <View style={styles.triangle}/>
                <View style={styles.darkBlueOnWhatsNew}/>
                <TouchableOpacity  onPress={()=>{ navigation.navigate('WhatsNew') }}>
                <Animated.Text style={{fontSize:sizeFont,color:'#fff',marginLeft:10,opacity:opacity}}>
                  What’s new
                </Animated.Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
            <Animated.View style={{flexDirection:'row'}} >
              <TouchableOpacity onPress={()=>{ navigation.navigate('CommonSearchScreen')}}>
                <Feather name="search" size={24} color="#ffff"  />
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.navigate('BellNotification')}>
                <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#ffff" />
              </TouchableOpacity>
            </Animated.View>
          </View>
          <Animated.View style={[styles.collectedCoins,{transform: [{translateY: scoresPosition}]}]} >
            <Image source={require('../../assets/dr-icon/d.png')} style={styles.d} />
            <Text style={styles.count}>
              {allcoins[0]?.coinTotal ? allcoins[0]?.coinTotal : 0} |</Text>
            <Image source={require('../../assets/dr-icon/discount1.png')} style={{width:16, height:16, marginVertical:5,  marginHorizontal:5}}></Image>
            <Text style={styles.count}>0</Text>
          </Animated.View>
      </Animated.View>
      
    <View style={{padding:10}}>
      <Card style={{marginTop:-35, zIndex:1, borderRadius:50,shadowRadius:10, shadowOffset:10}} onPress={() => userdata?.role == 4 && navigation.navigate('SharePost')}>
        <View style={{flexDirection:'row', margin:10,justifyContent:'space-between',alignItems:'center'}} >
          <View style={{flexDirection:'row'}}>
          <Image source={userdata.profile?{uri:userdata.profile}:''}  style={{width:32, height:32, borderRadius:50}}/>
          <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
          </View>
          <AntDesign name="pluscircle" size={26} color="#D5DEED"/>
        </View>
      </Card>
      <View>
         <View style={styles.marginten}>
              <Text style={{fontSize:16, fontWeight:'600'}}>Suggested Post</Text>
              <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10}}></View>
          </View>
          <View style={{paddingBottom:550}}>
          <Animated.FlatList
              ref={ref}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                {useNativeDriver: false},
              )}
              // contentInsetAdjustmentBehavior="automatic"
              data={allPost}
              renderItem={renderItem}
              keyExtractor={(item,index) => index}
              ListFooterComponent={renderLoader}
              onEndReached={() => handleLoadeMore()}
              showsVerticalScrollIndicator={false}
          />
          </View>
      </View>
      </View>
  </SafeAreaView>
  );
}
export default HomeScreen;
  