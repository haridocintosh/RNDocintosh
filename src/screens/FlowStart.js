import * as React from 'react';
import { View, Text , StyleSheet, Image,SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native';


const ReportPost = () => {
    const navigation = useNavigation();
    const [text, setText] = React.useState("");
  return (
  <SafeAreaView
  style={{
    backgroundColor:'#9CDCD6',
    margin:10
  }}>
  <View>

 

<Image source={require('../assets/images/rocketpath.png')}
    style={{alignSelf:'center',}}
/>




  </View>
 


       
        </SafeAreaView>
     
  )
}
const styles = StyleSheet.create({
  
 

  

})
export default ReportPost