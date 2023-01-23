import { View, Text , StyleSheet, TouchableOpacity, FlatList, Image, Platform, PermissionsAndroid} from 'react-native'
import React, {useEffect, useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

const MultipleImagesUpload = () => {
    const [images, setImages] = useState([]);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        //aspect: [4, 3],
        quality: 1,
        allowsMultipleSelection:true
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImages(result.uri);
      }
  }

  return (
    <View>
        <TouchableOpacity onPress={() => pickImage()} style={styles.flatlist}>
          <Text style={styles.selectPhoto}>Select Photos</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MultipleImagesUpload;

const styles = StyleSheet.create({
    flatlist:{
        backgroundColor:"blue",
        borderRadius:4,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    selectPhoto:{
        color: '#fff',
        fontSize:18,
     },
});