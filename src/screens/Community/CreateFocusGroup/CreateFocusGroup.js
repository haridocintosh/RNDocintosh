import { View, Text,SafeAreaView, TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import {styles} from './CreateFocusGroupStyles'
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../utils/Button';
import { SingleImage } from '../../../navigation/ReuseLogics';
import GetProfile from '../../EditProfile/Modals/GetProfile';

const CreateFocusGroup = ({navigation}) => {
    const [text, setText] = useState();
    const [desable, setDesable] = useState(true);
    const [picModal, setPicModal] = useState(null);
    const [profilePic, setProfilePic] = useState(null);
    const [spl, setSpl] = useState([
        {label: 'Private', value: '1'},
        {label: 'Public', value: '2'},
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const selectedspl=(e)=>{
      console.log("option",e);
    }
    const handlePicImage = () => {
      setPicModal(!picModal);
    }
    const changeProfile = (arg) => {
      SingleImage(arg).then((res) => {
        setPicModal(!picModal);
        const data = res?.assets[0];
        console.log("data",data.uri);
          setProfilePic(data.uri);
      })
    }

    useEffect(() =>{
        navigation.setOptions({ title: 'Create Focus Group'});
        if(profilePic){
          setDesable(false);
        }
    },[profilePic]);

   
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#ecf2f6",padding:20}}>
      <View style={styles.inputContainer}>
        <View style={styles.profileUploadBg}>
          <View style={styles.profileBorderLine}>
          <TouchableOpacity onPress={() => handlePicImage()}>
          {profilePic && <Image source={{uri:profilePic}} style={styles.profilePic}/>}
            {!profilePic && <View style={styles.profilePicturebg} >
              <Text style={styles.UploadProfileImg}>Upload Profile Photo</Text>
            </View>}
          </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.inputLabel}>Community Name*</Text>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="PediaSure India"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Focus group Name*"
        />
        <Text style={styles.bottomTitle}>Provide a community name and optional group icon</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputTextArea}
            onChangeText={setText}
            value={text}
            placeholder="Description"
            multiline={true}
            maxLength={2000}
        />
        <Text style={styles.wordsCount}>0/2000</Text>
      </View>

      <View style={styles.inputContainer}>
        <DropDownPicker style={styles.customInputVerify}
            open={open}
            value={value}
            items={spl}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setSpl}
            showTickIcon={false}
            searchable={true}
            placeholder="Choose privacy*"
            listMode="MODAL"
            textStyle={{
                fontSize: 16,
                color:"#687690",
                fontFamily: 'PlusJakartaSans-Regular',
            }}
            onChangeValue={(value) => {
                selectedspl(value)
            }}

            listItemLabelStyle={{
                color: "#687690",
                fontWeight:"800",
                borderBottomWidth:1,
                borderBottomColor:"#687690",
                textAlign:"center",
                paddingBottom:10,
            }}
            selectedItemLabelStyle={{
                fontWeight: "900",
                color:"#45B5C0",
                fontSize:18
            }}
            searchContainerStyle={{
                borderBottomColor: "#687690"
            }}
        />
      </View>
      <Button 
        title={"Save & Continue"} 
        color={"#fff"} 
        bgColor={"#2C8892"} 
        customStyle={{position:'absolute',bottom:10,width:'100%',alignSelf:'center'}}
        onPress={() => navigation.navigate('insideContactPermission')}
        disable={desable}
      />
       <GetProfile profile={picModal} setProfile={setPicModal} changeProfile={changeProfile}/>
    </SafeAreaView>
  )
}

export default CreateFocusGroup