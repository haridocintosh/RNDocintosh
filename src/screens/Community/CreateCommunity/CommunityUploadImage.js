import {View, Text, SafeAreaView,Image} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from './CreateCommunityStyles';
import {TouchableOpacity} from 'react-native';
import GetProfile from '../../EditProfile/Modals/GetProfile';
import { SingleImage } from '../../../navigation/ReuseLogics';
import Button from '../../../utils/Button';

const CommunityUploadImage = ({navigation,route}) => {
  const {allData} = route?.params;
  const [desable, setDesable] = useState(true);
  const [profilePic, setProfilePic] = useState(null);
  const [bgPic, setBgPic] = useState(null);
  const [picModal, setPicModal] = useState(false);
  const [position, setPosition] = useState(false);

  const handlePicImage = (select) => {
    setPicModal(!picModal);
    setPosition(select)
  }

  const changeProfile = (arg) => {
    SingleImage(arg).then(async(res) => {
      setPicModal(!picModal);
      let localUri = res?.assets[0]?.uri;
      let filename = localUri.split('/').pop();
      let uriParts = localUri.split('.');
      let fileType = uriParts[uriParts.length - 1];
      let formData = new FormData();
      const imageData = {uri : localUri,name: filename,type: `image/${fileType}`}
      if(position == 'cover'){
        setBgPic(localUri);
        formData.append('cover_image', imageData);
      }else{
        setProfilePic(localUri);
        formData.append('group_icon', imageData);
      } 
      const responce = await fetch(`https://docintosh.com/ApiController/communityImageUpload`, {
        method : 'POST',
        headers:{
            'Content-Type': 'multipart/form-data'
        },
        body :formData
      });
      const result=  await responce.json();
      console.log("result",result);
    })
  }

  const  handleSave = () =>{
    const data = {...allData,group_icon:profilePic, cover_image:bgPic}
    navigation.navigate('InvitePeersSkip',
    {title:'Add Members to this Community',data})
  } 

  useEffect(() =>{
    navigation.setOptions({ title:'Create Community'});
    if(bgPic && profilePic){
      setDesable(false);
    }
  },[profilePic,bgPic])

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ecf2f6', padding: 20}}>
      <Text style={styles.UploadTitle}>Add Images to this Community</Text>
      <Text style={styles.UploadSubTitle}>
          Use image that represent what this Page is about, like a logo. These will appear in serch results.
      </Text>
      
      <View>
        <TouchableOpacity style={styles.bgImgContainer} onPress={() => handlePicImage('cover')}>
          {bgPic && <Image source={{uri:bgPic}} style={styles.bgPic}/>}
          {!bgPic && <TouchableOpacity onPress={() => handlePicImage('cover')}>
            <Text style={styles.UploadImgTitle}>Upload Cover Photo</Text>
          </TouchableOpacity>}
        </TouchableOpacity>
          <View style={styles.profileImage}>
            <TouchableOpacity onPress={() => handlePicImage('profile')}>
              {profilePic && <Image source={{uri:profilePic}} style={styles.profilePic}/>}
              {!profilePic && <View style={styles.profileImageBr}>
                <Text style={styles.UploadProfileImg}>Upload Profile Photo</Text>
              </View>}
            </TouchableOpacity>
          </View>
      </View>

      <Button
        title={'Save & Continue'}
        color={'#fff'}
        bgColor={'#2C8892'}
        customStyle={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          alignSelf: 'center',
        }}
        onPress={() => handleSave()}
        disable={desable}
      />
      <GetProfile profile={picModal} setProfile={setPicModal} changeProfile={changeProfile}/>
    </SafeAreaView>
  )
}

export default CommunityUploadImage;






