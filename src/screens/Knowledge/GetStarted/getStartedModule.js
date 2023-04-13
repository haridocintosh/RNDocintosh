import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState,useRef} from 'react';
import Video from 'react-native-video';

const getStartedModule = ({navigation,route}) => {
    const [btnClick, setBtnClick] = useState(true);
    const {subTitle,video} = route.params;
    const videoPlayer = useRef(null);

    const fullscreen = () => {
        
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
        <View style={styles.videoContainer}>
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
                fullscreen={fullscreen}
              />
        </View>
        :
        <Text>{subTitle}</Text>}
        
    </SafeAreaView>
  )
}

export default getStartedModule;


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
    videoContainer:{
        marginTop:20,
        paddingVertical:15,
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