import { View, Text, SafeAreaView,TouchableOpacity,TextInput,Image } from 'react-native'
import React , {useState,useRef, useEffect}from 'react';
import { styles } from './CommunityStyles';
import { Icon } from '../../navigation/ReuseLogics';
import { getCommunityApi } from './JoinCommunitySlice';
import { useDispatch } from 'react-redux';
import { getLocalData } from '../../apis/GetLocalData';
import { SvgUri } from 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';

const Community = ({navigation}) => {
const [viewInput, setViewInput] = useState(false);
const [inputText, setInputText] = useState(null);
const [communityList, setCommunityList] = useState();
const refInput = useRef(null);
const dispatch = useDispatch();

  const InputView = () => {
    setViewInput(!viewInput);
    // refInput.current.focue();
  } 

  const onChangeText = async (text) => {
    setInputText(text)
  }

  const handleJoin = (data) =>{
    navigation.navigate("JionCommunity",{data});
  }

  const getCommunityList =  () => {
    getLocalData('USER_INFO').then(async(res) => {
      const resData = res?.data;
      const result = await dispatch(getCommunityApi({specialityId:resData?.speciality_id}));
      console.log(result?.payload?.result);
      setCommunityList(result?.payload?.result);
      
    })
  }

  useEffect(() => {
    getCommunityList()
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
        <ScrollView>
          {communityList?.map((data,index) =>{
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
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.plusContainer} onPress={() => navigation.navigate("CreateCommunity")}>
          {Icon('AntDesign','plus',40,'#fff')}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Community