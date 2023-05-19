import React,{useState,useEffect } from 'react';
import { View, Text ,Image,SafeAreaView, ScrollView,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Card } from 'react-native-paper';
import {styles} from '../../EditProfile/EditProfileStyles';
import { Icon } from '../../../navigation/ReuseLogics';
import FastImage from 'react-native-fast-image';

const OtherProfileView = ({route}) => {
    const {data} =route?.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
            <Card style={styles.CartContainer}>
                <View style={styles.ProfileImageContainer}>
                <FastImage
                    style={styles.profileimg}
                    source={data.userprofile && {
                            uri:data.userprofile,
                            priority: FastImage.priority.normal,
                        }}
                />
                </View>
                <View>
                    <Text style={styles.userName}>
                        {data?.username} <Image source={require('../../../assets/images/celTick.png')} style={styles.imageTick}/>
                    </Text>
                    <View style={styles.userCategoryContainer}>
                        <Text style={styles.userCategory}>{data?.speciality} | Bangalore</Text>
                    </View>
                </View>
            </Card>  

            <Card style={styles.CartContainer}>
                <View>
                    <Text style={styles.userInfoTitle}>About {data?.username}</Text>
                </View>
                <Text style={{color:'#51668A',lineHeight:20,marginBottom:20}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. 
                </Text>
            </Card>
            <Card style={styles.CartContainer}>
                <View style={styles.InterestsContainer}>
                <Text style={styles.userInfoTitle}>Interests</Text>
                </View>
                <View style={styles.InterestsList}>
                {/* {loader &&<View style={styles.loaderContainer}>
                    <ActivityIndicator size={'small'}/>
                </View>} */}
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
            </Card>
          </ScrollView>
    </SafeAreaView>
  )
}

export default OtherProfileView