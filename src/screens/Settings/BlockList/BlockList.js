import { View, Text, SafeAreaView,Image,TouchableOpacity,Modal } from 'react-native'
import React, { useEffect ,useState} from 'react';
import { styles } from './BlockListStyle';
import { getLocalData } from '../../../apis/GetLocalData';
import { getBlockedUsersApi } from '../../../../redux/reducers/SettingsSlice';
import { useDispatch } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BlockUserApi } from '../../../../redux/reducers/ALL_APIs';

const BlockList = ({navigation}) => {
    const [userId, setUserId] = useState(null);
    const [item, setItem] = useState();
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState();
    const [userData, setUserData] = useState();
    
    const dispatch = useDispatch();

    const getBlockedData = () => {
        getLocalData("USER_INFO").then( async (res) => {
            setUserData(res?.data)
            const blockedUsers = await dispatch(getBlockedUsersApi({user_id:res?.data?.id}));
            setItem(blockedUsers?.payload);
        });
    }

    useEffect(() => {
        navigation.setOptions({title: "Block List"});
        getBlockedData();
    },[])

    const handleUnblock = (id, name) => {
        setUserId(id);
        setName(name);
        setVisible(true);
    }

    const handleUnblockOk = async ()=> {
        const postDetails = {fromuserid:userData?.id ,touserid:userId};
        const blockPostResult  = await dispatch(BlockUserApi(postDetails));
        getBlockedData();
        setVisible(false);
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",paddingHorizontal:15,paddingVertical:10 }}>
        <Text style={styles.BlockedTitle}>Blocked People</Text>
        <Text style={styles.BlockedSubtitle}>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur.</Text>
        {item?.data?.map((data,i) => {
            return(
            <View style={styles.communitySubDiv} key={i}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"flex-start",alignItems:'center'}}>
                    <Image source={{uri:data?.profileimage}} style={{width:50,height:50,borderRadius:50}}/>
                    <View style={styles.doctorListContent}>
                        <Text style={{fontWeight:"600",fontSize:15}}>
                            {data?.username}
                        </Text>
                        <Text style={styles.communittysubtxt}>{data?.speciality}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => handleUnblock(data?.id, data?.username)}>
                    <Text style={styles.UnblockText}>Unblock</Text>
                </TouchableOpacity>
            </View>
            )
        })}

        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.closeModalXIcon}>
                    <AntDesign name='close' size={25} color={'#51668A'}/>
                </TouchableOpacity>
                <Text style={styles.textBold}>Unblock {name}?</Text>
                <Text style={styles.textNormal}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis porta risus.</Text>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                    style={styles.buttonsDesign}
                    onPress={() => handleUnblockOk()}>
                    <Text style={[styles.textBold,styles.RightText]}>Unblock</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </Modal>
     
    </SafeAreaView>
  )
}

export default BlockList