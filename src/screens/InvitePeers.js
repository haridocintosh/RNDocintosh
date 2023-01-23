import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView,Image,SafeAreaView} from 'react-native'
import Checkbox from 'expo-checkbox';
import CustomButton from '../components/CustomButton';
const styelcss = require('../assets/css/style');
import { useNavigation } from '@react-navigation/native';


const InvitePeers = ({route}) => {
    const navigation = useNavigation();
    const {alluserContact} = route.params;
    const [isChecked, setChecked] = useState(false);
    const [contactData, setcontactData] = useState('');
    const [contactData1, setcontactData1] = useState(alluserContact);

    const onChecked = (usernumber)=>{
        let copy=[...contactData];
        copy =[...copy,usernumber]
         setcontactData(copy)
    
        const newItem = contactData1.map((val)=>{
            if(val.phoneNumbers[0].number==usernumber){
              return {...val, isSelected:!val.isSelected }
            }else{
              return val
            }
          })
         
          setcontactData1(newItem);
          var array = [...contactData]; // make a separate copy of the array
          var index = array.indexOf(usernumber)
            if(index !== -1) {
              array.splice(index, 1);
              setcontactData(array);
            }
            if(contactData.length){
                if(contactData1.length==(contactData.length)){
                    setChecked(true)}else{
                    setChecked(false)
                }
            }
         }

    const onAllChecked=()=>{
        const newItem = contactData1.map((val)=>{
            let copy=[...contactData];
            copy =[...copy,val.phoneNumbers[0].number]
            setcontactData(copy)
    
            if(val.phoneNumbers[0].number){
              return {...val, isSelected:true }
            }else{
              return val
            }
          })
         
          setcontactData1(newItem);
          setChecked(true)
         
    }
    useEffect(() => {
       const setdata= async ()=>{
        const newdata =await alluserContact.map(element=> {return{...element,isSelected:false}}); 
       setcontactData1(newdata);
       }
       setdata()
   
    },[])
    
  return (
    <View style={{paddingTop:10,paddingHorizontal:20,flex:1,height:"100%"}}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnable={true}>
            <View style={[styelcss.selectAllList,{flex:12,height:"100%"}]}>
                <Text style={styelcss.invitePeersHeadTxt}>Select all</Text>
                <Checkbox  onValueChange={()=>{ onAllChecked()}} value={isChecked} />
            </View>
           
            {
            contactData1.map((element,index) => {
                return (
                    <View style={styelcss.peersmaniListArea} key={index} >
                    <View style={styelcss.peersSubiListArea}>
                    <Image style={styelcss.tinyLogo} source={require('../assets/dr-icon/dr-peer-img.png')}/>
                    <View style={styelcss.peerListcontent}>
                        <Text style={styelcss.peersubtext}>{element.name}</Text>
                        <Text style={styelcss.peersubtextpara}>{element.phoneNumbers[0].number}</Text>
                    </View>
                    </View>

                    <Checkbox 
                      key = {element.phoneNumbers[0].number}
                      value={element.isSelected}
                      onValueChange={()=>{ onChecked(element.phoneNumbers[0].number)}} 
                   />
                </View>
                );
            })
        }
            
                  
        </ScrollView>
        <View style={{marginTop:10,zIndex:1,width:"100%",bottom:0,backgroundColor:"#f1f1f1",paddingTop:6}}>
                <CustomButton label={'Continue'} onPress={() => navigation.navigate('Login')} />
                <Text style={{textAlign:"center",fontSize:14,fontWeight:"700",color:"#2376E5",marginBottom:10,marginTop:-15}}>Select Manually</Text>
        </View>
    </View>
  )
}

export default InvitePeers