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
  const [loader, setLoader] = useState(false);
    const {pucUrl, user_ID} = route?.params;
    
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title:'Preview Profile Picture'});
    },[])

    const uri = pucUrl.uri;
    let crop = async (quality) => ({uri: '', width: 0, height: 0});
    
    const handleSave = async () =>{
      setLoader(true);
      const cropped = await crop();
      let localUri = cropped.uri
      let formData = new FormData();
      const imageData = {
        uri : localUri,
        name: pucUrl.fileName,
        type: pucUrl.type,
      }
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
      setTimeout(()=>{
          navigation.navigate('EditProfileScreen', {justLoad : "justLoad"});
          setLoader(false);
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
      <Button title={loader ?  "Saving..." : "Save"} buttonStyle={{backgroundColor:'#2C8892',width:'100%', marginTop:50}} onPress={loader? "" :handleSave}/>
    </SafeAreaView>
  )
}

export default ProfilePictureCrop