import { View, Text,SafeAreaView,Image,Switch} from 'react-native'
import React,{ useEffect, useState } from 'react';
import { styles } from './ProfileNPrivacySettingsStyles';
import { getLocalData } from '../../../apis/GetLocalData';
import { privacySettingListAPI, privacySettingsAPI } from './ProfileNPrivacySlice';
import { useDispatch } from 'react-redux';


const PPData = [
  {
    name:'Email-ID',
    source:require('../../../assets/dr-icon/Ic_Email.png'),
    isEnable:true,
    column : "email",
  },
  {
    name:'Following list',
    source:require('../../../assets/dr-icon/Ic_Following.png'),
    isEnable:false,
    column : "following",
  },
  {
    name:'Followers list',
    source:require('../../../assets/dr-icon/Ic_Followers.png'),
    isEnable:true,
    column : "follower",
  },
  {
    name:'Earned Doc-Coins',
    source:require('../../../assets/dr-icon/Ic_Coin.png'),
    isEnable:false,
    column : "earned_coins",
  },
  {
    name:'Qualification',
    source:require('../../../assets/dr-icon/Ic_Qualification.png'),
    isEnable:true,
    column : "qualification",
  },
  {
    name:'Work Experience',
    source:require('../../../assets/dr-icon/Ic_Work_Experience.png'),
    isEnable:false,
    column : "work_exp",
  },
  {
    name:'Award',
    source:require('../../../assets/dr-icon/Ic_Award.png'),
    isEnable:true,
    column : "award",
  },
  {
    name:'Paper Published',
    source:require('../../../assets/dr-icon/Ic_Paper_Published.png'),
    isEnable:false,
    column : "paper_published",
  },
  {
    name:'Achievement',
    source:require('../../../assets/dr-icon/Ic_Achievement.png'),
    isEnable:true,
    column:"achievement",
  },
  {
    name:'Special Skills',
    source:require('../../../assets/dr-icon/Ic_Skills.png'),
    isEnable:false,
    column : "special_skills",
  }
]

const ProfileNPrivacySettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [ppData, setPPData] = useState(PPData);
  const [userData, setUserData] = useState();

  const dispatch = useDispatch();

  const getPPdata = () =>{
    getLocalData('USER_INFO').then( async (res) => {
      const resData = res?.data;
      setUserData(resData)
      const resetResult = await dispatch(privacySettingListAPI({id:resData?.id}));
      console.log("resetResult",resetResult.payload);
      setPPData(resetResult.payload);
      
    });
  }


  useEffect(() => {
    navigation.setOptions({ title: 'Profile & Privacy Settings'});
    getPPdata()
  },[])

  const handleSelect =  async (val,bool) => {
    console.log("val,bool",val,bool);
      const result = ppData?.map(data => data.field_column == val ? {
        ...data,
        isEnable:!data.isEnable
      }: data)
      console.log(val,bool);
      setPPData(result);
      const postData = {id:userData?.id,column:val,value:bool? 1:0}
      console.log(postData);
      const resetResult = await dispatch(privacySettingsAPI(postData));
      console.log("resetResult",resetResult.payload);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
      {ppData?.map((data,index) => {
        return(
          <View style={styles.mainContainer} key={index}>
            <View style={styles.IconContainer}>
              <Image source={{uri: data?.image_path}} style={styles.icons}/>
              <Text style={styles.ppNames}>{data.field_name}</Text>
            </View>
            <Switch
                trackColor={{false: '#DDDDDD', true: '#2C8892'}}
                thumbColor={isEnabled ? '#DDDDDD' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onChange={() => handleSelect(data.field_column,data.isEnable)}
                onValueChange={setIsEnabled}
                value={data.isEnable == "0" ? false : true}
            />
          </View>
        )
      })}
    </SafeAreaView>
  )
}

export default ProfileNPrivacySettings