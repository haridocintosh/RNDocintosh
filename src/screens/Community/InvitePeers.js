import { View, Text, SafeAreaView ,TouchableOpacity,Image,FlatList,ActivityIndicator} from 'react-native';
import React,{useEffect, useState, useRef} from 'react';
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';
import CustomButton from '../../components/CustomButton';
import { getLocalData } from '../../apis/GetLocalData';
import { GetSpecialityWiseUserAPI } from './CreateCommunity/CommunitySlice';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { addCommunityApi } from './JoinCommunitySlice';


const InvitePeers = ({navigation,route}) => {
    const [userApi,setUserApi] = useState();
    const [currentPage,setCurrentPage] = useState();
    const [endNull, setEndNull] = useState();
    const [bottumLoader, setBottumLoader] = useState(false);
    const [userData, setUserData] = useState();
    const [inviteId, setInviteId] = useState([]);
    const {title,data} = route?.params;
    const dispatch = useDispatch();
    const ref = useRef(null);

    console.log(data);

    const handleRedirect = async () => {
      
      const mergeUpload = {...data, addUser:inviteId,user_id:userData.id,speciality_id:userData?.speciality_id};
      const uresult = await dispatch(addCommunityApi(mergeUpload));
      console.log("uresult",uresult);
      navigation.navigate('Community');
    }

    const getInvitePeers = () => {
      getLocalData("USER_INFO").then(async(res) => {
        setBottumLoader(true);
        setUserData(res?.data);
        const postUpload = {user_id:res?.data?.id,speciality_id:"",pageCounter:1};
        const uresult = await dispatch(GetSpecialityWiseUserAPI(postUpload));
        const removeSelf = uresult.payload.result.filter((data) => data.id !== res?.data?.id)
        setUserApi(removeSelf);
        setCurrentPage(uresult?.payload?.pageCounter);
        setBottumLoader(false);
      })
    };

    const handleLoadeMore = () => {
      if(endNull !== null){
        LoadPost(currentPage + 1);
      }
    };

    const LoadPost = async (page) =>{
      setBottumLoader(true);
      const postUpload = {user_id:userData?.id,speciality_id:"",pageCounter:page};
      const result = await dispatch(GetSpecialityWiseUserAPI(postUpload));
      setEndNull(result.payload.result)
      
      if(result.payload.result !== null){
        setCurrentPage(result?.payload?.pageCounter)
        setUserApi([...userApi, ...result.payload.result]);
      }
      setBottumLoader(false);
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
      getInvitePeers();
    },[])

    const handleInvite = (id) => {
      let temp = userApi.map((data) => {
        if (id === data.id) return {...data, selected: !data.selected}
        return data;
      });
      setUserApi(temp);

      const trueVal = temp
        .filter((val) => val.selected == true)
        .map((temp) => temp?.id);
      setInviteId(trueVal)
    }

    const renderItem = ({item,index}) => {
      return(
        <View style={styles.followerContainer}>
          <View style={styles.followerLhs}>
              <Image source={{uri:item?.userprofile}} style={styles.profileimgfollower}/>
              <View style={styles.followerName}>
                  <Text style={styles.followerNameText}>{item?.username}</Text>
                  <Text style={styles.followerSpecialist}>{item?.speciality}</Text>
              </View>
          </View>
          <TouchableOpacity onPress={() => handleInvite(item?.id)}>
              <Text style={styles.joinText}>
                {Icon('Entypo',item.selected ?'minus' : 'plus',13,'#2376E5')} 
                {item.selected ? "Invited" : "Invite"}
              </Text>
          </TouchableOpacity>
        </View>
      )}

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10 }}>
      <Text style={styles.IPTitle}>{title}</Text>
      <View style= {{marginBottom:title.includes('Community') ? 95 :30}}>
        <FlatList
          ref={ref}
          data={userApi}
          renderItem={renderItem}
          keyExtractor={(item,index) => index}
          ListFooterComponent={renderLoader}
          onEndReached={() => handleLoadeMore()}
          showsVerticalScrollIndicator={false}
          // viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          // viewabilityConfig={_viewabilityConfig}
          // refreshing={refresh}
          // onRefresh={() => setRefresh(true)}
          // onScrollBeginDrag={() => setModalVisible(false)}
        />
      </View>
      {title.includes('Community') &&
        <CustomButton label={"Continue"} style={{position:'absolute',bottom:0}} onPress={() => handleRedirect()}/>
      }
    </SafeAreaView>
  )
}

export default InvitePeers;