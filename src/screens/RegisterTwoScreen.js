import {  
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
  Pressable
} from 'react-native'
import React, {useEffect, useState, useRef, useCallback} from 'react'
import { useDispatch } from 'react-redux';
import {Ionicons} from 'react-native-vector-icons';
import Modal from "react-native-modal";
import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { getAllState } from '../../redux/reducers/getSpeciality';
import { userRegisterSecond } from '../../redux/reducers/loginAuth';
import { coinTransfer } from '../../redux/reducers/coinSlice';
import Toast from 'react-native-simple-toast';
import Lottie from 'lottie-react-native';
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PickImage } from '../navigation/ReuseLogics';


const RegisterTwoScreen = ({route}) => {
const navigation  = useNavigation();
const ref = useRef(null);

const dispatch    = useDispatch();
  // const fullname = 'asj'
  const {user_id,fullname,role,specialityId} = route.params;
  const [isOpen, setIsOpen]     = useState(false);
  const bottomSheetModalRef       = useRef(null);
  const bottomSheetModalRefSecond = useRef(null);
  const [loader, setloader] = useState(false)
  const snapPoints = ["10%", "20%", "30%"];

  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }

  function handlePresentModalSecond() {
    bottomSheetModalRefSecond.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [fromWhere, setFromWhere] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [openState, setOpenState] = useState(false);
  const [valueState, setValueState] = useState(null);
  const [err,seterr] = useState();
  const [showeye, setshoweye] = useState(true);
  const [pincodeerr,setPincode] = useState();
  const [mrnId,setmrnId] = useState();
  const [mrnYearerr,setmrnYear] = useState();
  const [stateerr,setStateErr] = useState();
  const [profilErr,setprofilErr] = useState();
  const [mrnproofErr,setmrnproofErr] = useState();
  const [passworderr,setPasswordErr] = useState();

  const [items, setItems] = useState([
    {label: '1970', value: '1970'}
  ]);

  const [state, setState] = useState([
    {label: 'Maharashtra', value: 'Maharashtra'},
  ]);

  const [imgurl,setimgurl]=useState()
  const [profileurl,setprofileurl]=useState()
  const [submitbtn,setsubmitbtn]=useState(false)

  const onMrnOpen = useCallback(() => {
    setOpenState(false);
  }, []);

  const onStateOpen = useCallback(() => {
    setOpen(false);
  }, []);

  const [register, setregister] = useState({
    pincode : "",
    mrn:"",
    mry:"",
    medicalcouncil_id:"",
    speciality:"",
    password:"",
    profile_pic:"",
    mrnproof:"",
    // role:4,
    // user_id:23334
    role:role,
    user_id:user_id
  });
 
  const Pincode= (e) =>{
    const isValidnameRegex = /^(\[0-9]?)?\d{6}$/;;
    const pincode = e;
    if(!isValidnameRegex.test(pincode)){
      setPincode("Please enter valid Pincode")
    }else{
      setPincode('');
  }
  setregister({ ...register,
    pincode: pincode,
  });
}

const mrnID= (e) =>{
  setregister({ ...register,
    mrn: e,
  });
  setmrnId('');
}

const mrnYear= (e) =>{
  setregister({ ...register,
    mry: e,
  });
  setmrnYear('');
}

const stateCouncil= (e) =>{
  setregister({ ...register,
    medicalcouncil_id: e,
  });
  setStateErr('');
}

const setPassword= (e) =>{
  setregister({ ...register,
    password: e,
  });
  setPasswordErr('');
}

const showcong = ()=>{
  setIsModalVisible(!isModalVisible);
}


const pickupImage = (arg) => {
  console.log("fromWhere",fromWhere);
  bottomSheetModalRefSecond.current?.close();
  bottomSheetModalRef.current?.close();
    PickImage(arg).then(async (res) => {
      let localUri = res?.uri;

          let filename = localUri.split('/').pop();
          // Infer the type of the image
          // let match = /\.(\w+)$/.exec(filename);
          // let type = match ? `image/${match[1]}` : `image`;
          let uriParts = localUri.split('.');
          let fileType = uriParts[uriParts.length - 1];
          let formData = new FormData();
          const imageData = {
            uri : localUri,
            name: filename,
            type: `image/${fileType}`,
          }
          if(fromWhere == 'document'){
            setimgurl(localUri);
            formData.append('mrnproof', imageData);
          }else{
            setprofileurl(localUri);
            formData.append('profile_pic', imageData);
          }
          const responce = await fetch(`https://docintosh.com/ApiController/image_upload`, {
            method : 'POST',
            headers:{
                'Content-Type': 'multipart/form-data'
            },
            body :formData
         });
        const result=  await responce.json();

        if(fromWhere == 'document'){
          setregister({ ...register,
            mrnproof: result,
          });
        }else{
          setregister({ ...register,
            profile_pic: result,
          });
        }
        setprofilErr('');
        setmrnproofErr('');
    });
};
 
 
useEffect(()=>{
  const year = 1972;
  const currentYear =(new Date()).getFullYear();
  const years = Array.from(new Array(51),(val, index) => index + year);
  const years_list = years.filter((e)=>{
    return e <= currentYear;
    }).map((ele, index)=>{
    return {label: ele, value: ele};
  });
    setItems(years_list);
    async function fetchState(){
      const allState = await dispatch(getAllState());
      setState(allState.payload.map((ele,index)=>{
        return {label: ele.state, value: ele.state_id};
     }))
    }
    fetchState();
  },[]);

  const form_submit = async() =>{
    if(!register.pincode){
      setPincode("Please enter a valid pincode");
      if(ref.current){
        ref.current.scrollTo({ y: 0, animated: true })
      }
    }else if(!register.mrn){
      setmrnId("Please enter MRN");
      if(ref.current){
        ref.current.scrollTo({ y: 0, animated: true })
      }
    }else if(!register.mry){
      setmrnYear("Please enter MRN Year");
      if(ref.current){
        ref.current.scrollTo({ y: 0, animated: true })
      }
    }else if(!register.medicalcouncil_id){
      setStateErr("Please enter State Council");
      if(ref.current){
        ref.current.scrollTo({ y: 0, animated: true })
      }
    }else if(!register.password){
      setPasswordErr("Please enter your password");
    }else if(!register.profile_pic){
      setprofilErr("Please upload your profile photo");
      if (ref.current) {
        ref.current.scrollTo({ y: 0, animated: true })
      }
    }else if(!register.mrnproof){
      setmrnproofErr("Please upload MRN document");
    }else{
      setsubmitbtn(true);
      setloader(true);
      const result = await dispatch(userRegisterSecond(register));
      Toast.show(result.payload.message);
      console.log('imageUploadData', result.payload);
        if(result.payload.status == 'Success'){
          setloader(false);
          const coinDetails = {task : 1, receiverId:result.payload.user_id } 
          const coinResult  = await dispatch(coinTransfer(coinDetails));
          console.log('coinsStatus', coinResult.payload);
          if(coinResult.payload.status == 'Success'){
            setIsModalVisible(true);
            setTimeout(() => {
            setIsModalVisible(false);
            navigation.navigate('SelectInterest',{
              user_id : user_id,
              specialityId:specialityId
            })
            },3000);
          }
        }
      }
    }
if(loader){
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
      <ActivityIndicator size={'large'} color={"#2C8892"}/>
  </View>)
}

const handlePickupModal = (val) => {
  // console.log("val",val);
  setFromWhere(val)
  setModalVisible(true);
}


return (
  <GestureHandlerRootView>
   <BottomSheetModalProvider>
    
 <SafeAreaView style={{flex: 0, justifyContent: 'center',paddingTop:0}}>
  <ScrollView ref={ref}
    keyboardShouldPersistTaps='handled'
    showsVerticalScrollIndicator={true}
    nestedScrollEnable={true}>
    <View style={styles.suceesheadBox}>
    <Pressable onPress={() => handlePickupModal('Profile')}>
     <View style={styles.registermainText}>
          <Image style={{width:56,height:56,borderRadius:50}} source={profileurl?{ uri: profileurl }:require('../assets/images/p2.png')}/>
          <View style={styles.headtopInner}>
            <Text style={[styles.headText,{fontFamily:"Inter-SemiBold"}]}>Dr. {fullname}</Text>
            <View>
                <Text>Edit Profile Photo</Text>
                <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{profilErr}</Text>
            </View>
          </View>
      </View>
      </Pressable>
      </View>
      <View style={styles.verificationForm}>
      <TextInput style={[styles.customInputVerifyFull,{fontFamily:"PlusJakartaSans-Regular"}] }
       autoCapitalize="none"
       keyboardType="number-pad"
       placeholder='PIN Code*'
       onChangeText={(e)=>{Pincode(e);}}
       placeholderTextColor='#51668A'
     />
     <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{pincodeerr}</Text>
     {/* <Text style={{fontSize:12,marginBottom:10,marginTop:-4,color:"#51668A"}}>{Bangalore,Karnataka}</Text> */}
      <View style={styles.multiInput}>
      <TextInput style={[styles.customInputVerify,{fontFamily:"PlusJakartaSans-Regular"}]}
       autoCapitalize="none"
       keyboardType="default"
       placeholder='MRN ID*'
       onChangeText={(e)=>{mrnID(e)}}
       placeholderTextColor='#51668A'
     />
   
      <DropDownPicker style={styles.customInputVerifyselect}
        open={open}
        onOpen={onMrnOpen}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        showTickIcon={false}
        setItems={setItems}
        placeholder="MRN Year*"
        autoScroll={true}
        searchable={false}
        listMode="MODAL"
        containerStyle={{width:"50%",
        zIndex: 9999
      }}
        onChangeValue={(value) => {
          mrnYear(value)
        }}
       
        textStyle={{
          fontSize: 16,
          color:"#687690",
          fontFamily: 'PlusJakartaSans-Regular',
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
      <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{mrnId}</Text>
      <View style={{paddingTop:12}}>
      <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{mrnYearerr}</Text>
      {/* <TextInput style={styles.customInputVerifyFull}
       autoCapitalize="none"
       placeholder='State Council*'
     /> */}

      <DropDownPicker style={styles.customInputVerifyselectFull}
          open={openState}
          onOpen={onStateOpen}
          value={valueState}
          items={state}
          setOpen={setOpenState}
          setValue={setValueState}
          setItems={setState}
          placeholder="State Council*"
          searchable={true}
          showTickIcon={false}
          listMode="MODAL"
          containerStyle={{
          zIndex: 1
        }}
          onChangeValue={(value) => {
            stateCouncil(value)
          }}
         
        textStyle={{
          fontSize: 16,
          color:"#687690",
          fontFamily: 'PlusJakartaSans-Regular',
        }}

        searchContainerStyle={{
          borderBottomColor: "#687690"
        }}
        searchPlaceholderTextColor="#687690"
          searchTextInputStyle={{
            color: "#687690",
            borderColor:"#687690"
          }}

        listItemLabelStyle={{
          color: "#687690",
          fontWeight:"800",
          borderBottomWidth:1,
          borderBottomColor:"#687690",
         // textAlign:"center",
          paddingBottom:10,
        }}

        selectedItemLabelStyle={{
          fontWeight: "900",
          color:"#45B5C0",
          fontSize:18
        }}

      
        />
        <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{stateerr}</Text>

      <TextInput style={[styles.customInputVerifyFull,{fontFamily:"PlusJakartaSans-Regular"}] }
        autoCapitalize="none"
        placeholder='Set Password*'
        hideShow={showeye}
        secureTextEntry={showeye}
      onChangeText={(text)=>{setPassword(text)}}
      placeholderTextColor='#51668A'
     />
    <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{passworderr}</Text>
   
    <Text style={[styles.headTexts,{fontFamily:"Inter-SemiBold"}]}>Upload a JPG for MRN Document</Text>
  <View>
    <TouchableOpacity  onPress={() => handlePickupModal("document")}>
      <View style={{borderColor:"#D5DEED",borderRadius:4,borderStyle: 'dashed',borderWidth:1.4,width:"100%",height:102,justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/icons/upload-img.png')} style={{alignSelf:"center"}}  />
     
      <Text style={{textAlign:"center",fontSize:14,color:"#2376E5",fontWeight:"600",paddingVertical:6,fontFamily:"Inter-SemiBold"}}>Upload your file</Text>
      <Text style={{textAlign:"center",fontSize:12,color:"#51668A",fontWeight:"400",fontFamily:"Inter-Regular"}}>Upload JPG max 2MB</Text>
      </View>
      </TouchableOpacity>
     
       <View style={{paddingBottom:14,}}></View>
       <View style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
       <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{mrnproofErr}</Text>
        {imgurl && <Image source={{ uri: imgurl }} style={{ width: "100%", height: 150,}} />}
        </View>
        </View>


   <View style={styles.verifyNextFooterpara}>
      {/* <Text style={styles.headTextpara}> </Text> */}
 
      <View style={{ flexDirection:"row" }}>
            <Text onPress={() => navigation.navigate('Verification')} style={{fontFamily:"Inter-Regular"}}>By continuing, you agree to the </Text>
            <TouchableOpacity  onPress={() => navigation.navigate('TermsAndCondition')} >
              <Text style={{color: '#2376E5', fontWeight: '700',fontSize:14}}>Terms & Conditions </Text>
            </TouchableOpacity>
          </View>
    </View>
    </View>  
    <Text style={{color:'red'}}>{err}</Text>
    <View style={{display:"flex",alignItems:"center"}}>
   {submitbtn?<CustomButton label={'Submitting...'} />:<CustomButton label={'Continue'} onPress={() => form_submit()} />}
   </View>

{/* 
   <Modal isVisible={isModalVisible} width={320} height={200} style={{alignSelf:'center', borderWidth:0,  borderRadius:30/2, width:320,maxHeight:320, backgroundColor:'#ffff', bottom:'-50%',}}>

   <Modal isVisible={isModalVisible} width={340} height={200} style={{alignSelf:'center', borderWidth:0,  borderRadius:30/2, width:320,maxHeight:320, backgroundColor:'#ffff', bottom:'-50%',}}>
        <View>
        <Lottie style={{position:"absolute",top:-65,height:180,width:180,alignSelf:'center',}}
        source={require('../assets/dr-icon/congratulation.json')} autoPlay={true} loop={true}/>
     
          <Text style={{fontSize:18, fontWeight:'600',alignSelf:'center'}}>Congratulations!</Text>
          <Text style={{fontSize:14, padding:10, fontWeight:'400',alignContent:'center',textAlign:'center',marginTop:16, color:'#51668A'}}>You are now part of the Docintosh family. While profile verification can take up to 48 hours, you can be part of the community just by logging in. </Text>
        </View>
  </Modal> */}

  
      <Modal isVisible={isModalVisible}  height={"100%"} style={{alignItems:'center', justifyContent:"center", borderWidth:0, borderRadius:30/2, width:320,maxHeight:230, backgroundColor:'#fff', bottom:'-65%',}}>
      <View style={{display:"flex",alignItems:'center', justifyContent:"center",}}>
        <Lottie style={{position:"absolute",top:-26,height:"100%",width:80,alignSelf:'center',}}
        source={require('../assets/dr-icon/congratulation.json')} autoPlay={true} loop={false}/>
        <Text style={{fontSize:18, fontWeight:'600',alignSelf:'center',marginTop:65,marginBottom:-5}}>Congratulations!!!</Text>
        <Text style={{fontSize:14, padding:10, fontWeight:'400',alignContent:'center',textAlign:'center', color:'#51668A',}}>You are now part of the Docintosh family. While profile verification can take up to 48 hours, you can be part of the community just by logging in.</Text>
      </View>
    </Modal>

  
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.chooseBtn}
          onPress={() => {
            pickupImage(1);
            setModalVisible(false);
          }}>
        <Text style={styles.chooseTxt}>Take Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.chooseBtn}
          onPress={() => {
            pickupImage(2);
            setModalVisible(false);
          }}>
        <Text style={styles.chooseTxt}>Choose from Gallery</Text>
         
        </TouchableOpacity>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyleb}>close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>


        </View>
      </ScrollView>
    </SafeAreaView>
  </BottomSheetModalProvider>
</GestureHandlerRootView>
)}


const styles = StyleSheet.create({

  eyeIcon:{
    zIndex:0,
    alignSelf:'flex-end',
    marginTop:-50,
    marginRight:30,
    marginBottom:30
   
},
customInputVerify:
    {fontSize:16,
    color:"#071B36",
    width:"48%",
    height:48,
    marginTop:10,
    borderBottomWidth:1,
    marginRight:"4%",
    borderColor:"#6C81A6",
    paddingLeft:8,
  },
customInputVerifyselect:{
  fontSize:16,
  color:"#071B36",
  marginTop:10,
  width:"100%",
  height:48,
  borderBottomWidth:1,
  borderRightWidth:0,
  borderTopWidth:0,
  borderLeftWidth:0,
  borderColor:"#6C81A6",
  borderRadius:0,
  paddingLeft:8,
  backgroundColor:"transparent"
},
 
 
  registermainText:{
  display:"flex",
  alignItems:"center",
  flexDirection:"row",
  },
  suceesheadBox:{
    backgroundColor:"#F2FAFA",
    width:"100%",
   paddingHorizontal: 20,
   paddingVertical:12,
   marginBottom:10
  },
  headtopInner:{
      paddingLeft:18,
   
  },
  verificationForm:{
   paddingHorizontal:20,

  },
  headText:{
      color:"#071B36",
      fontSize:16,
      fontWeight:"600",
      fontFamily:"Inter-Regular"
  },
  headTexts:{
    color:"#071B36",
    fontSize:16,
    fontWeight:"600",
    marginTop:16,
    marginBottom:16
},
  headPara:{
      color:"#2376E5",
      fontSize:14,
      fontWeight:"400",
      fontWeight: "600",
  },
  multiInput:{
      display:"flex",
      flexDirection:"row",
    alignItems:"center",
    width:"100%"
  },

  customInputVerify:
  {fontSize:16,
    color:"#071B36",
  width:"48%",
  height:48,
  marginTop:10,
  borderBottomWidth:1,
  marginRight:"4%",
  borderColor:"#6C81A6",
  paddingLeft:8,
},
  customInputVerifyselect:{
      fontSize:16,
      color:"#071B36",
      marginTop:10,
      width:"100%",
      // height:48,
      borderBottomWidth:1,
      borderRightWidth:0,
      borderTopWidth:0,
      borderLeftWidth:0,
      borderColor:"#6C81A6",
      borderRadius:0,
      paddingLeft:8,
      backgroundColor:"transparent"
  },


  customInputVerifyselectFull:{
    fontSize:16,
    color:"#071B36",
    marginTop:10,
    width:"100%",
    //height:48,
    borderBottomWidth:1,
    borderRightWidth:0,
    borderTopWidth:0,
    borderLeftWidth:0,
    borderColor:"#6C81A6",
    borderRadius:0,
    paddingLeft:8,
    backgroundColor:"transparent"
},

  customInputVerifyFull:{
      fontSize:16,
      color:"#071B36",
      height:48,
      width:"100%",
      borderBottomWidth:1,
      paddingRight:19,
      borderColor:"#6C81A6",
      // borderRadius:8,
      marginVertical:12,
      paddingLeft:8,
     

  },
  headTextpara:
  {
      fontSize:14,
      fontWeight:"400",
      color:"#071B36"
  },
  verifyNextFooterpara:{
    marginVertical:12
  },


  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  // ..............modal css.................
  centeredView: {
    flex: 1,
    marginTop:60
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    paddingHorizontal:20,
    paddingVertical:10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2C8892",
    marginTop:35,
    width:"100%"
  },
  textStyleb: {
    color: "white",
    textAlign: "center",
   fontSize:16,
   fontFamily:"PlusJakartaSans-Bold",
   textTransform:"capitalize",
   
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  chooseTxt:{
    fontSize:16,
    color:"#51668A",
    fontFamily:"PlusJakartaSans-Regular",
    lineHeight:35
  }

})

export default RegisterTwoScreen