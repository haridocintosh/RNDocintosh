import React,{useState,useEffect } from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../../EditProfile/EditProfileStyles';
import FastImage from 'react-native-fast-image';
import { getDoctorsDetails } from '../../../../redux/reducers/ALL_APIs';
import { useDispatch } from 'react-redux';


const OtherProfileView = ({route}) => {
    const [userDetais, setUserDetails] = useState();
    const {data} =route?.params;
    // console.log("data",data?.follow_to);
    const dispatch = useDispatch();

    const GetDoctorDetails = async() => {
        const result = await dispatch(getDoctorsDetails({id:data?.follow_to}));
        setUserDetails(result.payload);
        console.log("result.payload",result.payload);
    }

    useEffect(() => {
        GetDoctorDetails()
    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
            <Card style={styles.CartContainer}>
                <View style={styles.ProfileImageContainer}>
                <FastImage
                    style={styles.profileimg}
                    source={userDetais?.user_profile?.profileimage && {
                            uri:userDetais?.user_profile?.profileimage,
                            priority: FastImage.priority.normal,
                        }}
                />
                </View>
                <View>
                    <Text style={styles.userName}>
                        {userDetais?.user_profile?.title} {userDetais?.user_profile?.first_name} {`${userDetais?.user_profile?.last_name} `}
                        <Image source={require('../../../assets/images/celTick.png')} style={styles.imageTick}/>
                    </Text>
                    <View style={styles.userCategoryContainer}>
                        <Text style={styles.userCategory}>
                            {userDetais?.user_profile?.speciality} | {userDetais?.user_profile?.state}</Text>
                    </View>
                </View>
            </Card>  

            {userDetais?.user_profile?.summary && <Card style={styles.CartContainer}>
                <View>
                    <Text style={styles.userInfoTitle}>About</Text>
                </View>
                <Text style={{color:'#51668A',lineHeight:20,marginBottom:20}}>
                {userDetais?.user_profile?.summary}
                </Text>
            </Card>}
            {/* <Card style={styles.CartContainer}>
                <View style={styles.InterestsContainer}>
                <Text style={styles.userInfoTitle}>Interests</Text>
                </View>
                <View style={styles.InterestsList}>
                {loader &&<View style={styles.loaderContainer}>
                    <ActivityIndicator size={'small'}/>
                </View>}
                    <View style={styles.InterestsSelected}>
                        <Text>speciality</Text>
                    </View>
                    <View style={styles.InterestsSelected}>
                        <Text>speciality</Text>
                    </View>
                    <View style={styles.InterestsSelected}>
                        <Text>speciality</Text>
                    </View>
                    <View style={styles.InterestsSelected}>
                        <Text>speciality</Text>
                    </View>
                </View>
            </Card> */}
          </ScrollView>
    </SafeAreaView>
  )
}

export default OtherProfileView