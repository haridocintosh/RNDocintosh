import { View, Text,SafeAreaView, ScrollView, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react';
import {styles} from './BusinessPageStyles'
import { Icon } from '../../navigation/ReuseLogics';

const MyPages = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6"}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnable={true}>
               <View style={styles.mypageContainer} >
                     <View style={styles.mypageLhs}>
                        <TouchableOpacity>
                           {/* <Image source={{uri:data.userprofile}} style={styles.profileimgMypage}/> */}
                        </TouchableOpacity>
                        <View style={styles.mypageName}>
                           <Text style={styles.mypageNameText}>username</Text>
                           <Text style={styles.mypageSpecialist}>speciality</Text>
                        </View>
                     </View>
                     <TouchableOpacity style={styles.mypageLhs}>
                        {Icon('Entypo','dots-three-vertical',22,'#51668A')}
                     </TouchableOpacity>
               </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MyPages