import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { styles } from './OptionModalStyles';


const OptionModal = ({modalVisible}) => {
  return (
    <View style={styles.container}>
        {modalVisible &&
        <View style={styles.optionModal}>
            <View>
                <TouchableOpacity style={styles.optionList}>
                    <MaterialIcons name={'messenger'} size={24} color={"#45B5C0"} style={styles.optionListIcon}/>
                    <Text style={styles.optionListText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionList}>
                    <Image source={require('../../assets/dr-icon/optionDcoin.png')} style={{width:25,height:25,marginRight:5}}/>
                    <Text style={styles.optionListText}>Send Coins</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionList}>
                    <Image source={require('../../assets/dr-icon/Ic_Exit.png')} style={{width:25,height:25,marginRight:5}}/>
                    <Text style={styles.optionListText}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionList}>
                    <MaterialIcons name="report-problem" size={24} color="#45B5C0" style={styles.optionListIcon}/>
                    <Text style={styles.optionListText}>Report</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionList} >
                    <Entypo name="block" size={24} color="#45B5C0" style={styles.optionListIcon}/>
                    <Text style={styles.optionListText}>Block</Text>
                </TouchableOpacity>
            </View>
        </View>}
    </View>
  )
}

export default OptionModal