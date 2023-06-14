import { View, Text,Image,TouchableOpacity,FlatList,Dimensions} from 'react-native'
import React, { useEffect, useState ,useRef} from 'react';
import { styles } from './CommunityStyles';
import Card from '../../utils/Card';
import Entypo from 'react-native-vector-icons/Entypo';
import ThreadsOptionModal from './ThreadsOptionModal';
import { useDispatch } from 'react-redux';
import { CommunityPostDataAPI } from './JoinCommunitySlice';
import AutoHeightImage from '../HomeScreen/AutoHeightImage';


const Threads = ({modalVisible,setModalVisible}) => {
  
  const [communityData,setcommunityData] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postId, setPostId] = useState();
  const dispatch = useDispatch();
  const { width, height} = Dimensions.get('window');

  const ref = useRef(null);

  const clock = (val) => {
  }
  const hadleOptionModal = (post_id) => {
    setPostId(post_id)
    if(postId == post_id){
      setModalVisible(!modalVisible);
      return;
    }
    setModalVisible(true);
  }
  const  getData = async () => {
    const Result =  await dispatch(CommunityPostDataAPI({type:16}));
    setcommunityData(Result.payload);
  }

  useEffect(() => {
    getData();
  },[])

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

  const renderItem = ({item,index}) => {
    return(
      <Card>
          <View style={styles.ThreadPostUserDetailsContainer}>
            <View style={styles.ThreadPostUserDetails}>
              <Image source={{uri:item?.profileimage}} style={{borderRadius:50,width:50,height:50}}/>
              <View style={styles.ThreadPostUserDetailsTextContainer}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.ThreadPostPostName}>{item?.utitle} {item?.first_name} {item?.last_name}</Text>
                    <Image source={require('../../assets/images/celTick.png')} style={{height:20,width:20,marginLeft:10}}/>
                </View>
                  <Text style={styles.ThreadPostPostSplty}>{item?.speciality}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => hadleOptionModal(item?.post_id)}>
              <Entypo name='dots-three-vertical' size={25} color={'#51668A'}/>
            </TouchableOpacity>
          </View>
          {item?.description &&
              <Text style={styles.ThreadPostDescription}>
                {item?.description.replace(/(<([^>]+)>)/gi, "")}
              </Text>
          }
          {postId == item?.post_id && <ThreadsOptionModal modalVisible={modalVisible}/>}
          <AutoHeightImage items={item} width={width} currentIndex={currentIndex} postIndex={index}/>
      </Card>
    )
  }

  return (
    <FlatList
        ref={ref}
        data={communityData}
        renderItem={renderItem}
        keyExtractor={(item,index) => index}
        // ListFooterComponent={renderLoader}
        // onEndReached={() => handleLoadeMore()}
        showsVerticalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={_viewabilityConfig}
        // ListEmptyComponent={_listEmptyComponent}
        // refreshing={refresh}
        // onRefresh={() => setRefresh(true)}
        onScrollBeginDrag={() => setModalVisible(false)}
    />
  )
}

export default Threads