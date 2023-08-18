import { View, Text, SafeAreaView,Image ,TouchableOpacity,ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from './SentimetrixStyles';
import { getLocalData } from '../../apis/GetLocalData';
import { getSentimetrixListAPI } from '../../../redux/reducers/SentimetrixSlice';
import { useDispatch,useSelector } from 'react-redux';

const SentimetrixList = ({navigation}) => {
    const [listData, setListData] = useState();
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const sentiData = useSelector((state) =>state?.sentimetrixData?.sentimetrixList);
    console.log("sentiData",sentiData);

    const getSentimetrixList = () => {
        getLocalData('USER_INFO').then(async (res) => {
            setLoader(true);
            const data = res?.data
            const postParams = { 
                id:data?.id, 
                speciality_id:data?.speciality_id,
                city_id :data?.city_id,
                assoc_id :data?.assoc_id,
            };
            const getList = await dispatch(getSentimetrixListAPI(postParams));
            setListData(getList?.payload);
            setLoader(false);
        })
    }

    const handleSelectMcq = (data) => {
        navigation.navigate("Sentimetrix",{basicId :data?.basic_id});
    }

    useEffect(() => {
        navigation.setOptions({ title: `Sentimetrix`});
        getSentimetrixList()
    },[])
  return (
    <SafeAreaView style={{ backgroundColor: "#ecf2f6", flex:1,padding:15}}>
        {loader &&
        <View style={{justifyContent:'center', alignItems:'center' }} >
            <ActivityIndicator size={'small'} color={"#2C8892"}/>
        </View>}
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