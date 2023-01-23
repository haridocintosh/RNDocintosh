import {  
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput, Pressable,
  ActivityIndicator,
} from 'react-native'
import React, {useState, useEffect,useRef} from 'react'
import CustomButton from '../components/CustomButton';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from "react-native-modal";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getAllUniversity } from '../../redux/reducers/getSpeciality';
import { getcollegelist } from '../../redux/reducers/getSpeciality';
import { userRegisterSecond } from '../../redux/reducers/loginAuth';
import Toast from 'react-native-simple-toast';
import Lottie from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { coinTransfer } from '../../redux/reducers/coinSlice';
import { PickImage } from '../navigation/ReuseLogics';



const RegisterStudentScreen = ({route}) => {
const navigation = useNavigation();
const dispatch = useDispatch();
const [modalVisible, setModalVisible]     = useState(false);
const [fromWhere, setFromWhere] = useState(null);
const [isModalVisible, setIsModalVisible] = useState(false);  
const [isModalShow, setisModalShow]       = useState(false);
const [loader, setloader] = useState(false)
const [pincodeerr,setPincode] = useState();
const [universityerr,setuniversityerr] = useState();
const [clgerr,setclgerr] = useState();
const [profilErr,setprofilErr] = useState();
const [mrnproofErr,setmrnproofErr] = useState();
const [passworderr,setPasswordErr] = useState();  
const [showeye, setshoweye] = useState(true);
// const fullname="gagan";
const {user_id, fullname, role} = route.params;
const [register , setregister] = useState({
  pincode : "",
  university:"",
  college:"",
  password:"",
  profile_pic:"",
  mrnproof:"",
  // role:4,
  // user_id:1234,
  role:role,
  user_id:user_id,
});
const ref = useRef(null);
const [open, setOpen] = useState(false);
const [value, setValue] = useState(null);
const [open1, setOpen1] = useState(false);
const [value1, setValue1] = useState(null);
const [err,seterr] = useState();
const [imgurl,setimgurl]=useState()
const [profileurl,setprofileurl]=useState()
const [submitbtn,setsubmitbtn]=useState(false)
const [university, setUniversity] = useState([
  {label: 'Male', value: '1'},
]);
const SelectList=[
  {label: 'Please Select University', value: '1'},
]
const [college, setcollege] = useState();

const Pincode= (e) =>{
  const isValidnameRegex = /^(\[0-9]?)?\d{6}$/;
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

const setPassword= (e) =>{
  setregister({ ...register,
    password: e,
  });
  setPasswordErr('');
}

useEffect(()=>{
  async function fetchUniversity(){
    const allUniversity = await dispatch(getAllUniversity());
    setUniversity(allUniversity.payload.university.map((ele,index)=>{
      return {label: ele.university_name, value: ele.university_id};
   }))
  }
  fetchUniversity()
},[]);

const setuniversity= (e) =>{
  setregister({ ...register,
    university: e,
  });
  setuniversityerr('')
  if(e!=null){
    fetchCollege(e)
  }
  async function fetchCollege(e){
    const university1={
      "university_id":e
    }
    const allCollege = await dispatch(getcollegelist(university1));

      setcollege(allCollege.payload.college.map((ele,index)=>{
        return {label: ele.collegename, value: ele.college_id};
     })) 
  }
}

const setCollege= (e) =>{
  setregister({ ...register,
    college: e,
  });
  setclgerr('')
}


const pickupImage = (arg) => {
    PickImage(arg).then(async (res) => {
      let localUri = res?.uri;
          let filename = localUri.split('/').pop();
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
              headers:{'Content-Type': 'multipart/form-data'},
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

const form_submit = async() =>{ 
  console.log("register",register);
  if(!register.pincode){
    setPincode("Please enter a valid pincode");
    if (ref.current) {
      ref.current.scrollTo({ y: 0, animated: true })
    }
  }else if(!register.university){
    setuniversityerr("Please Select University ");
    if (ref.current) {
      ref.current.scrollTo({ y: 0, animated: true })
    }
  }else if(!register.college){
    setclgerr("Please Select College");
    if (ref.current) {
      ref.current.scrollTo({ y: 0, animated: true })
    }
  }else if(!register.password){
    setPasswordErr("Please enter your password");
  }else if(!register.profile_pic){
    if (ref.current) {
      ref.current.scrollTo({ y: 0, animated: true })
    }
    setprofilErr("Please Upload your Profile Photo");
  }else if(!register.mrnproof){
    setmrnproofErr("Please Upload CollegeId/Library Card");
  }else{
    setsubmitbtn(true);
    setloader(true);
    const result = await dispatch(userRegisterSecond(register));
    setloader(false);
    Toast.show(result.payload.message);
      if(result.payload.status == 'Success'){
        const coinDetails = {task : 1, receiverId:result.payload.user_id } 
        const coinResult  = await dispatch(coinTransfer(coinDetails));
          if(coinResult.payload.status == 'Success'){
            setIsModalVisible(true);
            setTimeout(() => {
            setIsModalVisible(false);
            navigation.navigate('ContactPermission')
          },3000);
        }
      }
      setloader(false);
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
  <SafeAreaView style={{flex: 0, justifyContent: 'center',paddingTop:0}}>
  <ScrollView
    ref={ref}
    keyboardShouldPersistTaps='handled'
    showsVerticalScrollIndicator={false}
    nestedScrollEnable={true}>
{/* onPress={() => setModalVisible(true)} */}
    <Pressable onPress={() => handlePickupModal("profile")}>
      <View style={styles.suceesheadBox}>
        <View style={styles.registermainText}>
          <Image style={{width:56,height:56,borderRadius:50}} source={profileurl?{ uri: profileurl }:require('../assets/images/p2.png')}/>
            <View style={styles.headtopInner}>
                <Text style={[styles.headText,{fontFamily:"Inter-SemiBold"}]}>{fullname}</Text>
            <View>
            <Text style={{fontSize:14,color:"#2376E5",fontFamily:"Inter-SemiBold"}}>Edit Profile Photo</Text>
          </View>
      </View>
    </View>
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{profilErr}</Text>
  </View>
</Pressable>
    <View style={styles.verificationForm}>
      <TextInput style={[styles.customInputVerifyFull,{fontFamily:"PlusJakartaSans-Regular"}] } 
       autoCapitalize="none"
       keyboardType="number-pad"
       placeholder='PIN Code*'
       onChangeText={(e)=>{Pincode(e);}}
       placeholderTextColor='#51668A'
     />
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{pincodeerr}</Text>
   
      <Text style={{height:0,marginTop:-12}}></Text>
          <DropDownPicker style={[styles.customInputVerify,styles.customInputVerifyun]}
              open={open}
              value={value}
              items={university}
              showTickIcon={false}
              setOpen={setOpen}
              searchable={true}
              setValue={setValue}
              setItems={setUniversity}
              placeholder="University"
              listMode="MODAL"
              textColor=""
              onChangeValue={(value) => {
                if(value!=null){
                  setuniversity(value)
                }
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
                borderColor:"#687690",    
                paddingBottom:5       
              }}
              selectedItemLabelStyle={{
                fontWeight: "900",
                color:"#45B5C0",
                fontSize:18
              }}
              searchContainerStyle={{
                borderBottomColor: "#687690"
              }}
              searchPlaceholderTextColor="#687690"
              searchTextInputStyle={{
                color: "#687690",
                borderColor:"#687690"
              }}
            />
           <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{universityerr}</Text>

          <DropDownPicker style={styles.customInputVerify}
              open={open1}
              value={value1}
              items={college?college:SelectList}
              setOpen={setOpen1}
              searchable={true}
              showTickIcon={false}
              setValue={setValue1}
              setItems={setcollege}
              placeholder="college"
              listMode="MODAL"
              onChangeValue={(value) => {
                if(value!=null){
                  setCollege(value)
                }
              }}
              textStyle={{
                fontSize: 16,
                color:"#687690",
                fontFamily: 'PlusJakartaSans-Regular',
                textTransform:"capitalize"
              }}
              listItemLabelStyle={{
                color: "#687690",
                fontWeight:"800",
                borderBottomWidth:1,
                borderColor:"#687690",    
                paddingBottom:5  
              }}
              selectedItemLabelStyle={{
                fontWeight: "900",
                color:"#45B5C0",
                fontSize:18
              }}
              searchContainerStyle={{
                borderBottomColor: "#687690"
              }}
              searchPlaceholderTextColor="#687690"
              searchTextInputStyle={{
                color: "#687690",
                borderColor:"#687690"
              }}
            />
 
      <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{clgerr}</Text>
      <TextInput style={[styles.customInputVerifyFull,{fontFamily:"PlusJakartaSans-Regular"}] } 
       autoCapitalize="none"
       placeholder='Set Password*'
       hideShow={showeye}
       secureTextEntry={showeye}
      // onChangeText={(e)=>{setPassword(e)}}
       onChangeText={(text)=>setPassword((text))}
      placeholderTextColor='#51668A'
     />
    <Ionicons  style={styles.eyeIcon} name={showeye ? 'eye-off' : 'eye'} size={24} color="#51668A" onPress={() => setshoweye(!showeye)} />
    <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{passworderr}</Text>
   
   <Text style={[styles.headTexts,{fontFamily:"Inter-SemiBold"}]}>Upload College ID/Library Card</Text>
 
   <View>
    <TouchableOpacity onPress={() => handlePickupModal("document")}>
      <View style={{borderColor:"#D5DEED",borderRadius:4,borderStyle: 'dashed',borderWidth:1.4,width:"100%",height:102,justifyContent:"center",alignItems:"center"}}>
      <Image source={require('../assets/icons/upload-img.png')} style={{alignSelf:"center"}}  />
      <Text style={{textAlign:"center",fontSize:14,color:"#2376E5",fontWeight:"600",paddingVertical:6,fontFamily:"Inter-SemiBold"}} >Upload your file</Text>
      <Text style={{textAlign:"center",fontSize:12,color:"#51668A",fontWeight:"400",fontFamily:"Inter-Regular"}}>Upload JPG max 2MB</Text>
      </View>
    </TouchableOpacity>
     <View style={{paddingBottom:14}}></View>
      {imgurl && <Image source={{ uri: imgurl }} style={{ width: "100%", height: 150,}} />}
      <Text style={{color:"red", fontFamily:"PlusJakartaSans-Regular"}}>{mrnproofErr}</Text>
      </View>
 

   <View style={styles.verifyNextFooterpara}>
      {/* <Text style={styles.headTextpara}> </Text> */}
      <View style={{
              flexDirection:"row"
            }}>
        <Text onPress={() => navigation.navigate('Verification')} style={{fontFamily:"Inter-Regular"}}>By continuing, you agree to the </Text>
        <TouchableOpacity >
          <Text style={{color: '#2376E5', fontWeight: '700',fontSize:14}}  onPress={() =>{ navigation.navigate('TermsAndCondition')}} >Terms & Conditions </Text>
        </TouchableOpacity>
      </View>
    </View>

    <Text style={{color:'red'}}>{err}</Text>
    {submitbtn?<CustomButton label={'Submitting...'}  />:<CustomButton label={'Continue'} onPress={() => form_submit()} />}

    <Modal isVisible={isModalVisible} height={"100%"} style={{alignItems:'center', justifyContent:"center", borderWidth:0, borderRadius:30/2,maxHeight:230, backgroundColor:'#fff', bottom:'-65%',}}>
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
)
}


const styles = StyleSheet.create({
  eyeIcon:{
    zIndex:1,
    alignSelf:'flex-end',
    marginTop:-50,
     marginRight:30,
     marginBottom:30
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
      textTransform:"capitalize",
      marginBottom:4
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
  multiInputR:{
   
    display:"flex",
    flexDirection:"row",
  alignItems:"center",
  width:"100%"
 

},
customInputVerify:
{backgroundColor:"transparent",
fontSize:16,color:"#071B36",
// width:320,
width: "100%",
height:48,
marginTop:10,
borderRadius:0,
borderBottomWidth:1,
borderLeftWidth:0,
borderRightWidth:0,
borderTopWidth:0,
borderColor:"#6C81A6",
paddingLeft:8,
textColor:'red',
tintColor:'#ffffff',
color:"red!important",
zIndex:1
},
customInputVerifyun:
{backgroundColor:"transparent",
fontSize:16,color:"#071B36",
// width:320,
width: "100%",
height:48,
marginTop:10,
borderRadius:0,
borderBottomWidth:1,
borderLeftWidth:0,
borderRightWidth:0,
borderTopWidth:0,
borderColor:"#6C81A6",
paddingLeft:8,
textColor:'red',
tintColor:'#ffffff',
color:"red!important",
ZoomIn:9999
},
customInputVerifyselect:{
    fontSize:14,
    color:"#071B36",
    marginTop:10,
    width:"48%",
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
  customInputVerifyFull:{
      fontSize:16,
      color:"#687690",
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

export default RegisterStudentScreen