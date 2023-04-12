import {Dimensions,SafeAreaView,StyleSheet} from 'react-native'
import React,{ useEffect} from 'react';
import Pdf from 'react-native-pdf';

const PdfViewer = ({navigation,route}) => {
  const {source} = route.params;

  useEffect(()=>{
      navigation.setOptions({ title:'Read PDF'});
  },[])
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:10}}>
      <Pdf
            trustAllCerts={false}
            source={source}
            onLoadComplete={(numberOfPages,filePath) => {
                console.log(`Number of pages: ${numberOfPages}`);
            }}
            onPageChanged={(page,numberOfPages) => {
                console.log(`Current page: ${page}`);
            }}
            onError={(error) => {
                console.log(error);
            }}
            onPressLink={(uri) => {
                console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf}/>
    </SafeAreaView>
  )
}

export default PdfViewer;

export const styles = StyleSheet.create({

  pdf: {
    flex:1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
})