import { View, Text,SafeAreaView ,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
import React,{useEffect, useRef, useState,useMemo} from 'react'
import { styles } from './BellNotificationStyles';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { TapGestureHandler, ScrollView } from "react-native-gesture-handler";
import { getAllNotification } from '../../../../redux/reducers/getSpeciality';
import { useDispatch } from 'react-redux';
import moment from "moment";

const BellNotification = ({navigation}) => {
    const dispatch =  useDispatch();
    const [getNotification, setgetNotification] = useState();
    const [loader, setLoader] = useState(true);
    const snapPoints = useMemo(() => [1, '30%'], []);
    const bottomSheetRef = useRef(null);
   
    const handlePresentModal = () => {
        bottomSheetRef.current?.expand();
    }

    

    const fetchNotification = async () => {
        const allNotification = await dispatch(getAllNotification());
        setgetNotification(allNotification.payload);
        setLoader(false);
    }

    useEffect(()=>{
        navigation.setOptions({ title: 'Notification'});
        bottomSheetRef.current?.close();
       fetchNotification();
    },[])
    // var d = new Date()

    if(loader){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
            <ActivityIndicator size={'large'} color={"#2C8892"}/>
        </View>)
    }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E6E6E6'}}>
        <ScrollView>
        {/* {getQualificationData?.slice(0, qualificationShowAll)?.map((data,i) => {})} */}
       { getNotification?.map((data,i)=>{
        const obj = JSON.parse(data.data)
            return(
                <View style={styles.userDoesContainer}>
                    <View style={styles.WhatuserDoes}>
                        <Image source={data?.profileimage && {uri:data?.profileimage}} style={styles.ProfilePic}/>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>{data?.username}</Text>
                            <Text style={styles.userTimeText}>
                                {obj?.message} . {moment(data?.created_at).calendar()}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.threeDotsContainer} onPress={() => handlePresentModal()}>
                    <Image source={require('../../../assets/images/three-dots.png')} style={styles.threeDots}/>
                    </TouchableOpacity>
                </View>
            )}
        )}
          
        </ScrollView>

        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
        >
            <BottomSheetView>
            <ScrollView>
                <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/follow.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Follow</Text>
                        <Text style={styles.OpionsSubTitle}>Follow this user</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/manageNotification.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Manage notifications</Text>
                        <Text style={styles.OpionsSubTitle}>Manage notifications from this page</Text>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.SheetOpionsContainer}>
                    <Image source={require('../../../assets/dr-icon/turnOffNotification.png')} style={styles.SheetOpions}/>
                    <View style={styles.OpionsContainer}>
                        <Text style={styles.OpionsTitle}>Turn off notifications</Text>
                        <Text style={styles.OpionsSubTitle}>Stop receiving notification like this</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            </BottomSheetView>
        </BottomSheet>
      
    </SafeAreaView>
  )
}

export default BellNotification