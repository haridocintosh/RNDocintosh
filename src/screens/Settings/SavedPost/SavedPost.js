import React, {useState, useEffect,useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Card } from 'react-native-paper';
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';
import Svg, {Path} from 'react-native-svg';
import moment from "moment";
import PublicReactions from '../../HomeScreen/PublicReactions';
import { styles } from '../../HomeScreen/Homestyle';
import { getLocalData } from '../../../apis/GetLocalData';
import { getSavedPostsApi } from '../../../../redux/reducers/SettingsSlice';
import { useDispatch } from 'react-redux';
import OptionModal from '../../HomeScreen/optionModal';
import AutoHeightImage from '../../HomeScreen/AutoHeightImage';

const SavedPost = ({navigation}) => {
  const [item, setItem] = useState([]);
  const [postId, setPostId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [bottumLoader, setBottumLoader] = useState(false);
  const [endNull, setEndNull] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();

  const ref = useRef(null);

  const LocalStorage = () => {
    setBottumLoader(true);
    getLocalData('USER_INFO').then(async (res) => {
      setUserData(res?.data)
      const savedResult = await dispatch(getSavedPostsApi({user_id:res?.data?.id,pageCounter:1}));
      setItem(savedResult?.payload.result);
      console.log("result.payload.result",savedResult.message);
    });
    setBottumLoader(false);
  }

  const handleOption = (post_id) => {
    setPostId(post_id);
    if(postId == post_id){
      setModalVisible(!modalVisible);
      return;
    }
    setModalVisible(true);
  }
  
  useEffect(() => {
      navigation.setOptions({ title:'Saved Posts'});
      if(ref.current) {
        ref.current.scrollToOffset({ offset: 0 })
      }
      LocalStorage();
  },[])

  const handleLoadeMore = () => {
    if(endNull !== null){
      LoadPost(currentPage + 1);
    }
  };
  
  const LoadPost = async (page) => {
    console.log(page);
    setBottumLoader(true);
    const result = await dispatch(getSavedPostsApi({user_id:userData?.id,pageCounter:page}));
    console.log("result.payload.result",result.payload.result);
    setEndNull(result?.payload?.result)
     if(result.payload.result !== null){
      setCurrentPage(prev => prev + 1);
      setItem([...item, ...result?.payload.result]);
     }
     setBottumLoader(false);
  }

  const BlockId = (id) =>{
    console.log("BlockId",id);
    const BlockId = item?.filter(Uid => Uid.id != id);
    setItem(BlockId);
  }


  
  const renderLoader = () => {
    return (
      bottumLoader ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="small" color="#1A7078"/>
        </View> : null
    );
  };

  const renderItem = ({item}) => {
    // console.log("item",item);
    return(
      <Card style={styles.SavePostsContainer} >
          <View style={styles.userInfo}>
            <View  style={{flexDirection:'row',alignItems:'center'}}>
              <Image source={{uri:item?.profileimage}} 
                style={{width:38, height:38,marginRight:5,borderRadius:50}}
              />
              <View>
                <Text style={{fontSize:14, fontWeight:'400', fontFamily:"Inter-Regular"}}>
                  {item.utitle && item.utitle} {item.first_name && item.first_name} {item.last_name && item.last_name}
                  <MaterialCommunityIcons name="check-decagram" size={12} color="#0F9C69" />
                </Text>
                <View style={{flexDirection:'row',alignItems:'flex-start',}}>
                  <Text style={{marginLeft:5}}>
                    <FontAwesome5 name="users" size={17} color="#45B5C0"/>  
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
            <TouchableOpacity style={{padding:10,right:-10,top:-10}} onPress={() => handleOption(item?.post_id)}>
              <Svg width="7" height="20" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M3.5 1.55552C3.5 0.696472 2.82839 0 2 0C1.17161 0 0.5 0.696472 0.5 1.55552C0.5 2.41458 1.17161 3.11105 2 3.11105C2.82839 3.11105 3.5 2.41458 3.5 1.55552ZM3.5 8C3.5 7.14095 2.82839 6.44448 2 6.44448C1.17161 6.44448 0.5 7.14095 0.5 8C0.5 8.85905 1.17161 9.55552 2 9.55552C2.82839 9.55552 3.5 8.85905 3.5 8ZM3.5 14.4445C3.5 13.5854 2.82839 12.889 2 12.889C1.17161 12.889 0.5 13.5854 0.5 14.4445C0.5 15.3035 1.17161 16 2 16C2.82839 16 3.5 15.3035 3.5 14.4445Z" fill="#51668A"/>
              </Svg>
            </TouchableOpacity>
                  {item?.post_id == postId && <OptionModal 
                    modalVisible={modalVisible} 
                    item={item} 
                    setModalVisible={setModalVisible}
                    BlockId={BlockId} 
                    resData={userData}
                  />}
            </View>
          </View>
          <View >
            <Text style={{color:'#51668A',fontFamily:"Inter-Regular"}}>
              {item?.description.replace(/<[^>]+>/g, "")}
            </Text>
          </View>
          <AutoHeightImage item={item} width={Dimensions.get('window').width}/>
          <PublicReactions item={item}/>
      </Card> 
    )
  }

  const _listEmptyComponent = () => {
    return ( 
      <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
          <Text>There is no data available</Text>
      </View>
    )
}

  return (
    <SafeAreaView style={{padding:10,marginTop:10,flex:1,backgroundColor:'#ecf2f6'}}>
      <FlatList
        ref={ref}
        data={item}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
        ListFooterComponent={renderLoader}
        onEndReached={() => handleLoadeMore()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={_listEmptyComponent}
      />
    </SafeAreaView>
  )
}

export default SavedPost