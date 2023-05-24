import {View, Text, SafeAreaView,Image} from 'react-native';
import React, {useState,useEffect} from 'react';
import {styles} from './BusinessPageStyles';
import Button from '../../utils/Button';
import {TouchableOpacity} from 'react-native';
import { SingleImage } from '../../navigation/ReuseLogics';
import GetProfile from '../EditProfile/Modals/GetProfile';


const UploadProfilePhoto = ({navigation}) => {
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
    SingleImage(arg).then((res) => {
      setPicModal(!picModal);
      const data = res?.assets[0];
      if(position == 'cover'){
        setBgPic(data.uri);
      }else{
        setProfilePic(data.uri);
      } 
    })
  }

  
  useEffect(() =>{
    if(bgPic && profilePic){
      setDesable(false);
    }
  },[profilePic,bgPic])
 

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ecf2f6', padding: 20}}>
      <Text style={styles.UploadTitle}>Add Images to this Page</Text>
      <Text style={styles.UploadSubTitle}>
        Use image that represent what this Page is about, like a logo. These
        will appear in serch results.
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
        onPress={() => navigation.navigate('')}
        disable={desable}
      />

      <GetProfile profile={picModal} setProfile={setPicModal} changeProfile={changeProfile}/>

      
    </SafeAreaView>
  );
};

export default UploadProfilePhoto;
