import { SafeAreaView,Dimensions,Image} from 'react-native'
import React,{useEffect,useState} from 'react';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Crop from 'react-native-avatar-crop';
import { mainApi } from '../../apis/constant';
import { singlestoreData } from '../../apis/Apicall';
import Toast from 'react-native-simple-toast';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const ProfilePictureCrop = ({route}) => {
    // console.log('cropScreen',route);
    const {pucUrl, user_ID} = route?.params;
    
    const [src, setSrc]= useState(null);
    const [preview, setPreview]= useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title:'Preview Profile Picture'});
    },[])

    const uri = pucUrl.uri;
    // console.log('uriiii', uri);

    let crop = async (quality) => ({uri: '', width: 0, height: 0});
    
    const handleSave = async () =>{
      const cropped = await crop();
      // console.log("merge",cropped);
      let localUri = cropped.uri
      let formData = new FormData();
      const imageData = {
        uri : localUri,
        name: pucUrl.fileName,
        type: pucUrl.type,
      }
      // console.log('typeess',imageData);
      formData.append('profile_pic', imageData);
      formData.append('user_id', user_ID);

      const responce = await fetch(`${mainApi.baseUrl}/ApiController/profileUpdate`, {
          method : 'POST',
          headers:{
              'Content-Type': 'multipart/form-data'
          },
          body :formData
      });

      var result1=  await responce.json();
      singlestoreData('profileImage',result1.result); 
      // console.log(result1);
      setTimeout(()=>{
          navigation.navigate('EditProfileScreen');
      },3000)

      
      
    }

  return (
    <SafeAreaView style={{padding:10,marginTop:10,flex:1,backgroundColor:'#ecf2f6'}}>
      <Crop
        source={{uri}}
        width={SCREEN_WIDTH}
        height={SCREEN_WIDTH}
        cropArea={{width: SCREEN_WIDTH / 1.3, height: SCREEN_WIDTH / 1.3}}
        onCrop={cropCallback => (crop = cropCallback)}
      />
      {/* {src && <Image source={{uri:src.uri}} style={{ width:src.height, height:src.width }}/>} */}
      <Button title="Save" buttonStyle={{backgroundColor:'#2C8892',width:'100%', marginTop:50}} onPress={handleSave}/>
    </SafeAreaView>
  )
}

export default ProfilePictureCrop