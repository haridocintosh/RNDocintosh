import { View, Text,SafeAreaView,Image,Switch,ActivityIndicator} from 'react-native'
import React,{ useEffect, useState } from 'react';
import { styles } from './ProfileNPrivacySettingsStyles';
import { getLocalData } from '../../../apis/GetLocalData';
import { privacySettingListAPI, privacySettingsAPI } from './ProfileNPrivacySlice';
import { useDispatch } from 'react-redux';


const ProfileNPrivacySettings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [ppData, setPPData] = useState([]);
  const [userData, setUserData] = useState();
  const [loader, setLoader] = useState(false);
  
  const dispatch = useDispatch();

  const getPPdata = () =>{
    getLocalData('USER_INFO').then( async (res) => {
      setLoader(true);
      const resData = res?.data;
      setUserData(resData)
      const resetResult = await dispatch(privacySettingListAPI({id:resData?.id}));
      setPPData(resetResult.payload);
      setLoader(false);
    });
  }

  useEffect(() => {
    navigation.setOptions({title: 'Profile & Privacy Settings'});
    getPPdata();
  },[])

  const handleSelect =  async (val,bool) => {
      const result = ppData?.map(data => data.field_column == val ? {...data, isEnable:!data.isEnable}: data);
      setPPData(result);
      const postData = {id:userData?.id,column:val,value:bool? 1:0}
      const resetResult = await dispatch(privacySettingsAPI(postData));
  }

  if(loader){
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
        <ActivityIndicator size={'large'} color={"#2C8892"}/>
    </View>)
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

export default ProfileNPrivacySettings;