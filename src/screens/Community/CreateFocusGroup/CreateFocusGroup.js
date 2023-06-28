import { View, Text,SafeAreaView, TextInput,TouchableOpacity,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import {styles} from './CreateFocusGroupStyles'
import DropDownPicker from 'react-native-dropdown-picker';
import Button from '../../../utils/Button';
import { SingleImage } from '../../../navigation/ReuseLogics';
import GetProfile from '../../EditProfile/Modals/GetProfile';
import {useForm, Controller} from 'react-hook-form';

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
    const [value, setValue] = useState();

    const { control, handleSubmit, reset,watch, formState: { errors }} = useForm({mode: 'onBlur'});

    // const selectedspl=(e)=>{
    //   console.log("option",e);
    // }
    
    const handlePicImage = () => {
      setPicModal(!picModal);
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
        setProfilePic(localUri);
        formData.append('group_icon', imageData);
        // const responce = await fetch(`https://docintosh.com/ApiController/communityImageUpload`, {
        //   method : 'POST',
        //   headers:{
        //       'Content-Type': 'multipart/form-data'
        //   },
        //   body :formData
        // });
        // const result=  await responce.json();
        // console.log("result",result);
      })
    }
    const com_name = watch("community_name")
    const grp_name = watch("group_name")
    const desc = watch("description")
    useEffect(() =>{
        navigation.setOptions({ title: 'Create Focus Group'});
        if(profilePic && value && com_name && grp_name && desc){
          setDesable(false);
        }
    },[profilePic,value,com_name,grp_name,desc]);


    const onSubmit = (data) => {
      console.log(data);
      // navigation.navigate('InvitePeers',{title:'Add Members to this Focus Group'})
    }
   
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

        <Controller
              control={control}        
              name="community_name"    
              rules={{
              required: true,
              }}  
              render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                  style={styles.input}
                  value={value}            
                  onBlur={onBlur}            
                  onChangeText={onChange} 
                  placeholder="PediaSure India"
              />
              )}  
          />
          {errors.community_name && <Text style={styles.errorMsg}>Community field is required!</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Controller
              control={control}        
              name="group_name"    
              rules={{
              required: true,
              }}  
              render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                  style={styles.input}
                  value={value}            
                  onBlur={onBlur}            
                  onChangeText={onChange} 
                  placeholder="Focus Group Name*"
              />
              )}  
          />
        <Text style={styles.bottomTitle}>Provide a community name and optional group icon</Text>
        {errors.group_name && <Text style={styles.errorMsg}>Group Name is required!</Text>}
      </View>
      <View style={styles.inputContainer}>
        <Controller
            control={control}        
            name="description"    
            rules={{
            required: true,
            }}  
            render={({field: {onChange, value, onBlur}}) => (
            <TextInput
                style={styles.inputTextArea}
                value={value}            
                onBlur={onBlur}            
                onChangeText={onChange} 
                placeholder="Description"
                multiline={true}
                maxLength={2000}
            />
            )}  
        />
        <Text style={styles.wordsCount}>0/2000</Text>
        {errors.description && <Text style={styles.errorMsg}>Description field is required!</Text>}
      </View>

      <View style={styles.inputContainer}>

      {/* <Controller
            control={control}        
            name="description"    
            rules={{required: true}}  
            render={({field: {onChange, value, onBlur}}) => ()}  
        /> */}


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
            // onChangeValue={(value) => {
            //     selectedspl(value)
            // }}
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
        onPress={handleSubmit(onSubmit)}
        disable={desable}
      />
       <GetProfile profile={picModal} setProfile={setPicModal} changeProfile={changeProfile}/>
    </SafeAreaView>
  )
}

export default CreateFocusGroup