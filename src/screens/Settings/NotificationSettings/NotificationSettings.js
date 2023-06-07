import { View, Text,SafeAreaView,Switch } from 'react-native'
import React,{useEffect, useState} from 'react';
import { styles } from './NotificationSettingsStyle';
import { getNotificationApi } from '../../../../redux/reducers/SettingsSlice';
import { getLocalData } from '../../../apis/GetLocalData';
import { useDispatch } from 'react-redux';
import { HandleSwitch } from './HandleSwitch';


const NotificationSettings = ({navigation}) => {
    const dispatch = useDispatch();
    const [userId,setUserId] = useState();
    const [fetchData,setFetchData] = useState();
    

    const getDataFetch = () => {
        getLocalData('USER_INFO').then(async(res) => {
            const reData = res?.data;
            setUserId(reData?.id);
            const result = await dispatch(getNotificationApi({user_id : reData?.id}));
            console.log("result",result?.payload);
            setFetchData(result?.payload)
        })
    }

    useEffect(() =>{
        getDataFetch();
        navigation.setOptions({ title: 'Notification Settings'});
    },[])
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
        {fetchData && <><HandleSwitch 
            title={"Post claps"} 
            column={"postclaps"} 
            userId={userId}
            bool={fetchData?.[0]?.postclaps == "0" ? false : true}
        />
        <HandleSwitch 
            title={"Comment alert on your post"} 
            column={"commentalert"} 
            userId={userId}
            bool={fetchData?.[0]?.commentalert == "0" ? false : true}
        />
        <HandleSwitch 
            title={"Alert on post upload in your circle"} 
            column={"circlepostalert"} 
            userId={userId}
            bool={fetchData?.[0]?.circlepostalert == "0" ? false : true }
        /></>}
    </SafeAreaView>
  )
}

export default NotificationSettings