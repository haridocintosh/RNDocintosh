import { View, Text,Image,SafeAreaView,} from 'react-native'
import React from 'react';
import { Button } from 'react-native-elements';
import { position } from 'native-base/lib/typescript/theme/styled-system';

const ProfilePictureCrop = ({route}) => {
    const {pucUrl} = route.params;
    console.log("pucUrl",pucUrl);
  return (
    <SafeAreaView style={{padding:10,marginTop:10,flex:1,backgroundColor:'#ecf2f6'}}>
      <Image source={{uri:pucUrl.uri}} style={{ width: "100%", height: pucUrl.height}}/>
      <Button title="Save" buttonStyle={{ backgroundColor:'#2C8892',width:'100%',marginTop:50}}/>
    </SafeAreaView>
  )
}

export default ProfilePictureCrop