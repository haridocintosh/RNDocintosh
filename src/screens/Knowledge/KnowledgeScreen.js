import { View,Dimensions, Text,SafeAreaView,StyleSheet,Image,ScrollView,TouchableOpacity } from 'react-native'
import React,{useRef, useState} from 'react';
import Video from 'react-native-video';
import { Button } from 'react-native-elements';

const KnowledgeScreen = ({navigation}) => {
  const [playv1, setPlayv1] = useState(true);
  const videoPlayer = useRef(null);

  const source1 = {uri:'https://docintosh.com/Webinar_pdf/ERAS%20deck%20for%20Surgeons%201607.pdf',cache: true}
  const source2 = {uri:'https://docintosh.com/Webinar_pdf/NST%20deck.pdf',cache: true}
  const source3 = {uri:'https://docintosh.com/Webinar_pdf/ENSURE%20PEPTIDE%20DECK-%20Gastros.pdf',cache: true}

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setPlayv1(!playv1)}>
            {playv1?
              <Image source={{uri:'https://docintosh.com/medico_video/3.jpg'}} style={{height:250}}/>
            :
              <Video
                paused={playv1}
                ref={videoPlayer}
                resizeMode={"contain"}
                source={{uri:'https://docintosh.com/medico_video/zoom_0.mp4'}} 
                style={{width:"100%",marginHorizontal:10,alignSelf:'center',height:250}}
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
          <Image source={{uri:'https://docintosh.com/homeassets/images/Tele/Telemedicine-M1-1.png'}} style={{aspectRatio:2}}/>
        </View>
        <View style={styles.container}>
          <Image source={{uri:'https://docintosh.com/homeassets/images/HAR/module-2/Hypertension-Academia-1.png'}} style={{aspectRatio:2}}/>
        </View>
        <View style={styles.container}>
          <Image source={require('../../assets/images/pdfImage2.png')} style={{width:'100%',height:250,borderRadius:5}}/>
          <Button
              onPress={() => navigation.navigate('PdfViewer',{source: source1})}
              title={'View PDF'}
              type="outline"
              buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2,marginTop:10 }}
              titleStyle={{ color:'#fff'}}
            />
        </View>
        <View style={styles.container}>
          <Image source={require('../../assets/images/pdfImage3.png')} style={{width:'100%',height:250,borderRadius:5}}/>
          <Button
              onPress={() => navigation.navigate('PdfViewer',{source: source2})}
              title={'View PDF'}
              type="outline"
              buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10}}
              titleStyle={{ color:'#fff'}}
            />
        </View>
        <View style={styles.container}>
          <Image source={require('../../assets/images/pdfImage.png')} style={{width:'100%',height:250,borderRadius:5}}/>
          <Button
              onPress={() => navigation.navigate('PdfViewer',{source: source3})}
              title={'View PDF'}
              type="outline"
              buttonStyle={{backgroundColor:'#2C8892', borderRadius:15/2, marginTop:10 }}
              titleStyle={{ color:'#fff'}}
            />
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
    marginBottom:20,
  },
  pdf: {
    flex:1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height/2.5,
	},
})
