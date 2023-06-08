import { View, Text, SafeAreaView ,TextInput} from 'react-native'
import React,{useEffect, useState} from 'react';
import { Button } from 'react-native-elements';
import { styles } from './DeactivateNDeleteAccountStyles';
import ConfirmModal from '../../../utils/ConfirmModal';
import { getLocalData } from '../../../apis/GetLocalData';
import { useDispatch } from 'react-redux';
import {useForm, Controller} from 'react-hook-form';


const ConfirmationAction = ({navigation,route}) => {
    const [modalToggle, setModalToggle] = useState(false)
    const {value} = route?.params;
    const dispatch = useDispatch();
    const {control, handleSubmit, reset, formState: { errors }} = useForm({mode: 'onBlur'});

   
    const onSubmit = async (data) => {
      if(value == 2){
        navigation.navigate('DeleteAccount',{data});
      }else{
          setModalToggle(true);
      }
    }

    const handleOkay = () => {
      getLocalData('USER_INFO').then(async(res) => {
        const reData = res?.data;
        const resultdetactiveDelete = await dispatch(getDeactiveDeleteApi({userID : reData?.id,status:5}));
      })
    }

    useEffect(() =>{
        navigation.setOptions({title: value == 1 ? "Deactivate account" : "Delete account"});
    },[]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#ecf2f6",padding:15 }}>
      <ConfirmModal 
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        handleOkay={handleOkay}
        activityTitle={"Are you sure you want to deactivate your profile? "}
      />
      <Text style={styles.aboutAcountTitle}> You are about to {value == 1 ? "Deactivate" : "Delete"} your account</Text>
        {/* <TextInput
            // value={value}            
            // onBlur={onBlur}            
            // onChangeText={value => onChange(value)}
            placeholder='Password*'
            style={styles.input}
        /> */}
        <Controller
            control={control}        
            name="password"      
            // defaultValue={userdata?.summary}
            rules={{
                required: true,
            }}  
            render={({field: {onChange, value, onBlur}}) => (
            <TextInput
                value={value}            
                onBlur={onBlur}       
                placeholder='Password*'     
                onChangeText={value => onChange(value)}
                style={styles.input}
            />
            )}  
        />
        {errors.password && <Text style={styles.errorMsg}>This field is required!</Text>}
      <View>
            <Button title={`Confirm & ${value == 1 ? "Deactivate" : 'Delete'}`} buttonStyle={{backgroundColor:'#2C8892',width:'100%',marginTop:15}}
            titleStyle={{ color:'#fff', textAlign:"center"}} onPress={handleSubmit(onSubmit)}/>
            <Button title="cancel" buttonStyle={{backgroundColor:'#fff',width:'100%',marginTop:15,borderWidth:2,borderColor:"#2C8892"}}
            titleStyle={{ color:'#2C8892', textAlign:"center"}} onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  )
}

export default ConfirmationAction;