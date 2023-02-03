import { View, Text,Image,StyleSheet, SafeAreaView, TouchableOpacity, Modal,Dimensions,ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Slider from '@react-native-community/slider';

const AudioScreen = ({navigation}) => {
  const [contactData, setContactData] = useState();
  const [contactError, setContactError] = useState(false);
  const [soundObj, setSoundObj] = useState(null);
  const [currentAudio, setCurrentAudio] = useState();
  const [toggle, setToggle] = useState(false);
  const [audioData, setAudioData] = useState(false);
  const [barDuration, setBarDuration] = useState(null);
  const [send, setSend] = useState(false);

  const playBack = new Audio.Sound();

    const permissionAllert = () => {
        Alert.alert('Permission Required', 'This app needs to read audio files!',[
          {
            text: 'I am ready',
            onPress: () => getPermission(),
          },
          {
            text: 'cancle',
            onPress: () => permissionAllert(),
          },
        ]);
      };

    const getPermission = async () => {
      const permission = await Permissions.getAsync(Permissions.MEDIA_LIBRARY);
        if(permission.granted){getAudioFiles()}
        if(!permission.canAskAgain && !permission.granted){
          setContactError(true);
        }
        if(!permission.granted && permission.canAskAgain){
          const { status, canAskAgain } =
          await MediaLibrary.requestPermissionsAsync();
            if (status === 'denied' && canAskAgain) {
              permissionAllert();
            }
            if(status === 'granted'){
              getAudioFiles();
            }
            if(status === 'denied' && !canAskAgain){
              setContactError(true);
            }
        }
    }

    const getAudioFiles = async () => {
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
      });
      media = await MediaLibrary.getAssetsAsync({
        mediaType: 'audio',
        first: media.totalCount,
      });
       const insert =  media?.assets.map((data) => {
         return {...data, isSelected:false}
      });
      console.log(insert);
      setContactData(insert)
    };

    const convertTime = (minutes) => {
      if (minutes) {
        const hrs = minutes / 60;
        const minute = hrs.toString().split('.')[0];
        const percent = parseInt(hrs.toString().split('.')[1].slice(0, 2));
        const sec = Math.ceil((60 * percent) / 100);
        if (parseInt(minute) < 10 && sec < 10) {
          return `0${minute}:0${sec}`;
        }
        if (parseInt(minute) < 10) {
          return `0${minute}:${sec}`;
        }
        if (sec < 10) {
          return `${minute}:0${sec}`;
        }
        return `${minute}:${sec}`;
      }
    };

    const selectAudio = async (audioId) => {
      console.log(audioId);
      // setShouldPlay({...shouldPlay, audioId});
      let temp = contactData?.map((data) => {
        if (audioId === data.id) {
          return { ...data, isSelected: !data.isSelected };
        }
        return data;
      });
      console.log(temp);
      setContactData(temp);
      // setSend(true)
    }

    const getData = async (audio) => {
      setToggle(!toggle);
      setAudioData(audio)
      if(soundObj == null){
        setCurrentAudio(audio.id);
        const status = await playBack.loadAsync({uri:audio.uri},{shouldPlay:true});
         setSoundObj({...soundObj, playBack:playBack, soundObj:status, currentAudio:audio});
         return playBack.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
      }
      if(soundObj.soundObj.isLoaded && soundObj.soundObj.isPlaying){
        setCurrentAudio();
        const status = await soundObj.playBack.setStatusAsync({shouldPlay:false});
        return setSoundObj(null);
      }
    }

    const onPlaybackStatusUpdate = (duration) =>{
      setBarDuration(duration);
    }

    const calculateSeekBar = () => {
      if(barDuration !== null){
        return barDuration?.positionMillis / barDuration?.durationMillis
      }
      return 0
    }

    useEffect(() => {
        navigation.setOptions({ title: `Audio's`});
        getPermission();
    },[])
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {contactError && <Text>You don't have a Permission to access data.</Text>}
      {contactData?.map((d, i) => {
        return(
          <TouchableOpacity style={styles.audioContainer} key={i} onPress={() => selectAudio(d.id)}>
            <View style={styles.audioImage}>
              <View>
              <Image source={require('../../../assets/images/AudioIcon.png')} style={styles.audioImageIcon}/>
              {d.isSelected && <View style={styles.SelectedTickContainer}>
                  <Ionicons name="checkmark-circle" size={15} color="#0F9C69" style={styles.SelectedTick}/>
                </View>}
              </View>
              <View>
                <Text style={styles.audioText}>
                  {d.filename.split("_")[0]}
                </Text>
                <Text style={styles.audioDownText}>
                  
                  {convertTime(d.duration)} 
                  {/* . 3.4mb */}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.PlayImageIconContainer} onPress={() => getData(d)}>
              <Ionicons name={currentAudio == d.id ? "md-pause-circle-sharp" :"md-play-circle"} size={24} color="#51668A" />
            </TouchableOpacity>
          </TouchableOpacity>
        )
        })}


       <Modal
          animationType="fade"
          transparent={true}
          visible={toggle}
        >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.colseIcon} onPress={() => {getData(audioData)}}>
                  <AntDesign name="close" size={20} color="#141414" />
                </TouchableOpacity>
              
                <Text style={styles.textBold}>{audioData?.filename?.split("_")[0]}</Text>
                {/* <Text style={styles.textNormal}>Are you sure you want to exit app?</Text> */}
                <View style={styles.buttonsContainer}>
                  <Slider
                    style={{width: 250, height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    value={calculateSeekBar()}
                    minimumTrackTintColor="rgba(0,0,0,0.5)"
                    maximumTrackTintColor="rgba(0,0,0,0.4)"
                  />
                  {/* <View style={styles.barTimeSec}>
                  <Text>{convertTime(audioData.duration)}</Text>
                  <Text>{currentPosition ? currentPosition : renderCurrentTime()}</Text>
                </View> */}
                </View>
              </View>
            </View>
        </Modal>

      {/* {send && */}
        <TouchableOpacity style={styles.sendIcon}>
           <MaterialCommunityIcons name="send-circle" size={64} color="#2C8892" />
        </TouchableOpacity>
      {/* } */}
        

        
    </SafeAreaView>
  )
}

export default AudioScreen;
const styles = StyleSheet.create({
  SafeAreaView:{
    flex:1,
    backgroundColor: '#F2FAFA',
    padding:15
  },
  audioContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10
  },
  audioImageIcon:{
    width:50,
    height:50
  },
  PlayImageIconContainer:{
    padding:10
  },
  PlayImageIcon:{
    width:20,
    height:20
  },
  audioImage:{
    flexDirection:'row',
    alignItems:'center'
  },
  audioText:{
    marginLeft:10,
    fontFamily:'Inter-Regular',
  },
  audioDownText:{
    marginLeft:10,
    fontFamily:'Inter-Regular',
    color:'#51668A',
    fontSize:12
  },

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(0,0,0,0.4)'  
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    textBold:{
      fontFamily:'Inter-SemiBold',
    },
    textNormal:{
      fontFamily:"Inter-Regular",
    },
    buttonsContainer:{
      justifyContent:"center",
      alignItems:'center'
    },
    buttonsDesign:{
      borderWidth:1,
      paddingHorizontal:25,
      borderRadius:5,
      paddingVertical:7,
      marginTop:20
    },
    leftButtonsDesign:{
      borderColor:'#1A7078'
    },
    RightButtonsDesign:{
      borderColor:'#1A7078',
      backgroundColor:'#1A7078'
    },
    leftText:{
      color:'#1A7078'
    },
    RightText:{
      color:'#fff'
    },
    colseIcon:{
      position:'absolute',
      right:15,
      top:15
    },
    barTimeSec:{
      top:-15,
      flexDirection:'row',
      width:Dimensions.get('screen').width/1.6,
      justifyContent:'space-between'
    },
    SelectedTick:{
      backgroundColor:'#fff',
      borderRadius:50
    },
    SelectedTickContainer:{
      position:'absolute',
      right:0,
      bottom:0,
      
    },
    sendIcon:{
      position:'absolute',
      backgroundColor:'#fff',
      bottom:20,
      right:15,
      borderRadius:50
    }
})