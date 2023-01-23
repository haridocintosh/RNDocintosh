import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';  // not react-image-picker


export default function Image_Picker() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if(!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ marginTop:12 }}>
      <TouchableOpacity onPress={pickImage}>
      <View style={{borderColor:"#D5DEED",borderRadius:4,borderStyle: 'dashed',borderWidth:1.4,width:"100%",height:102,justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/icons/upload-img.png')} style={{alignSelf:"center"}}  /> 
      <Text style={{textAlign:"center",fontSize:14,color:"#2376E5",fontWeight:"600",paddingVertical:6}}>Upload your file</Text>
      <Text style={{textAlign:"center",fontSize:12,color:"#51668A",fontWeight:"400"}}>Upload JPG max 2MB</Text>
      </View>
      </TouchableOpacity>
       <View style={{paddingBottom:14}}></View>
      {image && <Image source={{ uri: image }} style={{ width:320, height:320}} />}
   </View>
  );
}