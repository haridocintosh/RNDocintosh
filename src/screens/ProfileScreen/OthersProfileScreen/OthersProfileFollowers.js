import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../profilestyle';


const OthersProfileFollowers = ({navigation}) => {
    useEffect(() => {
        navigation.setOptions({ title: 'Followers' });
    },[])
    const handleOtherProfile = (data) =>{
      navigation.navigate('OthersProfileScreen',{data})
   }
  return (
    <SafeAreaView style={styles.Follwerscontainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
            <View style={styles.followerHeader}>
                <Text style={styles.followerHeader}>Followers</Text>
            </View>
            <View style={styles.followerContainer}>
                  <View style={styles.followerLhs}>
                     <TouchableOpacity onPress={() => handleOtherProfile()}>
                        {/* <Image source={{uri:data.userprofile}} style={styles.profileimgfollower}/> */}
                     </TouchableOpacity>
                     <View style={styles.followerName}>
                        <Text style={styles.followerNameText}>username</Text>
                        <Text style={styles.followerSpecialist}>speciality</Text>
                     </View>
                  </View>
                  <View style={styles.followerLhs}>
                     <Entypo name="dots-three-vertical" size={20} color="#51668A"  style={{display:"flex",justifyContent:"center",alignContent:"flex-end"}}/>
                  </View>
            </View>
            {/* <View>
               <Image source={require('../../../assets/images/followMe.png')} style={{width:'70%',height:300,alignSelf:'center'}}/>
            </View>} */}
        </ScrollView>
    </SafeAreaView>
  )
}

export default OthersProfileFollowers;