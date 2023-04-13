import { View,Dimensions, Text,SafeAreaView,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native'
import React,{useRef, useState,useEffect} from 'react';
import { Button } from 'react-native-elements';

const StartModules = ({navigation}) => {
    const subTitleM1 = 'Introduction to telemedicine orientation'
    const subTitleM2 = 'Medical code of ethics'
    const subTitleM3 = 'Introduction to Practice Guidelines'

    const video1 = 'https://docintosh.com/homeassets/images/TSI/Telemedicine_Webinar_Module1.mp4'
    const video2 = 'https://docintosh.com/homeassets/images/TSI/Telemedicine_Webinar_Module2.mp4'
    const video3 = 'https://docintosh.com/homeassets/images/TSI/Telemedicine_Webinar_Module3.mp4'
    useEffect(()=>{
        navigation.setOptions({ title:'Modules'});
    },[])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
       <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image source={{uri:'https://docintosh.com/homeassets/images/Tele/thumbnail/Tele-M1.png'}} style={styles.moduleImage}/>
                <View style={{flex:1}}>
                    <Text style={styles.modalTitle}>Module 1</Text>
                    <Text style={styles.modalSubTitle}>{subTitleM1}</Text>
                </View>
            </View>
        <Button
            onPress={() => navigation.navigate('getStartedModule',{subTitle: subTitleM1,video: video1})}
            title={"Get Started"}
            type="outline"
            buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
            titleStyle={{ color:'#fff'}}
        />
        </View>
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image source={{uri:'https://docintosh.com/homeassets/images/HAR/module-1/Telemedicine-Course-Module3-Thumbnail.png'}} style={styles.moduleImage}/>
                <View style={{flex:1}}>
                    <Text style={styles.modalTitle}>Module 2</Text>
                    <Text style={styles.modalSubTitle}>{subTitleM2}</Text>
                </View>
            </View>
        <Button
            onPress={() => navigation.navigate('getStartedModule',{subTitle: subTitleM2,video: video2})}
            title={"Get Started"}
            type="outline"
            buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
            titleStyle={{ color:'#fff'}}
        />
        </View>
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <Image source={{uri:'https://docintosh.com/homeassets/images/Tele3/Tele-3-thumb.png'}} style={styles.moduleImage}/>
                <View style={{flex:1}}>
                    <Text style={styles.modalTitle}>Module 3</Text>
                    <Text style={styles.modalSubTitle}>{subTitleM3}</Text>
                </View>
            </View>
        <Button
            onPress={() => navigation.navigate('getStartedModule',{subTitle: subTitleM3,video: video3})}
            title={"Get Started"}
            type="outline"
            buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
            titleStyle={{ color:'#fff'}}
        />
        </View>

        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <View style={{flex:1}}>
                    <Text style={styles.modalTitle}>SELF-ASSESSMENT TEST</Text>
                    <Text style={styles.modalSubTitle}>Test your knowledge by attempting these multiple-choice questions. All the best!</Text>
                </View>
            </View>
        <Button
            onPress={() => navigation.navigate('AssesmentTest',{subTitle: subTitleM3,video: video3})}
            title={"Participate"}
            type="outline"
            buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
            titleStyle={{ color:'#fff'}}
        />
        </View>

        <View style={styles.container}>
            <View style={styles.ImageContainer}>
                <View style={{flex:1}}>
                    <Text style={styles.modalTitle}>e-CERTIFICATE</Text>
                    <Text style={styles.modalSubTitle}>Congratulations on completing the modules!</Text>
                    <Text style={styles.modalSubTitle}>Score 7 or more to avail the certificate.</Text>
                </View>
            </View>
        <Button
            onPress={{}}
            title={"Download"}
            type="outline"
            disabled={true}
            buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
            titleStyle={{ color:'#fff'}}
        />
        </View>

        </ScrollView>
    </SafeAreaView>
  )
}

export default StartModules;

export const styles = StyleSheet.create({
    container:{
      width:'100%',
      backgroundColor:'#fff',
      fontFamily:'Inter-SemiBold',
      padding:10,
      borderRadius:10,
      shadowColor: '#000',
      shadowOffset: {width:0,height:2},
      shadowOpacity: 0.30,
      shadowRadius: 4,
      elevation: 3,
      marginBottom:20,
    },
    ImageContainer:{
      flexDirection:'row',
    },
    modalTitle:{
        marginLeft:10,
        fontFamily:'Inter-SemiBold',
        fontSize:18,
        color:'#20324A'
    },
    modalSubTitle:{
        marginLeft:10,
        fontFamily:'Inter-Regular',
        fontSize:16,
        color:'#20324A'
    },
    moduleImage:{
        width:100,
        height:100,
        borderRadius:5
    },
  })