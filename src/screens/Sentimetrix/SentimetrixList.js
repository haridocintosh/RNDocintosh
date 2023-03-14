import { View, Text, SafeAreaView,Image ,TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './SentimetrixStyles';
import { getLocalData } from '../../apis/GetLocalData';
import { getSentimetrixListAPI } from '../../../redux/reducers/SentimetrixSlice';
import { useDispatch } from 'react-redux';


const SentimetrixList = ({navigation}) => {
    const [listData, setListData] = useState();
    const dispatch = useDispatch();

    const getSentimetrixList = () => {
        getLocalData('USER_INFO').then(async (res) => {
            const data = res?.data
            const postParams = { 
                id:data?.id, 
                speciality_id:data?.speciality_id,
                city_id :data?.city_id,
                assoc_id :data?.assoc_id,
            };
            const getList = await dispatch(getSentimetrixListAPI(postParams));
            setListData(getList?.payload)
        })
    }

    const handleSelectMcq = (data) => {
        navigation.navigate("SentimetrixMcq",{basicId :data?.basic_id});
    }

    useEffect(() => {
        getSentimetrixList()
    },[])
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex:1,padding:15}}>
        {listData?.map((data,i) => {
            return(
                <TouchableOpacity style={styles.surveyOptionsContainer} key={i} onPress={() => handleSelectMcq(data)}>
                    <View>
                        <Text style={styles.optionTitle}>{data?.title}</Text>
                        <Text style={styles.optionSubTitle}>Docintosh Sentimetrix</Text>
                    </View>
                    <View style={styles.couponConatiner}>
                        <Image source={require('../../assets/dr-icon/coupon1.png')} style={styles.imageIcon}/>
                    </View>
                </TouchableOpacity>
            )
        })}
       
      
    </SafeAreaView>
  )
}

export default SentimetrixList