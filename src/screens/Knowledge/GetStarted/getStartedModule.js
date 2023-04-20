import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react';
import Video from 'react-native-video';
import { Image } from 'react-native-elements';
import { Button } from 'react-native-elements';


const GetStartedModule = ({navigation,route}) => {
    const [btnClick, setBtnClick] = useState(true);
    const [nxtImage, setNxtImage ] = useState(1);

    const {subTitle,video,number,module} = route.params;
    const videoPlayer = useRef(null);

    const slideImage1 = `https://docintosh.com/homeassets/images/Tele/Telemedicine-M1-${nxtImage}.png`;
    const slideImage2 = `https://docintosh.com/homeassets/images/Tele2/telemedicine-Module-2-${nxtImage}.png`;
    const slideImage3 = `https://docintosh.com/homeassets/images/Tele3/Telemedicine-Course-Module-3-${nxtImage}.png`;

    const handleNetImg = () => {
        // console.log(nxtImage,number);
        setNxtImage(nxtImage + 1);
    }
    const handlePrevImg = () => {
        // console.log(nxtImage,number);
        setNxtImage(nxtImage - 1);
    }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
    <View style={styles.rewardsContainer}>
        <TouchableOpacity style={styles.rewardsBtnsConatiner} onPress={() => setBtnClick(true)}>
            <View style={btnClick ? styles.rewardsBtnActive : styles.rewardsBtnInActive}>
               <Text style={btnClick ? styles.rewardsTextActive :styles.rewardsTextInActive}>Video</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rewardsBtnsConatiner} onPress={() => setBtnClick(false)}>
            <View style={btnClick ? styles.rewardsBtnInActive :styles.rewardsBtnActive}>
               <Text style={btnClick ? styles.rewardsTextInActive:styles.rewardsTextActive}>Slide Desk</Text>
            </View>
        </TouchableOpacity>
    </View>
    {btnClick ? 
    <View style={styles.viewContainer}>
        <Text style={styles.modalSubTitle}>{subTitle}</Text>
        <Video
            paused={false}
            ref={videoPlayer}
            resizeMode={"contain"}
            source={{uri:video}} 
            style={{width:"100%",marginHorizontal:10,alignSelf:'center',height:250,}}
            volume={10}
            useTextureView={false}
            playInBackground={false}
            disableFocus={true}
            controls={true}
            playWhenInactive={false}
          />
    </View>
    :
    <View style={styles.viewContainer}>
        <Image 
        source={module == 1 ? {uri:slideImage1} : module == 2 ? {uri:slideImage2}: module == 3 && {uri:slideImage3}} 
        style={{width:'100%',height:270,borderRadius:5}}/>
        <View style={{flexDirection:'row',margin:10,justifyContent:'space-between'}}>
            <Button
                onPress={() => handlePrevImg()}
                title={'Previous'}
                type="outline"
                disabled={nxtImage == 1? true : false}
                buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2,width:150}}
                titleStyle={{ color:'#fff'}}
            />
            <View style={{width:20}}/>
            <Button
                onPress={() => handleNetImg()}
                title={'Next'}
                type="outline"
                disabled={number== nxtImage ? true : false}
                buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, width:150}}
                titleStyle={{ color:'#fff'}}
            />
        </View>
    </View>}
    
</SafeAreaView>
  )
}

export default GetStartedModule

export const styles = StyleSheet.create({
    rewardsContainer:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:5,
        borderRadius:7,
    },
    rewardsBtnActive:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:'99%',
        backgroundColor:'#2C8892'
    },
    rewardsBtnInActive:{
        borderWidth:2,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:'99%',
        backgroundColor:'#e1f3f5',
        borderColor:'#2C8892'

    },
    rewardsTextActive:{
        color:'#fff',
        fontFamily:'Inter-SemiBold',
        fontSize:15
    },
    rewardsTextInActive:{
        color:'#2C8892',
        fontFamily:'Inter-SemiBold',
        fontSize:15
    },
    rewardsBtnsConatiner:{
        height:50,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    // ------------------------------video container------------------------
    viewContainer:{
        marginTop:20,
        // paddingVertical:15,
        backgroundColor:'#fff',
        borderRadius:5
    },
    modalSubTitle:{
        margin:15,
        fontFamily:'Inter-Regular',
        fontSize:16,
        color:'#20324A'
    },
})