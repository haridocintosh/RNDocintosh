import { View, Text, SafeAreaView,TouchableOpacity,TextInput,ScrollView,Image } from 'react-native'
import React , {useState,useRef, useEffect}from 'react';
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';
import { getCommunityApi, specialityWiseUserLimitAPI } from './JoinCommunitySlice';
import { useDispatch, useSelector } from 'react-redux';
import { SvgUri } from 'react-native-svg';

const Community = ({navigation}) => {
const [viewInput, setViewInput] = useState(false);
const [inputText, setInputText] = useState(null);
const refInput = useRef(null);
const dispatch = useDispatch();

const userData = useSelector((state) => state.localData.localData);
const communityData = useSelector((state) => state.communityData.getCommunity);
const specialityWUL = useSelector((state) => state.communityData.specialityWUL);

  const InputView = () => {
    setViewInput(!viewInput);
  } 

  const onChangeText = async (text) => {
    setInputText(text)
  }

  const handleJoin = (data) =>{
    navigation.navigate("JionCommunity", {data});
  }

  const getCommunityList = async () => {
      const postData = {specialityId:userData?.speciality_id};
      const result = await dispatch(getCommunityApi(postData));
      const resultOfSingles = await dispatch(specialityWiseUserLimitAPI(postData));
  }

  useEffect(() => {
    getCommunityList();
  },[])


  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex: 1 }}>
      <View style={styles.headerView}>
        <View style={styles.headerTitle}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {Icon('Ionicons','reorder-three-outline',35,'#fff')}
          </TouchableOpacity>
          {viewInput ? 
            <TextInput
              ref={refInput}
              placeholder={"Search"}
              style={{fontSize:18,color:"#fff"}}
              placeholderTextColor={'#fff'}
              onChangeText={onChangeText}
              value={inputText}
            />
            :
            <Text style={styles.headerText}>Community</Text>}
        </View>
        <TouchableOpacity onPress={() => InputView()}>
          {Icon('Ionicons',viewInput ? 'close-outline': 'search',24,'#fff')}
        </TouchableOpacity>
      </View>
      <View style={styles.bodyView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {communityData?.result?.map((data,index) =>{
            return(
              <View style={styles.recomandedUsers} key={index}>
                <View style={styles.recomandedUsersPic}>
                  {data?.groupImage?.includes(".svg") ?
                    <SvgUri
                      width={40} 
                      height={40}
                      uri={data?.groupImage}
                    />
                    :
                    <Image  
                      style={styles.UsersProfilePic}
                      source={{uri:data?.groupImage}}
                    />
                  }
                  <View style={styles.userInfo}>
                    <Text style={styles.hospitalName}>{data?.community_name}</Text>
                    <Text style={styles.groupsText}>{data?.userCount} Groups</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => handleJoin(data)}>
                  <Text style={styles.joinText}>
                  {Icon('Entypo','plus',13,'#2376E5')} Join</Text>
                </TouchableOpacity>
              </View>
            )
          })}

          {specialityWUL?.result?.map((data,index) =>{
            return(
              <View style={styles.recomandedUsers} key={index}>
                <View style={styles.recomandedUsersPic}>
                  <Image  
                    style={styles.UsersProfilePic}
                    source={{uri:data?.userprofile}}
                  />
                  <View style={styles.userInfo}>
                    <Text style={styles.hospitalName}>{data?.username}</Text>
                    <Text style={styles.groupsText}>{data?.speciality}</Text>
                  </View>
                </View>
                <TouchableOpacity>
                  <Text style={styles.joinText}>
                  {Icon('Entypo','plus',13,'#2376E5')} Connect</Text>
                </TouchableOpacity>
              </View>
            )
          })}

        </ScrollView>
      </View>
      <TouchableOpacity style={styles.plusContainer} onPress={() => navigation.navigate("CreateCommunity")}>
          {Icon('AntDesign','plus',40,'#fff')}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Community