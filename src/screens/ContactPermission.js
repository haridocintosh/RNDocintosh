import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView,Image, ActivityIndicator,Platform,Linking, TouchableOpacity,FlatList,TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Contacts from 'expo-contacts';
import CheckBox from "react-native-check-box";
const styelcss = require('../assets/css/style');
import { AntDesign } from '@expo/vector-icons';
import { getLocalData } from '../apis/GetLocalData';
import { sendInvitation } from '../../redux/reducers/ALL_APIs';
import { useDispatch } from "react-redux";
import Toast from 'react-native-simple-toast';

 

export default function ContactPermission({navigation}) {
  const refInput = React.useRef(null);
  const [contactList, setContact]= useState();
  const [isChecked, setisChecked] = useState(false);
  const [sliceCount, setSliceCount] = useState(10);
  const [totalSlice, setTotalSlice] = useState(0);
  // const [contactData, setcontactData] = useState('');
  // const [contactData1, setcontactData1] = useState(contactList);
  const [inputText,setInputText] = useState(null);
  const [item, setItem] = useState()
  const [selectedList, setSelectedList] = useState();
  const [loading, setLoading]  = useState(false);
  const [spinner, setSpinner]  = useState(false);
  const dispatch = useDispatch();

  const handleChange = (phoneNumbers) => {
    // setSpinner(true);
    let temp = contactList.map((data) => {
      if (phoneNumbers === data.id) {
        return { ...data, isSelected: !data.isSelected };
      }
      return data;
    });
    setContact(temp);
    const trueVal = temp
      .filter((val) => val.isSelected == true)
      .map((temp) => temp?.phoneNumbers?.[0].number);
    setSelectedList(trueVal)
  };

  const onAllChecked=()=>{
    setisChecked(prev => !prev);
    if(isChecked){
      const selectAll = contactList.map((data) => {
        return {...data ,isSelected: false}
      });
    setContact(selectAll);
    const trueVal = selectAll
      .filter((val) => val.isSelected == true)
      .map((data) => data?.phoneNumbers?.[0].number);
    setSelectedList(trueVal);
    }else{
      const selectAll = contactList.map((data) => {
        return {...data ,isSelected: true }
      });
      setContact(selectAll);
      const trueVal = selectAll
      .filter((val) => val.isSelected == true)
      .map((data) => data?.phoneNumbers?.[0].number);
       setSelectedList(trueVal);
    }
  }

  const sentInvite = async () => {
    const uploadData = {usercontact:selectedList};
    const result = await dispatch(sendInvitation(uploadData));
    console.log("result",result.payload);
     if(result.payload.status=="Success"){
      Toast.show(result.payload.message);
      getLocalData("USER_INFO").then((res) => {
        if(res?.login){
          navigation.goBack();
        }else{
          navigation.navigate("Login");
        }
      })
     }
    }
     
    
  

  useEffect(() => {
    navigation.setOptions({ title: 'Invite Peers'});
    getPrermission();
  }, []);


    const getPrermission = async()=>{
    const { status } = await Contacts.requestPermissionsAsync();
    if(status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
       if(data.length > 0) {
        const contact = await data.map(element=> {return{...element,isSelected:false}});
        setTotalSlice(contact.length)  
        setContact(contact);
        setItem(contact)
        setLoading(false);
       }
    }else{
     //navigation.navigate('Login');
     Toast.show('Permission deny');
    }
  }
  
  const handleSubmit = async()=>{
    navigation.navigate('InvitePeers',{
      alluserContact :contactList,
    }) 
  };

 const onChangeText =  (text) =>{
  if (text) {
      const newData = item?.filter((data) => {
        const itemData = data?.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setContact(newData);
      setInputText(text);
    } else {
      setContact(item);
      setInputText(text);
    }
}

const loadMore =  () =>{
  setSliceCount(sliceCount + 10);
}


if(loading){
  return(
  <View style={{flex:1, justifyContent:'center', alignItems:'center' }} >
      <ActivityIndicator size={'large'} color={"#2C8892"}/>
  </View>)
}

const renderItem = (item) => {
  return(
    <View style={styelcss.peersmaniListArea}>
        <View style={styelcss.peersSubiListArea}>
            <Image style={styelcss.tinyLogo} source={require('../assets/dr-icon/normal.png')}/>
            <View style={styelcss.peerListcontent}>
              <Text style={[styelcss.peersubtext,{fontFamily:"Inter-Regular"}]}>{item?.item.name}</Text>
              <Text style={[styelcss.peersubtextpara,{fontFamily:"Inter-Regular"}]}>
                  {item?.item.phoneNumbers?.[0]?.number} 
              </Text>
            </View>
        </View>
        <TouchableOpacity>
          <CheckBox
              onClick={() => handleChange(item.item.id)}
              isChecked={item.item.isSelected}
              checkBoxColor="#2C8892"
          />
        </TouchableOpacity>
    </View>
  )
}

  return (
    <View style={{paddingHorizontal:20,flex:1,height:"100%"}}>
    <Text>{(loading)?'Loading Data....':<Text></Text>}</Text> 
        <View style={styelcss.selectAllListContainer}>
          <View style={styelcss.searchContactContainer}>
            <AntDesign name="search1" size={24} color="black" onPress={() => refInput.current.focus()}/>
            <TextInput
              ref={refInput}
              placeholder={"Search"}
              style={styelcss.searchTextInput}
              onChangeText={onChangeText}
              value={inputText}
            />
          </View>
          <View style={styelcss.selectAllList}>
            <Text style={[styelcss.invitePeersHeadTxt]}>Select all</Text>
            {spinner ? <ActivityIndicator size={'small'} color={"#2C8892"}/>:
            <CheckBox  
              onClick={()=> onAllChecked()} 
              isChecked={isChecked} 
            />}
          </View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true} 
      keyboardShouldPersistTaps='handled'>
       
      <FlatList
        data={contactList?.slice(0,sliceCount)}
        renderItem={renderItem}
        keyExtractor={(item,i) => i}
      />
      {totalSlice >= sliceCount &&
      <TouchableOpacity style={{marginTop:10,width:"100%",alignItems:'center'}} onPress={() => loadMore()}>
          <Text style={{color:'#2C8892',fontFamily:"PlusJakartaSans-Bold",}}>Load More...</Text>
      </TouchableOpacity>}
    </ScrollView>
    <View style={{marginTop:10,zIndex:1,width:"100%",bottom:0,backgroundColor:"#f1f1f1",paddingTop:6}}>
          <CustomButton label={'Continue'} onPress={() => sentInvite()} />
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:"100%",
    backgroundColor: '#fff',
    paddingHorizontal:20,
    position:"relative",
    width:"100%"
  }
})