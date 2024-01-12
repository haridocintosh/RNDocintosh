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
import { useDispatch, useSelector } from "react-redux";
import { getAllCoins, userPostData } from '../../../redux/reducers/postData';
import PublicReactions from './PublicReactions';
import { styles } from './Homestyle';
import moment from "moment";
import { useIsFocused } from '@react-navigation/native';
import OptionModal from './optionModal';
import AutoHeightImage from './AutoHeightImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image'
import { Icon } from '../../navigation/ReuseLogics';
import ViewMoreText from 'react-native-view-more-text';
import RenderHtml from 'react-native-render-html';


const HomeScreen = ({navigation})=> {
  const userData = useSelector((state) => state.localData.localData);
  const AllCoins = useSelector((state) => state?.homeData?.getAllCoins?.coins);
  // const home = useSelector((state) => state?.homeData);

  const isFocused = useIsFocused();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const {width, height} = Dimensions.get('window');
  const [userdata, setuserdata]  = useState({profile:'',user_id:'',role:''});
  const [allPost, setAllPost]  = useState();
  const [postId, setPostId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [bottumLoader, setBottumLoader] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const press = () => {
    ref.current.scrollToIndex({ animated: true, index: 5 });
  };


  //---------------- header Animation------------------
  const scrollPosition  = useRef(new Animated.Value(0)).current;
  const minHeaderHeight = 100;
  const maxHeaderHeight = 160;

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
    inputRange:  [0, 200,  400],
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
    outputRange: [(8 * Dimensions.get('window').height) / 100, 15],
    extrapolateLeft: 'identity',
    extrapolateRight: 'clamp',
  });

  const handleOption = (post_id) => {
    setPostId(post_id);
    if(postId == post_id){
      setModalVisible(!modalVisible);
      return;
    }
    setModalVisible(true);
  }

  const renderLoader = () => {
    return (
      bottumLoader ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078" />
        </View> : null
    );
  };

  const asyncFetchDailyData = async () => {
      setModalVisible(false);
      setBottumLoader(true);
      await dispatch(getAllCoins({user_id:userData?.id}))
      const value = await AsyncStorage.getItem('profileImage');
      if (value !== null) {
        setuserdata({
          ...userdata,
          profile:value,
          user_id:userData?.id,
          role:userData?.role,
        });
      }
      const postDetails = {postType:0,role:userData?.role,city_id:userData?.city_id,assoc_id:userData?.assoc_id, pageCounter:1, id:userData?.id,circle_type:userData?.role == 5 ? 3 : 1,speciality_id:userData?.speciality_id};
      const result = await dispatch(userPostData(postDetails));
      setCurrentPage(result.payload.pageCounter);
      setBottumLoader(false);
      const allPostData = result?.payload.result.filter(Post => Post.user_role == userData?.role);
      setAllPost(allPostData);
      setRefresh(false);
  }

  const handleLoadeMore = () => {
    if(endNull !== null){
      LoadPost(currentPage + 1);
    }
  };

  const LoadPost = async (page) => {
    setBottumLoader(true);
    const postDetails = {postType:0, role:userData?.role, city_id:userData?.city_id,assoc_id:userData?.assoc_id, pageCounter:page, id:userData?.id,circle_type:userData?.role == 5 ? 3 : 1,speciality_id:userData?.speciality_id};
    const result = await dispatch(userPostData(postDetails));
  
    setEndNull(result.payload.result)
     if(result.payload.result !== null){
      const allPostData = result?.payload.result.filter(Post => Post.user_role == userData?.role);
      setCurrentPage(result?.payload?.pageCounter)
      setAllPost([...allPost, ...allPostData]);
     }
     setBottumLoader(false);
  }
 
  const deletePostID = (postId) =>{
    const deletePost = allPost.filter(pId => pId.post_id != postId);
    setAllPost(deletePost); 
  }

  const BlockId = (id) =>{
    const BlockId = allPost.filter(Uid => Uid.id != id);
    setAllPost(BlockId);
  }

  const onViewableItemsChanged = ({viewableItems}) => {
    viewableItems.map((data) => {
      setCurrentIndex(data.index);
    });
  };

  const viewabilityConfigCallbackPairs = useRef([
    { onViewableItemsChanged },
  ]);

  var _viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  useEffect(() => {
    if(refresh){
      asyncFetchDailyData();
    }
  }, [refresh])

  useEffect(()=>{
    // if(isFocused){
      asyncFetchDailyData();
      if(ref.current) {
        ref.current.scrollToOffset({offset: 0})
      }
    // }
  },[]);

  const renderViewMore = (onPress) => {
    return(
      <Text onPress={() => onPress()} style={{color:"#5499C7"}}>View more</Text>
    )
  }
  const renderViewLess = (onPress) =>{
    return(
      <Text onPress={() => onPress()} style={{color:"#5499C7"}}>View less</Text>
    )
  }

  const mixedStyle = {
    body:{
        color: '#51668A',
        fontFamily:"Inter-Regular",
        fontSize:15,
    },
    
}

    const renderItem = ({item,index}) => {
      return(
        <Card style={styles.cardOfPosts}>
          <View style={styles.userInfo}>
            <View style={styles.useInfoLhs} >
              <FastImage style={styles.ProfilePic} source={{uri: item?.profileimage, priority: FastImage.priority.normal}}/>
              <View style={{marginLeft:5}}>
                <Text style={styles.UserInfoName}>
                  {item?.utitle} {item?.first_name} {item?.last_name} {Icon('MaterialCommunityIcons','check-decagram',12,'#0F9C69')}
                </Text>
                <View style={styles.UISpeciality}>
                  <Text style={styles.UISpecialityName}>
                    {item?.speciality}
                  </Text>
                  <Text style={{marginHorizontal:4}}>
                    {Icon("Ionicons","time-outline",19,"#51668A")}
                  </Text>
                  <Text style={styles.UIPostTiming}>
                    {moment(item?.created_at,).fromNow().split(" ")[0] == ('a'||"an")  ? "1 " : moment(item?.created_at,).fromNow().split(" ")[0] + " "} 
                    {moment(item?.created_at).fromNow().split(" ")[1].slice(0,1)}
                  </Text>
                </View>
              </View> 
            </View>
            <TouchableOpacity onPress={() => handleOption(item?.post_id)} style={{padding:10,right:-15,top:-10}}>
              {Icon('Entypo','dots-three-vertical',22,'#51668A')}
            </TouchableOpacity>
          </View>
          {item?.post_id == postId && <OptionModal 
              modalVisible={modalVisible} 
              item={item} 
              setModalVisible={setModalVisible}
              deletePostID={deletePostID}
              BlockId={BlockId} 
              userData={userData} 
          />}
          
            {/* <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{color:'#51668A',fontFamily:"Inter-Regular",textAlign:'justify' }}>
            </ViewMoreText> */}
              <RenderHtml
                contentWidth={width}
                source={{html : item?.description}}
                tagsStyles={mixedStyle}
                // defaultTextProps={{ numberOfLines: 2 }}
              />
              {/* <TouchableOpacity>
                <Text>ViewMore</Text>
              </TouchableOpacity> */}
            <AutoHeightImage items={item} width={width} currentIndex={currentIndex} postIndex={index}/>
            <PublicReactions item={item} />
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
                {Icon("Ionicons", "reorder-three-outline",34, "#fff")}
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
                {Icon("Feather", "search",24, "#fff")}
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.navigate('BellNotification')}>
                {Icon("MaterialCommunityIcons", "bell-ring-outline",24, "#fff")}
              </TouchableOpacity>
            </Animated.View>
          </View>

          <Animated.View style={[styles.collectedCoins,{transform: [{translateY : scoresPosition}]}]} >
          <TouchableOpacity onPress={() => navigation.navigate("Rewards")} style={styles.collectedCoinss}>
            <Image source={require('../../assets/dr-icon/d.png')} style={styles.d} />
            <Text style={styles.count}>{AllCoins?.[0]?.coinTotal ? AllCoins?.[0]?.coinTotal : 0} |</Text>
            <Image source={require('../../assets/dr-icon/discount1.png')} style={{width:16, height:16, marginVertical:5,marginHorizontal:5}}/>
            <Text style={styles.count}>0</Text>
          </TouchableOpacity>
          </Animated.View>
      </Animated.View>
      
      <View style={{padding:10}}>
        <Card style={styles.whatsMindCartConatiner} 
          onPress={() => navigation.navigate('Sharepost')}>
          <View style={styles.whatsMindConatiner} >
            <View style={{flexDirection:'row'}}>
            <FastImage 
              style={{width:32, height:32, borderRadius:50}}
              source={userdata.profile && {uri:userdata.profile, priority: FastImage.priority.normal}}/>
            <Text style={styles.whtsnewtxt}>What’s on your mind?</Text>
            </View>
            <View style={{backgroundColor:'#51668A',borderRadius:50}}>
              {Icon('AntDesign',"pluscircle",26,"#D5DEED")}
            </View>
          </View>
        </Card>
        <View>
          <View style={styles.marginten}>
              <Text style={{fontSize:16, fontWeight:'600',color:'#071B36'}}  onPress={() => press()} >Suggested Post</Text>
              <View style={{width:'100%', height:1, backgroundColor:'#D5DEED', marginTop:10}}></View>
          </View>
          <View style={{paddingBottom:550}}>
          <Animated.FlatList
              ref={ref}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
                {useNativeDriver: false},
              )}
              data={allPost}
              renderItem={renderItem}
              keyExtractor={(item,index) => index}
              ListFooterComponent={renderLoader}
              onEndReached={() => handleLoadeMore()}
              showsVerticalScrollIndicator={false}
              viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
              viewabilityConfig={_viewabilityConfig}
              refreshing={refresh}
              onRefresh={() => setRefresh(true)}
              onScrollBeginDrag={() => setModalVisible(false)}/>
          </View>
        </View>
        </View>
  </SafeAreaView>
  );
}
export default HomeScreen;
  