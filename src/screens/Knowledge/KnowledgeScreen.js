import { View, Text,SafeAreaView,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react';
import Video from 'react-native-video';
import { Button } from 'react-native-elements';

const KnowledgeScreen = () => {
  const [playv1, setPlayv1] = useState(true);
  const videoPlayer = useRef(null);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setPlayv1(!playv1)}>
            {playv1?
              <Image source={{uri:'https://docintosh.com/medico_video/3.jpg'}} style={{width:'100%',height:300}}/>
            :
            <Video
              paused={playv1}
              ref={videoPlayer}
              resizeMode={"contain"}
              source={{uri:'https://docintosh.com/medico_video/zoom_0.mp4'}} 
              style={{width:"100%",marginHorizontal:10,zIndex:0, alignSelf:'center',height:300}}
              volume={10}
              useTextureView={false}
              playInBackground={false}
              disableFocus={true}
              playWhenInactive={false}
            />
          }
          </TouchableOpacity> 
            <Button
              onPress={() => setPlayv1(!playv1)}
                title={playv1 ? "Play": "pause"}
                type="outline"
                buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
                titleStyle={{ color:'#fff'}}
              />
          
        </View>

        <View style={styles.container}>
          <Image source={{uri:'https://docintosh.com/homeassets/images/Tele/Telemedicine-M1-1.png'}} style={{width:'100%',height:300}}/>
        </View>
        <View style={styles.container}>
          <Image source={{uri:'https://docintosh.com/homeassets/images/HAR/module-2/Hypertension-Academia-1.png'}} style={{width:'100%',height:300}}/>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default KnowledgeScreen;

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
    marginBottom:20
  },
})
