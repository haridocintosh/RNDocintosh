import React,{useState,useEffect } from 'react';
import { View, Text ,TextInput,Image,SafeAreaView, ScrollView, Alert, StyleSheet, Pressable,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import Modal from "react-native-modal";
import { getLocalData } from '../apis/GetLocalData';



const EditProfileScreen = ({navigation}) => {
    // form validation start here
    const [userInfo, setUserInfo] = useState({
      email:'',
      mobileNo:'',
      pinCode:'',
      about:'',
      Course:'',
      clgName:'',
      nameOfAward:'',
      achivement:'',
    });
    const [userdata,setuserdata]=useState([])

  const isValidemailRegex      =    /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const isValidmobileNoRegex   = /^[0]?[789]\d{9}$/; 
  
  
  const [message , setmessage] = useState();
    
  const isValidObjField = (obj) =>{
  return Object.values(obj).every(Value => Value.trim())
  }
  const updateError = (error, stateUpdater) =>{
    stateUpdater(error);
    setTimeout(() => {
      stateUpdater('')
    }, 2500);
  
  }
 

    const  handleOnChangeEmail = (text)=>{
      if(!isValidemailRegex.test(text)){
          setmessage("Please enter valid email!");
      }else{
          setmessage('');
      }
      setUserInfo({ ...userInfo, 
        email: text,
      });
    }
    const handleOnChangeMobileNo = (number) =>{
      if(!isValidmobileNoRegex.test(number)){
        setmessage("Please Enter Valid Mobile No!")
      }else{
        setmessage('');
      }
      setUserInfo({
        ...userInfo,
         mobileNo:number,
      })
    }

   
    const handleOnChangeCourse = (text) =>{
      if(!isValidmobileNoRegex.test(text)){
        setmessage("Please Enter Valid Mobile No!")
      }else{
        setmessage('');
      }
      setUserInfo({
        ...userInfo,
        Course:text,
      })
    }
  // const  isValidForm = () =>{
  // if(!isValidObjField(userInfo)) return updateError('Required All Fields..!', setError)
  // if(!isValidEmail(email)) return updateError('Enter Correct Email Id..!', setError)
  // if(!about.trim() || about.length < 30) return updateError('min 100 Character..!', setError)
  // }
    const submitForm = () =>{
    

    if(!userInfo.email) {
      setmessage('Please fill the form ')
    }
    if (!userInfo.mobileNo) {
      setmessage('Please Enter The Mobile No!')
      
    }
    if(!userInfo.Course){
      setmessage('please Enter Course!')
    }
    
    
    }
    // form validation end here


 
 
    const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [mobileNumber, setMobileNumber] = useState(false);

  const mobileModal = () => {
    setMobileNumber(!mobileNumber);
  };
  const [emailid, setemailid] = useState(false);

  const emailModal = () => {
    setemailid(!emailid);
  };
  const [aboutMe, setaboutMe] = useState(false);

  const aboutMeModal = () => {
    setaboutMe(!aboutMe);
  };
  const [qualification, setQualification] = useState(false);

  const qualificationModal = () => {
    setQualification(!aboutMe);
  };
  const [awards, setAwards] = useState(false);

  const awardsModal = () => {
    setAwards(!awards);
  };
  const [publication, setPublication] = useState(false);

  const publicationModal = () => {
    setPublication(!publication);
  };
  const [Interests, setInterests] = useState(false);

  const InterestsModal = () => {
    setInterests(!Interests);
  };

  const asyncFetchDailyData = async () => {
    navigation.setOptions({ title: 'Edit Profile'});
    getLocalData('USER_INFO').then((res) => {
      const reData = res?.data;
      setuserdata(reData);
    });
  }
  

    useEffect(()=>{
      asyncFetchDailyData();
    },[])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F2FAFA'}}>
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
      <View style={{paddingHorizontal:10}}>
        <Card style={{paddingBottom:20, marginVertical:10,borderRadius:10 }}>
        {/* <View style={{backgroundColor:'#F5F5F5', borderRadius:50, width:80, height:80,alignSelf:'center',marginTop:20}}>
        </View> */}
        <Image source={{uri:userdata.profileimage}} style={styles.profileimg}/>
          <View>
              <Text style={{alignSelf:'center',fontSize:20,fontWeight:'600'}}>{userdata.first_name} {userdata.last_name} <Image source={require('../assets/images/celTick.png')}/></Text>
              <Text style={{color:'#51668A',alignSelf:'center',textAlign:'center', flexDirection:'row', width:300}}>
                 {userdata.speciality}| {userdata.city}
                 <TouchableOpacity onPress={toggleModal}>
                  {/* <Entypo name="edit" size={20} color="black"  style={{marginLeft:10,color:'#2C8892'}}  /> */}
                </TouchableOpacity>
              </Text>
          </View>
        <View style={{padding:20}}>
        <View style={{marginBottom:10,marginTop:20}}>
        <Text style={{fontSize:20, fontWeight:'600',}}>Basic Info</Text>
        </View>
       
        <View style={{flexDirection:'row',paddingTop:16, justifyContent:'space-between'}}>
            <Text style={{fontSize:14,fontWeight:'500'}}>
            Mobile Number:  <Text style={{fontSize:14,fontWeight:'400',color:'#51668A', paddingLeft:10}}>{userdata.mobilenumber} </Text>
            </Text>
            <TouchableOpacity onPress={mobileModal}>
              {/* <Entypo name="edit" size={20} color="black"  style={{marginLeft:70,color:'#2C8892'}}  /> */}
            </TouchableOpacity>
            
        </View>
        <View style={{flexDirection:'row',paddingTop:16,justifyContent:'space-between'}}>
            <Text style={{fontSize:14,fontWeight:'500'}}>
            Email ID:  <Text style={{paddingLeft:10,fontSize:14,fontWeight:'400',color:'#51668A'}}>{userdata.email}</Text>
            </Text>
            <TouchableOpacity onPress={emailModal}>
              {/* <Entypo name="edit" size={20} color="black"  style={{marginLeft:70,color:'#2C8892'}}  /> */}
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',paddingTop:16}}>
            <Text style={{fontSize:14,fontWeight:'500'}}>
            MRN:  
            </Text>
            <Text style={{paddingLeft:10,fontSize:14,fontWeight:'400',color:'#51668A'}}>12345 | 2010</Text>
        </View>
        {/* <View style={{flexDirection:'row',paddingTop:16}}>
            <Text style={{fontSize:14,fontWeight:'500'}}>
            MRN Reg:
            </Text>
            <Text style={{paddingLeft:10,fontSize:14,fontWeight:'400',color:'#51668A'}}>Himachal Pradesh</Text>
        </View> */}
        </View>
    </Card>  


    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>About Me</Text>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginLeft:70,color:'#2C8892',alignSelf:'flex-end', marginTop:-20}} onPress={aboutMeModal} /> */}

        
        </View>
        <Text style={{paddingHorizontal:20,color:'#51668A',lineHeight:20,marginBottom:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet cursus pellentesque. Mauris gravida libero nec sapien ultricies blandit. </Text>
    </Card>
    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>Qualification</Text>
        <Text style={{fontSize:16,fontWeight:'400', marginTop:20, color:'#2376E5'}}><Entypo name="plus" size={15} color="#2376E5" /> Add Qualification</Text>
        </View>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginRight:20,color:'#2C8892',alignSelf:'flex-end', marginBottom:-20}} onPress={qualificationModal} /> */}
        
        <View style={{flexDirection:'row', paddingLeft:20}}>
            <Image source={require('../assets/images/mbbsimg.png')}></Image>
            <View style={{paddingLeft:10}}>
            <Text style={{fontSize:16, fontWeight:'500'}}>MBBS</Text>
            <Text style={{fontSize:14, fontWeight:'500',color:'#51668A'}}>Ramaiah Medical College</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>June 2019 - June 2024</Text>
           
            </View>       
        </View>
        <View style={{backgroundColor:'#D5DEED',width:"90%", alignSelf:'center',height:1,marginTop:10}}></View>
    <View style={{marginTop:10,marginBottom:20}}>
    <Text style={{alignSelf:'center',fontSize:16, fontWeight:'400',color:'#2376E5'}}>Show all 4 Qualification <Feather name="arrow-right" size={14} style={{paddingTop:20,zIndex:1}} color="#2376E5" /></Text>

    </View>
       
    </Card>
    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>Awards</Text>
        <Text style={{fontSize:16,fontWeight:'400', marginTop:20, color:'#2376E5'}}><Entypo name="plus" size={15} color="#2376E5" /> Add Awards</Text>
        </View>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginRight:20,color:'#2C8892',alignSelf:'flex-end', marginBottom:-20}} onPress={awardsModal} /> */}
        
        <View style={{flexDirection:'row', paddingLeft:20}}>
        
            <Image source={require('../assets/dr-icon/trofee.png')}></Image>
            <View style={{paddingLeft:10}}>
            <Text style={{fontSize:16, fontWeight:'500'}}>Lorem ipsum dolor sit amet</Text>
            
            <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>June 2021</Text>
           
            </View>       
        </View>
        <View style={{backgroundColor:'#D5DEED',width:"90%", alignSelf:'center',height:1,marginTop:10}}></View>
   
       
    </Card>
    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>Publications</Text>
        <Text style={{fontSize:16,fontWeight:'400', marginTop:20, color:'#2376E5'}}><Entypo name="plus" size={15} color="#2376E5" /> Add Publications</Text>
        </View>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginRight:20,color:'#2C8892',alignSelf:'flex-end', marginBottom:-20}} onPress={publicationModal} /> */}
        
        <View style={{flexDirection:'row', paddingLeft:20}}>
            {/* <Image source={publication}></Image> */}
            <View style={{paddingLeft:10}}>
            <Text style={{fontSize:16, fontWeight:'500'}}>Lorem ipsum dolor sit amet</Text>
            <Text style={{fontSize:12, fontWeight:'400', color:'#51668A'}}>June 2021</Text>
            </View>       
        </View>
        <View style={{backgroundColor:'#D5DEED',width:"90%", alignSelf:'center',height:1,marginTop:10}}></View>
   
       
    </Card>


    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>Achievements</Text>
        <Text style={{fontSize:16,fontWeight:'400', marginTop:20, color:'#2376E5'}}><Entypo name="plus" size={15} color="#2376E5" /> Add Achievements</Text>
        </View>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginRight:20,color:'#2C8892',alignSelf:'flex-end', marginBottom:-20}} /> */}
        
        <View style={{flexDirection:'row', paddingLeft:20}}>
            <View style={{paddingLeft:10,paddingBottom:14}}>
              <Text style={{fontSize:16, fontWeight:'500'}}>Lorem ipsum dolor sit amet</Text>
            </View>       
        </View>
    </Card>
    <Card style={{marginVertical:10, borderRadius:10}}>
        <View style={{padding:20, display:'flex'}}>
        <Text style={{fontSize:16,fontWeight:'600'}}>Interests</Text>
        {/* <Entypo name="edit" size={20} color="black"  style={{marginLeft:70,color:'#2C8892',alignSelf:'flex-end', marginTop:-20}} onPress={InterestsModal} /> */}
        </View>
       <View style={{flexDirection:'row', paddingLeft:20}}>
        <View style={{borderRadius:50, width:150, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>Family Medicine</Text>
        </View>
        <View style={{borderRadius:40/2, width:120, height:40,marginLeft:10, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>Radiology</Text>
        </View>
       </View>
       <View style={{flexDirection:'row', paddingLeft:20, paddingTop:16}}>
        <View style={{borderRadius:50, width:150, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>General Surgery</Text>
        </View>
        <View style={{borderRadius:40/2, width:180, height:40,marginLeft:10, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>Gastroenterology</Text>
        </View>
       </View>
       <View style={{flexDirection:'row',  paddingLeft:20, paddingTop:16}}>
        <View style={{borderRadius:50, width:250, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>Obstetrics and gynaecology</Text>
        </View>
    
       </View>
       <View style={{marginBottom:20}}></View>
    </Card>



      </View>
        {/* edit Location MOdal start here */}
        <Modal
          style={{}}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
          style={styles.closebtn}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text><Entypo name="cross" size={20} color="black" /></Text>
          </Pressable>
          <Text style={styles.modalText}>Edit Location</Text>
          <View style={styles.input}>
          {/* <Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Edit Location*</Text> */}
          <TextInput
          placeholder="Location"
          keyboardType='number-pad'
          />
</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit location modal end here */}

  {/* edit  Mobile number start here */}
  <Modal

style={{}}
animationType="slide"
transparent={true}
visible={mobileNumber}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setMobileNumber(!mobileNumber);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setMobileNumber(!mobileNumber)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Mobile Number</Text>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Mobile Number*</Text>
<TextInput

placeholder="Mobile Number"
keyboardType='phone-pad'
onChangeText={(value) => handleOnChangeMobileNo(value)}

/>
{message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}

</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={submitForm}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit Mobile number end here */}

 {/* edit  Email start here */}
 <Modal

style={{}}
animationType="slide"
transparent={true}
visible={emailid}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setemailid(!emailid);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setemailid(!emailid)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Email ID</Text>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}} >Email ID*</Text>

{message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}
<TextInput
   autoCapitalize="none"
keyboardType="email-address" 
placeholder="kiran.y@gmail.com"
 onChangeText={(value) => handleOnChangeEmail(value)}
/>

</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={submitForm}
             
/>
</View>

</View>


</View>
</Modal>
{/* edit Email end here */}
{/* edit  About Me start here */}
<Modal

style={{}}
animationType="slide"
transparent={true}
visible={aboutMe}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setaboutMe(!aboutMe);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setaboutMe(!aboutMe)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit About Me</Text>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>About Me*</Text>
<TextInput
placeholder="kiran.y@gmail.com"
value={userInfo.about}
/>
{message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}

</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={submitForm}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit About Me end here */}

{/* edit  qualificationModal start here */}
<Modal

style={{}}
animationType="slide"
transparent={true}
visible={qualification}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setQualification(!qualification);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setQualification(!qualification)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Qualification</Text>
<View style={styles.input}>
{message ? (<Text style={{color:'red', fontSize:12, alignSelf:'center'}}>{message}</Text>):null}

<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Course*</Text>
<TextInput

placeholder="kiran.y@gmail.com"
onChangeText={userInfo.Course}


/>
</View>
<View style={{marginTop:20}}></View>

<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>College Name*</Text>
<TextInput
value='St.Oxford Medical College '
placeholder="kiran.y@gmail.com"


/>
</View>
<View style={{marginTop:20}}></View>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Year of Completion*</Text>
<TextInput
value='DM in Cardiology'
placeholder="kiran.y@gmail.com"


/>
</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit qualificationModal end here */}

{/* edit  Edit Awards  start here */}
<Modal

style={{}}
animationIn={'fadeInLeft'}

transparent={true}
visible={awards}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setAwards(!awards);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setAwards(!awards)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Awards</Text>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Name of Award *</Text>
<TextInput
value='Lorem ipsum dolor sit amet'
placeholder="kiran.y@gmail.com"


/>
</View>
<View style={{marginTop:20}}></View>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Date*</Text>
<TextInput
value='MM/YYYY'
placeholder="MM/YYYY"
keyboardType='default'
/>
</View>

<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit Awards end here */}
{/* edit  About Me start here */}
<Modal

style={{}}
animationOut={'bounceInLeft'}
animationIn={'slideInRight'}
transparent={true}
visible={publication}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setPublication(!publication);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setPublication(!publication)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Publications</Text>
<View style={styles.input}>
<Text style={{fontSize:12, fontWeight:'400', color:'#071B36'}}>Achievement*</Text>
<TextInput
value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis porta risus.'
placeholder="kiran.y@gmail.com"


/>
</View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit About Me end here */}
{/* edit  About Me start here */}
<Modal

style={{}}
animationType="slide"
transparent={true}
visible={Interests}
onRequestClose={() => {
Alert.alert('Modal has been closed.');
setInterests(!Interests);
}}>
<View style={styles.centeredView}>
<View style={styles.modalView}>
<Pressable
style={styles.closebtn}
onPress={() => setInterests(!Interests)}>
<Text><Entypo name="cross" size={20} color="black" /></Text>
</Pressable>
<Text style={styles.modalText}>Edit Interests</Text>

<View style={{flexDirection:'row',width:300}}>
        <View style={{borderRadius:50, width:100, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:12, fontWeight:'400'}}>General Surgery</Text>
        </View>
        <View style={{borderRadius:50, width:150, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>General Surgery</Text>
        </View>
        <View style={{borderRadius:50, width:150, height:40, borderWidth:2,borderColor:'#45B5C0'}}>
            <Text style={{alignSelf:'center',marginTop:8, fontSize:14, fontWeight:'400'}}>General Surgery</Text>
        </View>
        </View>
<View style={{marginTop:20}}>
<Button
  title="Save"
  buttonStyle={{

    width:300,
     backgroundColor:'#2C8892',
                
              }}
              titleStyle={{
                color:'#fff',
                textAlign:"center"
              }}
              onPress={() => navigation.navigate('')}
             
/>
</View>
</View>
</View>
</Modal>
{/* edit About Me end here */}
    </ScrollView>
  </SafeAreaView>
  );
}

        
const styles = StyleSheet.create({
  closebtn: {
    backgroundColor: "#FFFF",
    alignSelf:'flex-end',
    margin:10


  },
    
    labels:{
        color:'#071B36'
        
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
    input:{
    alignSelf:'center',
    marginHorizontal:20,
    borderBottomColor:'#000',
    borderBottomWidth:0.5,
    width:300,
    
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding:20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4,
      elevation: 10,
      width:'100%',
      // height:200
      

    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      alignSelf:'flex-start',
      marginLeft:5,
      fontSize:18,
      fontWeight:'600'
     
    },
    profileimg:{
      borderColor:"#DCE0E8",
      borderWidth:5,
      borderRadius:50,
      width:72,
      height:72,
      alignSelf:'center',
      marginVertical:10
    },
  });
export default EditProfileScreen;